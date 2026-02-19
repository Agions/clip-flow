/**
 * 模型选择器组件
 * 专业的 AI 模型选择界面
 */

import React, { useState, useMemo } from 'react';
import {
  Card,
  Radio,
  Space,
  Typography,
  Tag,
  Badge,
  Tooltip,
  Button,
  Input,
  Segmented,
  Spin,
  Empty,
  Divider,
  Alert,
  Row,
  Col,
  Avatar
} from 'antd';
import {
  CheckCircleFilled,
  RobotOutlined,
  LoadingOutlined,
  ThunderboltOutlined,
  StarOutlined,
  DollarOutlined,
  GlobalOutlined,
  CodeOutlined,
  VideoCameraOutlined,
  EditOutlined,
  SettingOutlined,
  ExperimentOutlined
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useModel, useModelCost, useRecommendedModel } from '@/core/hooks/useModel';
import { LLM_MODELS, MODEL_RECOMMENDATIONS, DEFAULT_LLM_MODEL } from '@/core/constants';
import { MODEL_PROVIDERS } from '@/core/config/models.config';
import type { AIModel, ModelCategory, ModelProvider } from '@/core/types';
import styles from './index.module.less';

const { Title, Text, Paragraph } = Typography;

// 分类选项
const CATEGORY_OPTIONS = [
  { label: '全部', value: 'all', icon: <RobotOutlined /> },
  { label: '文本', value: 'text', icon: <EditOutlined /> },
  { label: '代码', value: 'code', icon: <CodeOutlined /> },
  { label: '图像', value: 'image', icon: <ExperimentOutlined /> },
  { label: '视频', value: 'video', icon: <VideoCameraOutlined /> }
];

// 任务推荐标签
const TASK_RECOMMENDATIONS = [
  { key: 'script', label: '脚本生成', icon: <EditOutlined />, desc: '生成高质量视频脚本' },
  { key: 'analysis', label: '视频分析', icon: <VideoCameraOutlined />, desc: '深度分析视频内容' },
  { key: 'code', label: '代码辅助', icon: <CodeOutlined />, desc: '编程和调试辅助' },
  { key: 'fast', label: '快速响应', icon: <ThunderboltOutlined />, desc: '低延迟快速响应' }
];

interface ModelSelectorProps {
  onSelect?: (modelId: string) => void;
  onConfigure?: (provider: ModelProvider) => void;
  compact?: boolean;
  showCost?: boolean;
  taskType?: 'script' | 'analysis' | 'code' | 'fast';
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  onSelect,
  onConfigure,
  compact = false,
  showCost = true,
  taskType
}) => {
  const {
    selectedModel,
    selectedProvider,
    modelSettings,
    isConfigured,
    availableModels,
    selectModel,
    testConnection,
    isLoading,
    error
  } = useModel();

  const { estimateScriptCost, formatCost } = useModelCost();
  const { recommended, currentRecommended, selectRecommended } = useRecommendedModel(taskType || 'script');

  const [category, setCategory] = useState<ModelCategory | 'all'>('all');
  const [provider, setProvider] = useState<ModelProvider | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [testing, setTesting] = useState(false);

  // 转换 LLM_MODELS 为组件格式
  const allModels = useMemo(() => {
    return Object.values(LLM_MODELS).map(m => ({
      id: m.modelId,
      name: m.name,
      provider: m.provider as ModelProvider,
      category: m.capabilities as string[],
      description: `${m.name} - ${m.version}`,
      version: m.version,
      contextWindow: m.contextWindow,
      maxTokens: m.maxTokens,
      recommended: m.recommended,
      pricing: m.pricing
    }));
  }, []);

  // 过滤模型
  const filteredModels = useMemo(() => {
    let models = allModels;

    // 按分类过滤
    if (category !== 'all') {
      models = models.filter(m => m.category.includes(category));
    }

    // 按提供商过滤
    if (provider !== 'all') {
      models = models.filter(m => m.provider === provider);
    }

    // 按搜索过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      models = models.filter(m =>
        m.name.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query) ||
        m.provider.toLowerCase().includes(query)
      );
    }

    return models;
  }, [allModels, category, provider, searchQuery]);

  // 处理模型选择
  const handleSelect = (modelId: string) => {
    selectModel(modelId);
    onSelect?.(modelId);
  };

  // 测试连接
  const handleTest = async () => {
    setTesting(true);
    await testConnection();
    setTesting(false);
  };

  // 获取提供商图标
  const getProviderIcon = (providerId: ModelProvider) => {
    const config = MODEL_PROVIDERS[providerId];
    return config?.icon || '';
  };

  // 获取提供商名称
  const getProviderName = (providerId: ModelProvider) => {
    const config = MODEL_PROVIDERS[providerId];
    return config?.name || providerId;
  };

  // 渲染模型卡片
  const renderModelCard = (model: AIModel) => {
    const isSelected = selectedModel?.id === model.id;
    const isAvailable = availableModels.some(m => m.id === model.id);
    const cost = model.pricing ? formatCost(estimateScriptCost(500)) : null;

    return (
      <motion.div
        key={model.id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card
          className={`${styles.modelCard} ${isSelected ? styles.selected : ''} ${!isAvailable ? styles.unavailable : ''}`}
          onClick={() => handleSelect(model.id)}
          size="small"
          hoverable={isAvailable}
        >
          <div className={styles.cardHeader}>
            <div className={styles.modelInfo}>
              <Avatar
                src={getProviderIcon(model.provider)}
                size={compact ? 32 : 40}
                className={styles.providerAvatar}
              />
              <div className={styles.modelMeta}>
                <Text strong className={styles.modelName}>
                  {model.name}
                  {isSelected && <CheckCircleFilled className={styles.checkIcon} />}
                </Text>
                <Text type="secondary" className={styles.providerName}>
                  {getProviderName(model.provider)}
                </Text>
              </div>
            </div>
            <Space>
              {model.isPro && (
                <Tooltip title="专业版模型">
                  <StarOutlined className={styles.proIcon} />
                </Tooltip>
              )}
              {!isAvailable && (
                <Tag color="default" size="small">未配置</Tag>
              )}
            </Space>
          </div>

          {!compact && (
            <>
              <Paragraph className={styles.description} ellipsis={{ rows: 2 }}>
                {model.description}
              </Paragraph>

              <div className={styles.features}>
                {model.features.slice(0, 3).map((feature, idx) => (
                  <Tag key={idx} className={styles.featureTag}>
                    {feature}
                  </Tag>
                ))}
              </div>

              <Divider className={styles.divider} />

              <div className={styles.cardFooter}>
                <Space size="small">
                  <Tooltip title={`上下文: ${(model.contextWindow / 1000).toFixed(0)}K tokens`}>
                    <Tag icon={<RobotOutlined />} size="small">
                      {(model.contextWindow / 1000).toFixed(0)}K
                    </Tag>
                  </Tooltip>
                  {showCost && cost && (
                    <Tooltip title="预估成本（500字脚本）">
                      <Tag icon={<DollarOutlined />} color="green">
                        {cost}
                      </Tag>
                    </Tooltip>
                  )}
                </Space>
              </div>
            </>
          )}
        </Card>
      </motion.div>
    );
  };

  return (
    <div className={styles.container}>
      {/* 头部 */}
      <div className={styles.header}>
        <Title level={4} className={styles.title}>
          <RobotOutlined /> 选择 AI 模型
        </Title>
        {selectedModel && (
          <Space>
            <Text type="secondary">
              当前: <Text strong>{selectedModel.name}</Text>
            </Text>
            {isConfigured ? (
              <Badge status="success" text="已配置" />
            ) : (
              <Badge status="warning" text="未配置" />
            )}
          </Space>
        )}
      </div>

      {/* 错误提示 */}
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          closable
          className={styles.alert}
        />
      )}

      {/* 任务推荐 */}
      {taskType && (
        <div className={styles.recommendations}>
          <Text type="secondary" className={styles.sectionTitle}>
            <StarOutlined /> 推荐模型
          </Text>
          <Space wrap>
            {recommended.map((model, idx) => (
              <Button
                key={model.id}
                type={currentRecommended?.id === model.id ? 'primary' : 'default'}
                size="small"
                onClick={() => selectRecommended(idx)}
              >
                {idx === 0 && <StarOutlined />}
                {model.name}
              </Button>
            ))}
          </Space>
        </div>
      )}

      {/* 过滤器 */}
      <div className={styles.filters}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Input.Search
              placeholder="搜索模型..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              allowClear
              className={styles.searchInput}
            />
          </Col>
          <Col span={12}>
            <Segmented
              options={CATEGORY_OPTIONS.map(opt => ({
                label: opt.label,
                value: opt.value,
                icon: opt.icon
              }))}
              value={category}
              onChange={val => setCategory(val as ModelCategory)}
              block
            />
          </Col>
          <Col span={12}>
            <Segmented
              options={[
                { label: '全部', value: 'all' },
                ...Object.entries(MODEL_PROVIDERS).map(([key, config]) => ({
                  label: config.name,
                  value: key
                }))
              ]}
              value={provider}
              onChange={val => setProvider(val as ModelProvider)}
              block
            />
          </Col>
        </Row>
      </div>

      {/* 模型列表 */}
      <Spin spinning={isLoading} tip="加载中...">
        <AnimatePresence mode="popLayout">
          {filteredModels.length > 0 ? (
            <div className={compact ? styles.compactGrid : styles.modelGrid}>
              {filteredModels.map(renderModelCard)}
            </div>
          ) : (
            <Empty
              description="没有找到匹配的模型"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          )}
        </AnimatePresence>
      </Spin>

      {/* 底部操作 */}
      {selectedModel && !compact && (
        <div className={styles.footer}>
          <Divider />
          <Space>
            {!isConfigured ? (
              <Button
                type="primary"
                icon={<SettingOutlined />}
                onClick={() => onConfigure?.(selectedModel.provider)}
              >
                配置 {getProviderName(selectedModel.provider)} API
              </Button>
            ) : (
              <Button
                icon={testing ? <LoadingOutlined /> : <ThunderboltOutlined />}
                onClick={handleTest}
                loading={testing}
              >
                测试连接
              </Button>
            )}
          </Space>
        </div>
      )}
    </div>
  );
};

export default ModelSelector;

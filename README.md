```
 ██████╗██╗     ██╗██████╗ ███████╗██╗      ██████╗ ██╗    ██╗
██╔════╝██║     ██║██╔══██╗██╔════╝██║     ██╔═══██╗██║    ██║
██║     ██║     ██║██████╔╝█████╗  ██║     ██║   ██║██║ █╗ ██║
██║     ██║     ██║██╔═══╝ ██╔══╝  ██║     ██║   ██║██║███╗██║
╚██████╗███████╗██║██║     ██║     ███████╗╚██████╔╝╚███╔███╔╝
 ╚═════╝╚══════╝╚═╝╚═╝     ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝
```

# ClipFlow - AI 驱动的专业视频内容创作平台

ClipFlow 是一款面向影视创作者和内容创作者的专业 AI 视频内容创作平台，提供智能脚本生成、视频分析和混剪功能。

> 📄 **许可声明**: 本项目采用 **MIT License**，允许自由使用、修改和分发。详见 [LICENSE](./LICENSE)
> 
> 📝 **曾用名**: ReelForge → ClipFlow → ClipFlow (2026-02-19 更名)

---

## 更新日志 (2026-02-17)

### v1.1.0 - 工作流优化与唯一性保障

#### 新增功能
- ✅ **9步完整工作流**: 上传 → 分析 → 模板 → 生成 → 去重 → 唯一性 → 编辑 → 时间轴 → 导出
- ✅ **8种去重变体**: 保守型/平衡型/激进型/创意型/学术型/口语型/诗意型/技术型
- ✅ **自动去重**: 根据相似度自动选择变体策略，无需用户介入
- ✅ **唯一性保障**: 内容指纹 + 历史对比 + 自动重写
- ✅ **原创性检测**: 精确匹配/语义相似/模板检测/结构重复

#### 模型更新 (2026年最新)
- ✅ **百度 ERNIE 5.0** (2026-01)
- ✅ **阿里 Qwen 3.5** (2026-01)
- ✅ **月之暗面 Kimi 2.5** (2025-07)
- ✅ **智谱 GLM-5** (2026-01)
- ✅ **MiniMax M2.5** (2025-12)

### v1.0.0 - 正式发布

#### 核心功能
- ✅ **AI 脚本生成**: 支持 8 大 AI 提供商，智能生成视频解说脚本
- ✅ **视频分析**: 自动提取关键帧、场景检测、内容摘要
- ✅ **视频混剪**: 可视化编辑器，支持转场效果和字幕
- ✅ **项目管理**: 完整的项目生命周期管理
- ✅ **多模型支持**: OpenAI, Anthropic, Google, 百度, 阿里, 智谱, 讯飞, 腾讯

#### 技术特性
- ✅ **React 18 + TypeScript**: 现代化前端架构
- ✅ **Zustand 状态管理**: 轻量级、高性能状态管理
- ✅ **Tauri 桌面应用**: 跨平台桌面应用支持
- ✅ **Ant Design 5**: 企业级 UI 组件库
- ✅ **模块化架构**: 核心层、服务层、组件层分离

---

## 功能模块

### 1. AI 模型管理
- **模型选择器**: 智能推荐最适合任务的 AI 模型
- **成本估算**: 实时显示 API 调用成本
- **多提供商支持** (2026年最新):
  - OpenAI (GPT-5)
  - Anthropic (Claude 4)
  - 百度 (ERNIE 5.0)
  - 阿里 (Qwen 3.5)
  - 月之暗面 (Kimi k2.5)
  - 智谱 (GLM-5)
  - MiniMax (M2.5)

### 2. 视频处理
- **视频上传**: 拖拽上传，支持多种格式
- **视频分析**: 自动提取关键帧和场景
- **缩略图生成**: 智能生成视频预览图
- **格式转换**: 支持 MP4, MOV, WebM, AVI 等格式
- **导出设置**: 多种质量和分辨率选项

### 3. 脚本生成
- **智能生成**: 基于视频内容自动生成解说脚本
- **风格定制**: 专业/轻松/幽默/情感/技术/营销
- **语气调整**: 友好/权威/热情/平静/幽默
- **长度控制**: 简短(1-3分钟)/适中(3-5分钟)/详细(5-10分钟)
- **多语言**: 中文/英文
- **实时预览**: 生成过程可视化

### 4. 脚本编辑
- **富文本编辑**: 支持格式化文本
- **段落管理**: 添加/删除/调整段落
- **时间轴同步**: 脚本与视频时间轴关联
- **版本历史**: 自动保存编辑历史

### 5. 视频混剪
- **可视化编辑器**: 拖拽式剪辑界面
- **转场效果**: 淡入淡出/交叉溶解/擦除/滑动/缩放
- **字幕添加**: 自动生成和编辑字幕
- **音频控制**: 音量调整和背景音乐
- **导出预览**: 导出前预览效果

### 6. 项目管理
- **项目列表**: 网格/列表视图
- **搜索过滤**: 按名称、状态、日期筛选
- **导入导出**: JSON 格式项目数据
- **自动保存**: 定时自动保存项目

### 7. 用户设置
- **API 配置**: 管理各平台 API 密钥
- **偏好设置**: 主题/语言/自动保存等
- **导出历史**: 查看导出记录

---

## 技术栈

### 前端
- **框架**: React 18 + TypeScript 5
- **构建**: Vite 4
- **UI 库**: Ant Design 5
- **状态管理**: Zustand 4
- **动画**: Framer Motion
- **样式**: Less + CSS Modules

### 桌面应用
- **框架**: Tauri (Rust)
- **API**: 原生系统 API 调用

### 工具链
- **代码规范**: ESLint + Prettier
- **类型检查**: TypeScript
- **包管理**: pnpm/npm

---

## 项目结构

```
src/
├── core/                    # 核心层
│   ├── api/                 # API 客户端
│   │   └── client.ts        # 统一 HTTP 请求
│   ├── config/              # 配置文件
│   │   ├── app.config.ts    # 应用配置
│   │   └── models.config.ts # AI 模型配置
│   ├── constants/           # 常量定义
│   │   └── index.ts         # 所有常量（含 LLM_MODELS）
│   ├── hooks/               # 自定义 Hooks
│   │   ├── useModel.ts      # 模型管理
│   │   ├── useProject.ts    # 项目管理
│   │   ├── useVideo.ts      # 视频处理
│   │   └── useWorkflow.ts   # 工作流管理
│   ├── services/            # 服务层
│   │   ├── ai.service.ts    # AI 服务
│   │   ├── video.service.ts # 视频服务
│   │   ├── storage.service.ts # 存储服务
│   │   ├── vision.service.ts  # 视觉识别
│   │   ├── workflow.service.ts # 工作流服务
│   │   └── uniqueness.service.ts # 唯一性保障
│   ├── store/               # 状态管理
│   │   ├── app.store.ts     # 应用状态
│   │   ├── project.store.ts # 项目状态
│   │   └── user.store.ts    # 用户状态
│   ├── templates/           # 模板库
│   │   ├── script.templates.ts   # 脚本模板（7种）
│   │   ├── dedup.templates.ts    # 去重模板
│   │   └── dedup.variants.ts     # 去重变体（8种）
│   ├── types/               # 类型定义
│   │   └── index.ts         # 所有类型
│   └── utils/               # 工具函数
│       ├── index.ts         # 通用工具
│       └── hooks.ts         # 通用 Hooks
├── components/              # 组件层
│   ├── common/              # 通用组件
│   │   ├── Button/          # 按钮组件
│   │   └── Card/            # 卡片组件
│   ├── ModelSelector/       # 模型选择器
│   ├── VideoUploader/       # 视频上传
│   ├── ScriptGenerator/     # 脚本生成器
│   └── ScriptGeneratorV2/   # 优化版本
├── pages/                   # 页面层
│   ├── Home/                # 首页
│   ├── Dashboard/           # 仪表盘
│   ├── Projects/            # 项目列表
│   ├── ProjectDetail/       # 项目详情
│   ├── Editor/              # 编辑器
│   ├── VideoStudio/         # 视频工作室
│   ├── Workflow/            # 工作流（9步）
│   └── Settings/            # 设置
├── layouts/                 # 布局组件
├── assets/                  # 静态资源
└── App.tsx                  # 应用入口
```

---

## 快速开始

### 环境要求
- Node.js 18+
- pnpm 8+ 或 npm 9+
- Rust 环境（Tauri 开发）

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 启动前端开发服务器
pnpm dev

# 启动 Tauri 应用
pnpm tauri dev
```

### 构建应用

```bash
# 构建生产版本
pnpm tauri build
```

---

## 开发指南

### 代码规范

- **组件命名**: PascalCase (如 `VideoUploader`)
- **方法命名**: camelCase (如 `handleUpload`)
- **常量命名**: UPPER_SNAKE_CASE (如 `SCRIPT_STYLES`)
- **文件组织**: 按功能模块分组

### 状态管理

使用 Zustand 进行状态管理：

```typescript
// 使用应用状态
const { theme, setTheme } = useAppStore();

// 使用项目状态
const { projects, createProject } = useProjectStore();

// 使用用户状态
const { preferences, updatePreferences } = useUserStore();
```

### 服务调用

```typescript
// AI 服务
import { aiService } from '@/core/services';
const script = await aiService.generateScript(model, settings, params);

// 视频服务
import { videoService } from '@/core/services';
const info = await videoService.getVideoInfo(file);

// 存储服务
import { storageService } from '@/core/services';
storageService.projects.save(project);
```

### 常量使用

```typescript
import {
  SCRIPT_STYLES,
  TONE_OPTIONS,
  SCRIPT_LENGTHS,
  TARGET_AUDIENCES
} from '@/core/constants';
```

---

## 路线图

### ✅ v1.0.0 (已完成)
- [x] AI 脚本生成
- [x] 视频分析
- [x] 视频混剪
- [x] 多模型支持
- [x] 项目管理

### 🚀 v1.1.0 (进行中)
- [x] AI 智能剪辑助手
- [x] 场景/静音/关键帧检测
- [x] 批量视频处理
- [ ] 云端同步
- [ ] 团队协作
- [ ] 更多 AI 提供商

### 📅 v1.2.0 (计划中)
- [ ] 语音合成 (TTS)
- [ ] 自动字幕生成
- [ ] 视频模板市场
- [ ] 插件系统
- [ ] 移动端适配

### 🔮 v2.0.0 (远期)
- [ ] AI 视频生成
- [ ] 实时协作编辑
- [ ] 原生移动端应用
- [ ] 云服务版本

---

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 支持

如有问题或建议，欢迎提交 Issue 或联系开发者。

**GitHub**: https://github.com/Agions/clip-flow

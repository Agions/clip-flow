# Changelog

All notable changes to this project will be documented in this file.
## [2.0.0] - 2026-02-22

### ✨ 重大改进

#### 视频分析引擎
- **场景检测算法升级**: 从固定间隔分割改为颜色直方图 Chi-Square 差异检测
- 逐帧采样 RGB 直方图（64 bins），检测场景切换点
- 过短场景自动过滤（< 2s），回退机制保证结果

#### 视频处理服务
- **FFmpeg 执行层**: 新增 Tauri Shell 执行 + Web 端回退架构
- **导出管线增强**: 支持 CRF 质量档位、分辨率缩放（保持宽高比）、快速启动标志
- **字幕渲染**: ASS 样式支持（字体大小/颜色/背景/位置）
- 剪辑、合并、格式转换统一走 executeFFmpeg 通道

#### 工作流引擎
- **导出步骤完善**: 自动生成 SRT 字幕 → FFmpeg 编码 → 导出记录
- **SRT 生成**: 基于时间轴字幕轨自动生成标准 SRT 文件
- 预览 URL 品牌名修正

#### 文档
- README.md 全面重写（ASCII Art + 9步工作流 + 架构图）
- 根目录文档清理，全部移至 docs/


## [1.1.0] - 2026-02-17

### Renamed
- **Project Name**: ReelForge → ClipFlow (电影工坊)
  - New ASCII art logo
  - Updated all documentation references

### Added
- **9-Step Workflow**: Complete video creation workflow (upload → analyze → template → generate → dedup → uniqueness → edit → timeline → export)
- **8 Dedup Variants**: Conservative, Balanced, Aggressive, Creative, Academic, Casual, Poetic, Technical
- **Auto Dedup**: Automatic variant selection based on similarity, no user intervention needed
- **Uniqueness Service**: Content fingerprinting + history comparison + auto-rewrite
- **Originality Detection**: Exact match, semantic similarity, template detection, structural duplication
- **Vision Service**: Advanced scene detection, object detection (10 classes), 5-dimension emotion analysis
- **Script Templates**: 7 professional templates (product review, tutorial, knowledge, story, news, entertainment, vlog)
- **Workflow Service**: Orchestrates complete workflow with automatic scene-script matching

### Updated
- **LLM Models (2026 Latest)**:
  - Baidu ERNIE 5.0 (2026-01)
  - Alibaba Qwen 3.5 (2026-01)
  - Moonshot Kimi k2.5 (2025-07)
  - Zhipu GLM-5 (2026-01)
  - MiniMax M2.5 (2025-12)
- **Constants**: Centralized LLM_MODELS with accurate pricing and capabilities
- **AI Service**: Model recommendation and info query methods
- **ModelSelector**: Updated to use new model configuration

### Technical
- Added `useWorkflow` hook for workflow state management
- Added `dedup.templates.ts` with 4 detection strategies
- Added `dedup.variants.ts` with 8 rewrite strategies
- Added `uniqueness.service.ts` for content fingerprinting
- Added `vision.service.ts` for video analysis
- Added `workflow.service.ts` for workflow orchestration

## [1.0.0] - 2026-02-17

### Added
- Initial release of ReelForge
- AI-powered video content creation platform
- Support for 8 major AI providers (OpenAI, Anthropic, Google, Baidu, Alibaba, Zhipu, iFlytek, Tencent)
- Professional video upload and analysis
- AI script generation with multiple styles and tones
- Video export with subtitle support
- Multi-language support (Chinese, English)
- Dark mode support
- Local storage management
- FFmpeg integration for video processing

### Features
- **Model Selector**: Smart AI model selection with cost estimation
- **Video Uploader**: Drag-and-drop upload with preview
- **Script Generator**: AI-powered script generation with customization
- **Project Management**: Complete project lifecycle management
- **Storage Service**: Persistent local storage for projects and settings

### Technical
- React 18 + TypeScript + Vite
- Ant Design 5 + Framer Motion
- Tauri for desktop application
- Zustand for state management
- Modular architecture with service layer

## [0.1.0] - 2026-02-16

### Added
- Project initialization
- Basic project structure
- TypeScript configuration
- Development environment setup

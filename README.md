# YYC³ My-Mgmt - AI Marketing Automation Terminal

<div align="center">

> **YanYuCloudCube (YYC³)**
> **言启象限 | 语枢未来**
> **Words Initiate Quadrants, Language Serves as Core for Future**

</div>

---

## 📋 项目概述

**YYC³ My-Mgmt** 是一个基于 React + TypeScript + Vite 的现代化 AI 营销自动化终端系统，专为服务行业设计的企业级管理平台。

### 核心特性

- 🤖 **AI 智能集成**: 支持 OpenAI/Claude/DeepSeek/Ollama 多模型切换 + MCP 工具协议
- 🎨 **双主题系统**: Cyberpunk 霓虹风格 + Liquid Glass 液态玻璃
- 📊 **全维度数据驾驶舱**: 实时 KPI 监控与可视化
- 💬 **智能客户关怀**: 全生命周期客户关系管理
- 🔧 **开发者工作区**: Monaco 代码编辑器 + Git 集成 + 文件浏览器
- 📱 **响应式设计**: 支持桌面端和移动端
- ⚡ **高性能架构**: React.lazy 页面分割 + Zustand 状态管理 + 409KB 主 chunk

---

## 🛠️ 技术栈

| 类别          | 技术                   | 版本      |
| ------------- | ---------------------- | --------- |
| **框架**      | React                  | 18.3.1    |
| **语言**      | TypeScript             | 5.9+      |
| **构建工具**  | Vite                   | 6.3.5     |
| **样式**      | Tailwind CSS v4        | 4.1.12    |
| **UI组件**    | Radix UI + shadcn/ui   | 30+ primitives |
| **状态管理**  | Zustand (persist)      | 5.0.12    |
| **拖拽**      | react-dnd + HTML5      | 16.0.1    |
| **动画**      | Framer Motion (motion) | 12.23.24  |
| **图表**      | Recharts               | 2.15.2    |
| **测试**      | Vitest + Playwright    | 3.2.4     |

---

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 运行测试
pnpm test

# TypeScript 类型检查
npx tsc --noEmit
```

---

## 📁 项目结构

```
My-mgmt/
├── src/app/
│   ├── components/               # 组件库（核心）
│   │   ├── cyberpunk-standalone.tsx   # 主入口 + 39 页面路由 (React.lazy)
│   │   │
│   │   ├── pages/                     # 📂 领域分组页面 (39 pages)
│   │   │   ├── dashboard/    (3)      # 数据驾驶舱
│   │   │   ├── ai/           (4)      # AI 对话 + NLP + 创作
│   │   │   ├── marketing/    (7)      # 营销全链路
│   │   │   ├── customer/     (3)      # 客户关系管理
│   │   │   ├── tasks/        (2)      # 任务看板 + Store
│   │   │   ├── operations/   (1)      # AIOps 运维
│   │   │   ├── hr-finance/   (2)      # 薪酬 + 财务
│   │   │   ├── supply-chain/ (2)      # 采购 + 库存
│   │   │   ├── integration/  (4)      # 平台集成
│   │   │   ├── profile/      (2)      # 个人中心
│   │   │   ├── developer/    (2)      # 开发者工作区
│   │   │   └── settings/     (5)      # 系统设置
│   │   │
│   │   ├── core/              (15)    # 📂 共享核心组件
│   │   │   ├── neon-card.tsx           # 霓虹卡片 (全局复用)
│   │   │   ├── cyber-tooltip.tsx       # 赛博提示
│   │   │   ├── activity-log.tsx        # 活动日志
│   │   │   └── ... (12 more)
│   │   │
│   │   ├── context/           (6)     # 📂 全局上下文
│   │   │   ├── app-context.tsx         # 全局状态 (通知/主题/布局)
│   │   │   ├── ai-model-context.tsx    # AI 模型上下文
│   │   │   ├── auth-context.tsx        # 路由权限守卫
│   │   │   └── ... (3 more)
│   │   │
│   │   ├── integrations/     (5)      # 📂 YYC³ 生态集成
│   │   ├── services/                   # 服务层 (AI Proxy/Git/Edge)
│   │   ├── hooks/                       # 自定义 Hooks
│   │   ├── panels/                      # 面板组件 (6 个)
│   │   ├── settings/                    # 设置子面板 (9 个)
│   │   └── ui/                          # shadcn/ui 基础组件 (50+)
│   │
│   ├── config/                   # 配置文件
│   └── locales/                  # 国际化翻译文件 (zh-CN / en-US)
│
├── tests/                        # 测试文件
│   ├── components/               # 组件测试
│   ├── contexts/                 # 上下文测试
│   ├── hooks/                    # Hook 测试
│   ├── pages/                    # 页面测试
│   ├── stores/                   # Store 测试
│   ├── services/                 # 服务测试
│   └── e2e/                      # E2E 测试 (Playwright)
│
├── .github/workflows/            # CI/CD (5 jobs: lint+test+build+e2e+deploy)
├── docs/                         # 项目文档
│   └── my-mgmt-trae-ai-20260508/ # YYC³ AI 审核与执行文档
└── package.json
```

---

## 🏗️ 架构设计

### 页面路由架构

项目使用 **React.lazy + Suspense** 实现 39 个页面的按需加载：

- 主入口: `cyberpunk-standalone.tsx`
- 懒加载包装: `<Suspense fallback={<PageLoader />}>`
- 代码分割: Vite 自动生成独立 chunk（38 个页面 chunk）
- 主 chunk: **409 KB** (gzip 110 KB)

### 状态管理

| Store | 文件 | 用途 |
|-------|------|------|
| AppContext | `context/app-context.tsx` | 通知、布局、主题 |
| AIModelContext | `context/ai-model-context.tsx` | AI 模型选择、配置 |
| AuthContext | `context/auth-context.tsx` | RBAC 权限守卫 |
| I18nContext | `context/i18n-context.tsx` | 国际化 |
| useTaskStore | `pages/tasks/task-store.ts` | 任务看板 (Zustand + localStorage persist) |
| useSettingsStore | `stores/useSettingsStore.ts` | 全局设置 (Zustand) |

### 模块化拆分

| 模块 | 来源 | 行数 | 说明 |
|------|------|------|------|
| `task-store.ts` | task-board-page | 310 | 类型 + mock 数据 + Zustand store |
| `model-settings-types.ts` | model-settings | 50 | 5 个共享接口 |
| `provider-card.tsx` | model-settings | 463 | CopyButton + ProviderCard |
| `diagnostics-panel.tsx` | model-settings | 251 | SmartDiagnosticsPanel |

---

## 🎯 核心功能模块

### 1️⃣ 数据驾驶舱 (Dashboard)
- 实时 KPI 数据展示 + 客户/呼叫/AI 任务统计

### 2️⃣ AI 对话中心 (Chat)
- 多 Provider 切换 + 流式响应 + 对话历史

### 3️⃣ 客户生命周期管理 (CLM)
- 五阶段管理 + AI 评分 + CSV 导入导出

### 4️⃣ 任务看板 (Task Board)
- Kanban/List/Stats 三视图 + DnD 拖拽 + AI 推理引擎
- Zustand persist 持久化

### 5️⃣ AI 模型配置 (Model Settings)
- 多 Provider 管理 + 连接诊断 + MCP 工具配置
- API Key 管理 + 端点编辑 + 模型增删

### 6️⃣ 智能表单系统 (Smart Forms)
- 可视化表单构建器 + 条件逻辑 + 模板库

### 7️⃣ 开发者工作区 (Developer Workspace)
- Monaco 代码编辑器 + Git 集成 + 文件树浏览器

---

## 🧪 测试

```bash
pnpm test              # 运行全部测试 (427 tests, 20 files)
pnpm test:watch        # 监听模式
pnpm test:coverage     # 覆盖率报告
pnpm test:e2e          # E2E 测试 (Playwright)
```

**当前状态**: 20 test files, 427 tests, 0 failures

---

## 📊 性能指标

| 指标               | 当前值        | 说明                  |
| ------------------ | ------------- | --------------------- |
| 主 Chunk           | 407 KB (gzip 108 KB) | React.lazy 分割 |
| Vendor 拆分        | 11 chunks     | react/react-dom/charts/motion/icons/radix/dnd/router/state/date |
| 构建 39 页面 chunk | 3-24 KB/页    | 按需加载              |
| 构建时间           | ~2.0s         | 2881 modules          |
| TypeScript 编译    | 0 errors      | 严格模式              |
| ESLint             | 0 errors      | 92 warnings (非阻塞)  |
| 测试               | 427 passed    | 20 files / 7.4s       |
| E2E 测试           | 9 cases       | Playwright chromium   |
| CI/CD              | 5 jobs        | lint→test→build→e2e→deploy |

---

## 🔐 安全

- ✅ API Key 本地存储 + UI masking
- ✅ AI 代理三模式: direct/proxy/hybrid (VITE_AI_PROXY_MODE)
- ✅ AI 代理限流 (Token Bucket)
- ✅ 请求签名验证
- ✅ CSP 安全策略 (Content-Security-Policy + 6项安全头)
- ✅ 路由级权限守卫 (RBAC: admin/editor/viewer)
- ✅ XSS 防护 (React 内置)
- ✅ Frame 嵌入防护 (X-Frame-Options: DENY)
- ✅ 通知数组上限 (50 条)
- ⚠️ 生产环境需部署后端代理

---

## 🌍 国际化

```typescript
const { t } = useI18n()
t('dashboard.title')  // 自动根据 locale 翻译
```

支持: 🇨🇳 简体中文 (zh-CN) | 🇺🇸 英语 (en-US)

---

## 📄 许可证

Private - YYC³ Team

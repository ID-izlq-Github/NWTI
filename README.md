<p align="center">
  <img src="public/favicon.svg" width="80" alt="NWTI Logo" />
</p>

<h1 align="center">NWTI — NW Typology Indicator</h1>

<p align="center">
  <em>🎭 看看你最符合NW里哪一个人的气质。</em>
  <br/>
  <em>Welcome to fucking SLFBN!</em>
</p>

<p align="center">
  <a href="#-项目简介--about"><img src="https://img.shields.io/badge/lang-%F0%9F%87%A8%F0%9F%87%B3%20%E4%B8%AD%E6%96%87-blue" /></a>
  <a href="#en"><img src="https://img.shields.io/badge/lang-English-green" /></a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/results-100%25%20scientific%E2%84%A2-red" />
</p>

---

## 🇨🇳 中文

### 📖 项目简介

**NWTI**（NW Typology Indicator）是一个基于 4 维人格模型的趣味测试工具。你只需回答 40 道题目（1 道专业选择 + 3 道自评 + 9 道专业题 + 27 道核心题），系统就会从 **16 种人格原型** 中找到你的"真身"——然后给你贴上一个响亮的标签。

> ⚠️ **免责声明**：本测试仅供娱乐。如果你的结果显示你是 "Yin-Biao Sun"，请不要砸电脑。

### 🧠 测试维度

| 维度 | 图标 | 解释 |
|------|------|------|
| **专业能力** Professional | 📚 | 学术以及专业水平 |
| **责任意识** Responsibility | 🤝 | 拒绝官僚主义，强调协作 |
| **拟人程度** Morality | 🧑 | 像不像一个"人"？会不会干让人寒心的骚操作 |
| **招笑程度** Funny | 🤡 | 是不是那种"心里没数还要装一把"的显眼包 |

每维度分为 **L（低）/ M（中）/ H（高）** 三档，组合成 3⁴ = 81 种可能，最终匹配到 16 种人格之一。

### 🎯 特色

- 🤹 **动态专业题库**：先选专业方向（数理 / 生化 / 商科计算机 / 文史政），后续题目从对应专业抽取
- 🔮 **自评惩罚机制**：高估自己？扣分伺候！诚实自评才是美德
- 🎪 **4 阶段渐进式流程**：专业方向 → 自我评价 → 专业能力 → 综合评估，层层递进
- 📊 **详细评价解读**：结果页不仅展示维度画像，还有针对每种人格的详细文字评价
- 📱 **响应式设计**：手机和电脑都能愉快地认清自己

### 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 🏗️ 项目结构

```
src/
├── components/screens/   # 三个主页面：Intro / Test / Result
├── context/              # React Context 状态管理 + Reducer
├── data/                 # 题库、维度元数据、结果映射
├── engine/               # 评分算法 & 惩罚逻辑
├── types/                # 全局 TypeScript 类型
├── App.tsx & App.css     # 根组件 + 全局样式
└── main.tsx              # 入口
```

### 🧪 技术栈

- **React 19** + **TypeScript 5.8** — 类型安全的前端基石
- **Vite 8** — 秒级 HMR，开发体验起飞
- **CSS Variables** — 几行变量控制全局主题换肤
- **零运行时依赖** — 除了 React 本体，不需要额外 npm 包

---

## 🇬🇧 English

### 📖 About

**NWTI** is a fun 4-dimensional personality test. Answer 40 quick questions (1 field selection + 3 self-evaluations + 9 professional + 27 core questions), and the system will match you to one of **16 personality archetypes** — each paired with an inside-joke name from the NW universe.

> ⚠️ **Disclaimer**: This test is for entertainment purposes. If your result says "Yin-Biao Sun", please do not throw your laptop out the window.

### 🧠 The Four Dimensions

| Dimension | Icon | Meaning |
|-----------|------|---------|
| **Professional** | 📚 | Academic & professional competence |
| **Responsibility** | 🤝 | Willingness to collaborate & support others |
| **Morality** | ⚖️ | Ethical standards |
| **Funny** | 🤡 | How laughable this person is |

Each dimension is graded **L (Low) / M (Medium) / H (High)**, generating 3⁴ = 81 possible combinations that map to 16 personality archetypes.

### 🎯 Highlights

- 🤹 **Dynamic discipline-based question bank** — pick your field first, then get tailored questions
- 🔮 **Self-evaluation penalty** — overrate yourself? The algorithm *will* punish you
- 🎪 **4-phase progressive flow** — Field → Self-Eval → Professional → Comprehensive, step by step
- 📊 **Detailed evaluation** — result screen shows dimension charts plus personality-specific commentary
- 📱 **Fully responsive** — works on phones, tablets, and your 4K monitor

### 🚀 Quick Start

```bash
npm install
npm run dev      # development server with HMR
npm run build    # production build → dist/
```

### 🏗️ Project Structure

```
src/
├── components/screens/   # Intro / Test / Result screens
├── context/              # React Context + Reducer state machine
├── data/                 # Questions, dimension metadata, result mapping
├── engine/               # Scoring & penalty algorithms
├── types/                # Global TypeScript types
├── App.tsx & App.css     # Root component + styles
└── main.tsx              # Entry point
```

### 🧪 Tech Stack

- **React 19** + **TypeScript 5.8**
- **Vite 8** — instant HMR
- **CSS Variables** — one-line theming
- **Zero runtime dependencies** — just React


---

<p align="center">
  <sub>Made by the ▆▆▆.</sub>
  <br/>
  <sub>© 2026-present. All 16 personalities are purely fictional — or are they? 🤔</sub>
</p>
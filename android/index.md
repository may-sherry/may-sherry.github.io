# 💻 Android 开发与架构实战

> 记录现代 Android 开发进阶之路：拥抱 Kotlin 与 Jetpack Compose，追求流畅的 UI 交互与健壮的架构设计。

---

## 🌟 核心理念与技术栈
* **现代响应式 UI**：全面迁移并深入实践 **Jetpack Compose**，探索单向数据流（UDF）与状态提升。
* **本地优先与数据持久化**：使用 **Room Database**，实现离线可用的本地存储、复杂关系查询与自定义排序流。
* **分层与解耦**：遵循 Google 官方的 **MVVM + Repository 架构规范**，结合 Hilt / 依赖注入与 Kotlin Coroutines / Flow 异步处理。
* **极致交互体验**：手势操作、九宫格图片响应式自适应、自研热力图与数据可视化组件。

---

## 📌 精选实战与技术文章

### 1. Jetpack Compose 深度实践
* [Jetpack Compose 状态恢复与页面跳转记忆](./compose-state)  
  *解析为什么跳转二级页面后返回，原本选中的 Tab 和状态会丢失？深入理解 `rememberSaveable` 与 `BackHandler` 返回栈拦截机制。*
* [自适应图片九宫格封装](./image-grid-overlay)  
  *如何彻底抛弃写死 dp 的固定尺寸，利用 `weight(1f)` 与 `aspectRatio(1f)` 打造手机全端自适应的仿微信朋友圈 3 图排版与“+N”蒙层。*

### 2. 数据库与业务流
* [Room 数据库缓存与实时更新冲突解决](./room-cache-conflict)  
  *复盘在“支持拖拽自定义排序”场景下，Room 数据库更新属性后内存缓存未及时刷新的 Bug 与优雅解法。*

---

## 📱 代表作品联动
本板块的技术成果大部分直接落地应用于我的独立作品：
👉 **[进入《成长小记 (GrowthNote)》官方网站](https://may-sherry.github.io/GrowthNote/)** 体验最新发布版本！

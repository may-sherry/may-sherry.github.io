# 💻 Android 开发与实战踩坑录

> 记录现代 Android 开发进阶之路：聚焦 Kotlin、Jetpack Compose、底层性能调优与真机调试技巧。面向真实工程落地，沉淀易懂耐读的技术经验。

---

## 🛠️ 独立开发与高效调试专题

### 1. [如何利用 LocalSend 进行极致丝滑的 Android 真机调试](./localsend-debug)
*针对真机没有数据线、微信传安装包被加 `.1` 后缀的痛点，详细介绍局域网免配环境的高速热传与真机部署技巧。*

### 2. [电脑键盘输入法实时同步到 Android 模拟器实战指南](./emulator-keyboard-sync)
*解决 Android Studio 模拟器中文输入受阻、中英切换繁琐的痛点，实现 PC 物理键盘输入法与手机模拟器的极速实时桥接映射。*

---

## 🎨 架构与 Compose 深度实战

### 3. [Jetpack Compose 状态恢复与生命周期避坑](./compose-state)
*深入解析单向数据流（UDF）、`rememberSaveable` 的存储机制，以及多级页面返回时的状态丢失与重组陷阱。*

### 4. [Room 数据库多条件响应式排序与缓存一致性](./room-custom-sort)
*复盘在离线模式与可拖拽排序场景下，Room 与 Flow 联合使用时数据不刷新、脏读的经典 Bug 剖析与解法。*

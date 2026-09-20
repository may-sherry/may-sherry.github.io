---
layout: home

hero:
  name: "maysherry"
  text: "Code, Create & Grow."
  tagline: Android 开发者 | 独立产品践行者 | 热衷现代架构与极致体验
  image:
    src: /avatar.png
    alt: Sherry
  actions:
    - theme: brand
      text: 💻 浏览 Android 踩坑录
      link: /android/
    - theme: alt
      text: 🏆 查看作品《成长小记》官网 ↗
      link: https://may-sherry.github.io/GrowthNote/
      target: _blank

features:
  - title: 💻 Android 踩坑实录
    details: 拒绝空洞八股文，聚焦一线实战经验。深入总结 Compose 响应式 UI、LocalSend 极速真机调试、模拟器跨端输入桥接等硬核干货。
  - title: 🏆 独立作品《成长小记》
    details: 独立全栈作品。基于 Jetpack Compose + Room + WebDAV 构建的无广告、纯本地离线防焦虑成长管理工具，从架构到官网全公开。
  - title: 🚀 现代工程与极客精神
    details: 追求干净可维护的代码架构与极致流畅的交互动效，善用聪明的方式克服环境限制，享受从 0 到 1 创造工具的过程。
---

<style>
/* 调小主站 Hero 头像尺寸，精致协调 */
.VPHomeHero .image-src {
  max-width: 180px !important;
  max-height: 180px !important;
  border-radius: 50% !important;
}
.VPHomeHero .image-container {
  width: 200px !important;
  height: 200px !important;
}
.VPHomeHero .image-bg {
  width: 180px !important;
  height: 180px !important;
}

/* 作品集高光展示位 (Portfolio Showcase) */
.portfolio-section {
  max-width: 960px;
  margin: 48px auto;
  padding: 0 24px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 10px;
}
.section-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.project-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}
.project-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}
.project-desc {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 0.95rem;
  max-width: 620px;
}
.project-tags {
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}
.project-btn {
  display: inline-block;
  background: var(--vp-c-brand-1);
  color: white !important;
  padding: 10px 22px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}
</style>

<div class="portfolio-section">
  <div class="section-header">
    <div class="section-title">🏆 核心作品高光展示 (Portfolio)</div>
  </div>

  <div class="project-card">
    <div>
      <div class="project-title">📱 成长小记 (GrowthNote)</div>
      <div class="project-desc">
        一款拒绝精神内耗、纯本地离线优先的系统化多维成长管理工具。支持树状层级管理、灵活计时打卡、300字碎片化微复盘，以及坚果云 WebDAV 智能增量备份。
      </div>
      <div class="project-tags">
        <span class="tag">Android 原生</span>
        <span class="tag">Jetpack Compose</span>
        <span class="tag">Room DB</span>
        <span class="tag">WebDAV 同步</span>
        <span class="tag">零成本架构</span>
      </div>
    </div>
    <div>
      <a href="https://may-sherry.github.io/GrowthNote/" target="_blank" class="project-btn">
        🚀 前往官方网站体验 ↗
      </a>
    </div>
  </div>
</div>
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sherry's Blog",
  description: "Android 开发者 | 独立作品与技术踩坑实战",
  
  // 主站部署在根目录 may-sherry.github.io，base 必须是 '/'
  base: '/',

  // 允许死链通过构建，方便后续写新文章
  ignoreDeadLinks: true,

  themeConfig: {
    // 顶部极简导航栏：仅保留首页、Android 踩坑录和个人作品集
    nav: [
      { text: '首页', link: '/' },
      { text: '💻 Android 踩坑录', link: '/android/' },
      { text: '🏆 《成长小记》官网 📱', link: 'https://may-sherry.github.io/GrowthNote/' }
    ],

    // 禁用默认侧边栏，让正文全屏居中沉浸阅读，不抢视觉焦点
    sidebar: false,

    // 社交外链
    socialLinks: [
      { icon: 'github', link: 'https://github.com/may-sherry/may-sherry.github.io' }
    ],

    footer: {
      message: 'Code, Create & Grow. 记录成长，见证每一次微小进步。',
      copyright: 'Copyright © 2026-present Shumei Xu'
    }
  }
})
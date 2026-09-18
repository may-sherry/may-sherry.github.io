import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sherry's Blog",
  description: "Android 开发者 | 陪伴每一次微小进步",
  
  // 重点：主站霸占根域名，base 必须是 '/'（切记不要填 GrowthNote！）
  base: '/',

  // 允许预设的未写完文章链接（死链）通过构建，方便后续逐步写文章填充
  ignoreDeadLinks: true,

  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Android 笔记', link: '/android/' },
      { text: 'CS 基础', link: '/cs/' },
      { text: '日常随笔', link: '/daily/' },
      { 
        text: '我的作品 📱', 
        items: [
          { text: '成长小记 (GrowthNote)', link: 'https://may-sherry.github.io/GrowthNote/' }
        ]
      }
    ],

    // 侧边栏分板块显示
    sidebar: {
      '/android/': [
        {
          text: 'Android 与 Compose',
          items: [
            { text: 'Jetpack Compose 状态管理心得', link: '/android/compose-state' },
            { text: 'Room 数据库踩坑与自定义排序', link: '/android/room-custom-sort' }
          ]
        }
      ],
      '/cs/': [
        {
          text: '计算机基础',
          items: [
            { text: '计算机网络核心考点', link: '/cs/network' },
            { text: '数据结构与算法复盘', link: '/cs/dsa' }
          ]
        }
      ],
      '/daily/': [
        {
          text: '独立开发与生活',
          items: [
            { text: '做《成长小记》这一路走来', link: '/daily/growthnote-story' },
            { text: '大学期的碎碎念', link: '/daily/campus-life' }
          ]
        }
      ]
    },

    // 社交外链
    socialLinks: [
      { icon: 'github', link: 'https://github.com/may-sherry' }
    ],

    footer: {
      message: '记录成长，见证每一次微小进步。',
      copyright: 'Copyright © 2026-present Shumei Xu'
    }
  }
})
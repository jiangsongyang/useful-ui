module.exports = {
  title: 'UsefulUI',
  description: '一个不太正经的组件库',
  lang: 'zh-cn',
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/jiangsongyang/useful-ui'
      }
    ],
    // 侧边栏
    sidebar: {
      '/': getDemoSidebar()
    }
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}

function getDemoSidebar() {
  return [
    {
      text: '介绍'
    },
    {
      text: '开发指南',
      children: [
        {
          text: '安装',
          link: '/setup/'
        }
      ]
    },
    {
      text: '通用组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button/'
        },
        {
          text: 'Icon 图标',
          link: '/components/icon/'
        }
      ]
    },
    {
      text: '布局组件',
      children: [
        {
          text: 'Divider 分割线',
          link: '/components/divider/'
        }
      ]
    },
    {
      text: '导航',
      children: []
    },
    {
      text: '数据录入',
      children: [
        {
          text: 'Input 输入框',
          link: '/components/input/'
        }
      ]
    }
  ]
}

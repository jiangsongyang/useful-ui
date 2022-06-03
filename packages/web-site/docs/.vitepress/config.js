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
      text: '更新日志',
      children: [
        {
          text: '新特性',
          link: '/log/'
        }
      ]
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
      text: '快速开始',
      link: '/quick-start/'
    },
    {
      text: '基础组件',
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
    }
  ]
}

import { DefaultTheme, defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

const locales: Partial<DefaultTheme.Config> = {
  outline: {
    label: '页面导航',
  },

  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium',
    },
  },
  docFooter: {
    prev: '上一篇',
    next: '下一篇',
  },
  darkModeSwitchLabel: '外观',
  returnToTopLabel: '返回顶部',
  sidebarMenuLabel: '菜单',
  langMenuLabel: '多语言',
  lightModeSwitchTitle: '切换到浅色模式',
  darkModeSwitchTitle: '切换到深色模式',
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Serein 社区',
  description: 'Serein 社区',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '插件', link: '/plugins/' },
      { text: '整合包', link: '/packages/' },
      { text: '发布', link: '/publish' },
    ],

    sidebar: generateSidebar([
      {
        rootGroupText: '插件',
        resolvePath: '/',
        basePath: '/',
        scanStartPath: '/plugins',
        useFolderLinkFromIndexFile: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
      },
    ]),

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2022 Zaitonn. All Rights Reserved.',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },

          modal: {
            backButtonTitle: '返回',
            displayDetails: '显示详情',
            noResultsText: '没有找到结果',
            resetButtonTitle: '重置',
            footer: {
              closeKeyAriaLabel: '关闭',
              closeText: '关闭',
              navigateDownKeyAriaLabel: '下一个',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '上一个',
              selectKeyAriaLabel: '选择',
              selectText: '选择',
            },
          },
        },
      },
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/SereinCommunity/sereincommunity.github.io',
      },
    ],

    ...locales,
  },
});

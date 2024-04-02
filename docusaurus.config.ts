import type * as Preset from '@docusaurus/preset-classic';
import type { Options, ThemeConfig } from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Serein社区',
  tagline: '一个简约、多功能、高度自定义的服务器管理面板软件',
  favicon: 'logo.png',

  url: 'https://sereincommunity.github.io',
  baseUrl: '/',

  organizationName: 'SereinCommunity',
  projectName: 'Serein社区',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'detect',
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: 'sidebars.ts',
          editUrl:
            'https://github.com/SereinCommunity/sereincommunity.github.io/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },

        blog: {
          path: 'resources/plugins',
          routeBasePath: 'plugins',
          showReadingTime: false,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '所有插件',
          blogTitle: '插件列表',
          blogDescription: 'Serein的插件',
          postsPerPage: 1,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      content: '🚧此文档尚未完工🚧',
      textColor: 'var(--ifm-color-primary-contrast-foreground)',
      backgroundColor: 'var(--ifm-background-surface-color)',
      id: '20240331',
    },

    image: 'logo.png',

    navbar: {
      hideOnScroll: true,
      title: 'Serein',
      logo: {
        alt: 'Logo',
        src: 'logo.png',
      },
      items: [
        {
          label: '插件',
          to: '/plugins',
        },
        {
          label: '整合包',
          to: '/packages',
        },
        {
          position: 'right',
          label: '发布',
          to: '/docs',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Serein',
          items: [
            {
              label: '主站',
              to: 'https://sereindev.github.io',
            },
            {
              label: '仓库',
              to: 'https://github.com/SereinDev/Serein',
            },
          ],
        },
        {
          title: '发布',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/SereinDev/Serein/releases/latest',
            },
            {
              label: 'MineBBS',
              href: 'https://www.minebbs.com/resources/serein.4169/',
            },
            {
              label: 'MCBBS',
              href: 'https://www.mcbbs.net/thread-1424853-1-1.html',
            },
          ],
        },
      ],
      copyright: 'Copyright © 2022 Zaitonn. All Rights Reserved.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'batch',
        'csharp',
        'json',
        'powershell',
        'regex',
        'typescript',
      ],
    } satisfies Preset.ThemeConfig,

    metadata: [],
  } satisfies ThemeConfig,

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
      },
    ],
  ],
};

export default config;

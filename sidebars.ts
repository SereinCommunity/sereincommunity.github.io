import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '提交你的作品',
      link: {
        type: 'doc',
        id: 'index',
      },
      items: ['plugins', 'packages', 'matches'],
    },
  ],
};

export default sidebars;

// https://vitepress.dev/guide/custom-theme
import { useData, useRoute, type Theme } from 'vitepress';
import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import 'vitepress-plugin-back-to-top/dist/style.css';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import DefaultTheme from 'vitepress/theme';
import { toRefs } from 'vue';
import CustomLayout from '../components/CustomLayout.vue';
import PluginListPage from '../components/PluginListPage.vue';
import './backToTop.css';
import './style.css';

export default {
  extends: DefaultTheme,

  Layout: CustomLayout,

  enhanceApp({ app }) {
    app.component('PluginListPage', PluginListPage);
    vitepressBackToTop({ threshold: 300 });
  },

  setup() {
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    giscusTalk(
      {
        repo: 'SereinCommunity/sereincommunity.github.io',
        repoId: 'R_kgDOLos8YA',
        category: 'Giscus',
        categoryId: 'DIC_kwDOLos8YM4CeZhh',
        mapping: 'pathname',
        inputPosition: 'top',
        lang: 'zh-CN',
        homePageShowComment: false,
        lightTheme: 'light',
        darkTheme: 'transparent_dark',
      },
      {
        frontmatter,
        route,
      },
      true
    );
  },
} satisfies Theme;

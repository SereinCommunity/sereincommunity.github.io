<script setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { computed } from 'vue';

const { Layout } = DefaultTheme;
const isPluginPage = computed(
  () =>
    useData().page.value.relativePath.startsWith('plugins/') &&
    useData().page.value.relativePath !== 'plugins/index.md'
);
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <div v-if="isPluginPage"></div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import DownloadBar from './DownloadBar.vue';
import PluginInfoBar from './PluginInfoBar.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-before>
      <div v-if="useData().frontmatter.value.id" class="vp-doc">
        <h1>
          {{ useData().frontmatter.value.title }}
          <Badge v-text="useData().frontmatter.value.id" type="info" />
        </h1>
        <PluginInfoBar />
      </div>
    </template>

    <template #doc-footer-before>
      <div v-if="useData().frontmatter.value.id" class="vp-doc">
        <h2>下载</h2>
        <DownloadBar />
      </div>
    </template>
  </Layout>
</template>

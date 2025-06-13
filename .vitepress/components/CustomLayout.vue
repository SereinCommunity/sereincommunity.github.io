<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { computed } from 'vue';
// @ts-expect-error
import { data } from '../../gallery.data.ts';
import { PluginDetailedInfo } from '../libs/type.ts';
import DownloadBar from './DownloadBar.vue';
import PluginInfoBar from './PluginInfoBar.vue';

const { Layout } = DefaultTheme;

const frontmatter = useData().frontmatter;
const plugin = computed<PluginDetailedInfo | undefined>(() => data.all[useData().frontmatter.value.id]);

</script>

<template>
  <Layout>
    <template #doc-before>
      <div v-if="frontmatter.id" class="vp-doc">
        <h1>
          {{ frontmatter.title }}
          <Badge v-text="frontmatter.id" type="info" />
        </h1>
        <PluginInfoBar :plugin="plugin" />
      </div>
    </template>

    <template #doc-footer-before>
      <div v-if="frontmatter.id" class="vp-doc">
        <h2>下载</h2>
        <DownloadBar :plugin="plugin" />
      </div>
    </template>
  </Layout>
</template>

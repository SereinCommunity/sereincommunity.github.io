<script setup lang="ts">
import { useData } from 'vitepress';
import { ref, watch } from 'vue';
import { PluginDetailedInfo } from '../libs/type';

const pluginInfo = ref(useData().frontmatter.value as PluginDetailedInfo);
watch(
  useData().frontmatter,
  (value) => (pluginInfo.value = value as PluginDetailedInfo)
);
</script>

<template>
  <div
    v-if="Object.keys(pluginInfo.repo.releases).length > 0"
    v-for="tag of Object.keys(pluginInfo.repo.releases)"
  >
    <h3>
      <a :href="pluginInfo.repo.releases[tag].url" target="_blank">{{ tag }}</a>

      <span class="published-at"
        >({{
          new Date(
            pluginInfo.repo.releases[tag].publishedAt
          ).toLocaleDateString()
        }})</span
      >
    </h3>

    <table v-if="pluginInfo.repo.releases[tag].assets">
      <tr>
        <th>文件</th>
        <th>大小</th>
        <th>下载量</th>
      </tr>
      <tr v-for="asset of pluginInfo.repo.releases[tag].assets">
        <td>
          <a :href="asset.url" target="_blank">
            <code>
              {{ asset.name }}
            </code>
          </a>
        </td>
        <td>{{ (asset.size / 1024).toFixed(2) }} KB</td>
        <td>{{ asset.downloads }}</td>
      </tr>
    </table>
  </div>

  <div v-else>
    <div class="warning custom-block">
      <p class="custom-block-title">WARNING</p>
      <p>
        暂无发布版本，你可以到<a :href="pluginInfo.repo.url" target="_blank"
          >插件的仓库</a
        >查看相关说明。
      </p>
    </div>
  </div>
</template>

<style scoped>
span.published-at {
  font-size: 12px;
  opacity: 0.7;
  margin-left: 5px;
}

table td,
table th {
  text-align: center;
}
</style>

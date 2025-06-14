<script setup lang="ts">
import { PluginDetailedInfo } from '../libs/type';

defineProps({
  plugin: {
    type: Object as () => PluginDetailedInfo | undefined,
    required: true,
  },
});
</script>

<template>
  <div v-if="plugin">
    <div
      class="info custom-block"
      v-if="plugin.dependencies && plugin.dependencies.length > 0"
    >
      <p class="custom-block-title">信息</p>
      <p>此插件可能还需要以下依赖：</p>

      <ul>
        <li v-for="dependency of plugin.dependencies">
          <code> {{ dependency.id }}</code>

          <ul>
            <li v-for="version of dependency.version">
              <code> {{ version }}</code>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div
      v-if="Object.keys(plugin.repo.releases).length > 0"
      v-for="tag of Object.keys(plugin.repo.releases)"
    >
      <h3>
        <a :href="plugin.repo.releases[tag].url" target="_blank">{{ tag }}</a>

        <span class="published-at"
          >({{
            new Date(
              plugin.repo.releases[tag].publishedAt
            ).toLocaleDateString()
          }})</span
        >
      </h3>

      <table v-if="plugin.repo.releases[tag].assets">
        <tbody>
          <tr>
            <th>文件</th>
            <th>大小</th>
            <th>下载量</th>
          </tr>
          <tr v-for="asset of plugin.repo.releases[tag].assets">
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
        </tbody>
      </table>
    </div>

    <div v-else>
      <div class="warning custom-block">
        <p class="custom-block-title">注意</p>
        <p>
          暂无发布版本，你可以到
          <a :href="plugin.repo.url" target="_blank">插件的仓库</a>
          查看相关说明。
        </p>
      </div>
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

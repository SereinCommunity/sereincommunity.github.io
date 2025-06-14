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
  <table v-if="plugin?.id">
    <tbody>
      <tr>
        <td>描述</td>
        <td class="description">
          {{ plugin.description }}
        </td>
      </tr>

      <tr>
        <td>版本</td>
        <td>
          <code>{{ plugin.version }}</code>
        </td>
      </tr>
      <tr>
        <td>标签</td>
        <td>
          <Badge
            v-for="tag of plugin.tags"
            type="tip"
            :text="
              {
                entertainment: '娱乐',
                development: '开发',
                tool: '工具',
                information: '信息',
                management: '管理',
                api: 'API',
              }[tag]
            "
          />
        </td>
      </tr>

      <tr>
        <td>作者</td>
        <td>
          {{ plugin.authors.map((author) => author.name).join(', ') || '-' }}
        </td>
      </tr>

      <tr>
        <td>仓库</td>
        <td>
          <a :href="plugin.repo.url" target="_blank">{{
            `${plugin.repo.owner}/${plugin.repo.repo}`
          }}</a>

          <div v-if="plugin.repo.license" class="license">
            许可证：{{ plugin.repo.license }}
          </div>

          <div class="updated-at">
            ( 最后更新于
            {{ new Date(plugin.repo.updatedAt).toLocaleString() }}
            )
          </div>
        </td>
      </tr>

      <tr>
        <td>总下载量</td>
        <td>
          {{ plugin.repo.downloads }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
}

table tr td:first-child {
  font-weight: bold;
  text-align: center;
}

div.license,
div.updated-at {
  font-size: 12px;
  opacity: 0.7;
}
</style>

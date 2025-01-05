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
  <table v-if="pluginInfo?.id">
    <tbody>
      <tr>
        <td>描述</td>
        <td class="description">
          {{ pluginInfo.description }}
        </td>
      </tr>

      <tr>
        <td>版本</td>
        <td>
          <code>{{ pluginInfo.version }}</code>
        </td>
      </tr>
      <tr>
        <td>标签</td>
        <td>
          <Badge
            v-for="tag of pluginInfo.tags"
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
          {{
            pluginInfo.authors.map((author) => author.name).join(', ') || '-'
          }}
        </td>
      </tr>

      <tr>
        <td>仓库</td>
        <td>
          <a :href="pluginInfo.repo.url" target="_blank">{{
            `${pluginInfo.repo.owner}/${pluginInfo.repo.repo}`
          }}</a>

          <div v-if="pluginInfo.repo.license" class="license">
            {{ pluginInfo.repo.license }}
          </div>

          <div class="updated-at">
            (最后更新于
            {{ new Date(pluginInfo.repo.updatedAt).toLocaleString() }})
          </div>
        </td>
      </tr>

      <tr>
        <td>下载量</td>
        <td>
          {{ pluginInfo.repo.downloads }}
        </td>
      </tr>

      <tr>
        <td>适用版本</td>
        <td>
          <Badge v-for="v of pluginInfo.targetingSerein">
            {{ v }}
          </Badge>
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

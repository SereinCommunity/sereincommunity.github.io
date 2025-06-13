<script setup lang="ts">
// @ts-expect-error
import { data } from '../../gallery.data.ts';
import { computed, ref } from 'vue';
import { PluginDetailedInfo } from '../libs/type.ts';
import { useRouter } from 'vitepress';

const router = useRouter();
const plugins = Object.entries(
  data.all as { [key: string]: PluginDetailedInfo }
);

const search = ref('');
const filteredPlugins = computed(() => {
  if (!search.value) return plugins;

  const searchLower = search.value.toLowerCase();
  return plugins.filter(
    ([id, plugin]) =>
      id.toLowerCase().includes(searchLower) ||
      plugin.name.toLowerCase().includes(searchLower) ||
      plugin.description.toLowerCase().includes(searchLower)
  );
});
</script>

<template>
  <div class="container">
    <h1>插件列表</h1>

    <div class="search-box-container">
      <input
        type="text"
        id="search-box"
        v-model="search"
        placeholder="通过Id、名称、介绍搜索插件..."
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
      />
    </div>

    <div class="plugin-count">
      当前共{{ plugins.length }}个插件
      <span v-if="search">，搜索结果：{{ filteredPlugins.length }}个</span>
    </div>

    <div class="plugin-list">
      <div
        class="plugin-card"
        v-for="plugin in filteredPlugins"
        :key="plugin[0]"
        @click="router.go(`/plugins/${plugin[0]}`)"
      >
        <div class="plugin-name">
          <b>{{ plugin[1].name }}</b> <Badge v-text="plugin[0]" type="info" />
        </div>
        <div class="plugin-description">{{ plugin[1].description }}</div>
        <div class="plugin-tags">
          <Badge
            v-for="tag of plugin[1].tags"
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
        </div>
        <div class="plugin-downloads">
          下载量：{{ plugin[1].repo.downloads }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: -0.02em;
  line-height: 40px;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

.container {
  padding: 50px;
}

#search-box {
  width: 100%;
  padding: 15px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 8px;
  border-color: transparent;
  background: var(--vp-c-bg-alt);
  cursor: pointer;
  outline: none;
  transition: border-color 0.25s;
}

#search-box:hover {
  border-color: var(--vp-c-brand-1);
}

.search-box-container {
  margin: 20px 0;
}
.plugin-count {
  width: 100%;
  text-align: center;
  font-size: smaller;
  margin: 10px;
}

.plugin-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  margin: 20px 5px;
}

.plugin-card {
  padding: 20px;
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--vp-c-gray-3);
  transition: border-color 0.25s;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  min-height: 180px;
}

.plugin-card:hover {
  border-color: var(--vp-c-brand-1);
}

.plugin-description,
.plugin-downloads {
  font-size: 14px;
  margin-top: 3px;
}

.plugin-tags {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>

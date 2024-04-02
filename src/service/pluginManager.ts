import { IndexData } from '../types/PluginInfo';

const INDEX = 'https://sereincommunity.github.io/PluginsGallery/index.json';

let cache: IndexData = null;

export async function load(refresh: boolean = false) {
  if (cache && !refresh) return cache;

  const result = await fetch(INDEX);
  if (!result.ok) throw new Error('无法加载插件信息');

  cache = (await result.json()) as IndexData;

  return cache;
}

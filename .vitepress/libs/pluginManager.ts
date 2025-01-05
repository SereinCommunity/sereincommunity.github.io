import { useData } from 'vitepress';
import { AllPlugins } from './type';

let cache: AllPlugins | null = null;

async function getAllPlugins(refresh: boolean = false): Promise<AllPlugins> {
  if (!refresh && cache) return cache;

  const result = (await (
    await fetch('https://sereincommunity.github.io/gallery/plugins/@all.json')
  ).json()) as AllPlugins;

  cache = result;

  return result;
}


export default { getAllPlugins };

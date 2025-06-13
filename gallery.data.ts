import { readFileSync } from 'fs';
import path from 'path';
import { PluginDetailedInfo } from './.vitepress/libs/type';

export default {
  load() {
    const data = JSON.parse(
      readFileSync(
        path.join(__dirname, 'public', 'gallery', 'plugins', '@all.json'),
        'utf-8'
      )
    ) as { time: string; data: { [key: string]: PluginDetailedInfo } };

    return data.data;
  },
};

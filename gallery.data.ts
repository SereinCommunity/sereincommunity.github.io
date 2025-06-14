import { readFileSync } from 'fs';
import path from 'path';

export default {
  load() {
    return {
      all: read('@all.json'),
      authors: read('@authors.json'),
      tags: read('@tags.json'),
      meta: read('@meta.json'),
    };
  },
};

function read(fileName: string) {
  return JSON.parse(
    readFileSync(path.join('public', 'indexes', 'plugins', fileName), 'utf-8')
  ).data;
}

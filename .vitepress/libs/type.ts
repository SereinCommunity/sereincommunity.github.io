export type PluginDetailedInfo = {
  repo: {
    owner: string;
    repo: string;
    branch: string;
    url: string;
    stars: number;
    forks: number;
    issues: number;
    pullRequests: number;
    createAt: string;
    pushedAt: string;
    updatedAt: string;
    license: string | null;
    downloads: number;
    releases: {
      [tagName: string]: {
        url: string;
        body: string;
        downloads: number;
        publishedAt: string;
        assets: {
          name: string;
          size: number;
          downloads: number;
          url: string;
        }[];
      };
    };
  };
  id: string;
  name: string;
  version: string;
  description: string;
  tags: (
    | 'entertainment'
    | 'development'
    | 'tool'
    | 'information'
    | 'management'
    | 'api'
  )[];
  targetingSerein: string[];
  dependencies: { id: string; version: string[] }[];
  authors: { name: string; description: string }[];
  type: 'js' | 'net';
  entryFile?: string;
};

export type AllPlugins = DataWrapper<Record<string, PluginDetailedInfo>>;

type DataWrapper<T> = {
  data: T;
  time: string;
};

export declare type PluginInfo = {
  name: string;
  author: string;
  version: string;
  targetingSereinVersion: string;
  targetingServerInfos?: {
    name: string;
    version: string;
    description?: string;
  }[];
  isDependency?: boolean;
  dependencies?: { id: string; version: string }[];
  description?: string | null;
  tags: (
    | 'entertainment'
    | 'development'
    | 'tool'
    | 'information'
    | 'management'
    | 'api'
  )[];
  repo: string;
  url: string;
  updateTime: string;
  releases: {
    name: string | null;
    tag: string;
    time: string | null;
    assets: { url: string; size: number; downloadCount: number }[];
  }[];
};

export declare type IndexData = {
  metadata: {
    time: string;
    id: number;
    number: number;
    ref: string;
    sha: string;
  };
  data: {
    [id: string]: PluginInfo;
  };
};

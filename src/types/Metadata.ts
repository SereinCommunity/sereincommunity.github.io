export type Metadata = {
  permalink: string;
  source: string;
  title: string;
  description: string;
  date: string;
  tags: { label: string; permalink: string }[];
  hasTruncateMarker: boolean;
  authors: Author[];
  unlisted: boolean;
};

type Author = {
  name: string;
  title: string;
  url: string;
  imageURL: string;
  key: string;
};

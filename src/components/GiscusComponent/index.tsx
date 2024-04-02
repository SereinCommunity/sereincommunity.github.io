import { useColorMode } from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="SereinCommunity/sereincommunity.github.io"
      repoId="R_kgDOLos8YA"
      category="Giscus"
      categoryId="DIC_kwDOLos8YM4CeZhh"
      term="快来抢沙发！"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
      mapping="pathname"
    />
  );
}

import type { WrapperProps } from '@docusaurus/types';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props} />

      <script
        defer
        src="https://analytics.eu.umami.is/script.js"
        data-website-id="fcb5952a-6728-40bd-aa47-0f48b1805970"
      />
    </>
  );
}

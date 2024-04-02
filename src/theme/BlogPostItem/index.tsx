import { useBlogPost } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItem';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import clsx from 'clsx';
import Card from './Card';

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const { isBlogPostPage } = useBlogPost();
  const containerClassName = !isBlogPostPage ? 'margin-bottom--md' : undefined;

  if (isBlogPostPage)
    return (
      <article className={clsx(containerClassName, className)}>
        <BlogPostItemHeader />
        <BlogPostItemContent>{children}</BlogPostItemContent>
        <BlogPostItemFooter />
      </article>
    );

  return <Card className={className} />;
}

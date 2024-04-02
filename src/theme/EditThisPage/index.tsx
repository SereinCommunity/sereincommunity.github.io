import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';
import type { Props } from '@theme/EditThisPage';
import IconEdit from '@theme/Icon/Edit';
import clsx from 'clsx';

export default function EditThisPage({ editUrl }: Props): JSX.Element {
  return (
    <Link
      to={editUrl}
      className={clsx(ThemeClassNames.common.editThisPage, 'underline-links')}
    >
      <IconEdit />
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page"
      >
        Edit this page
      </Translate>
    </Link>
  );
}

import Link from '@docusaurus/Link';
import {
  useBlogPost,
  useDateTimeFormat,
} from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import { Metadata } from '../../../types/Metadata';
import styles from './index.module.css';
import { useState } from 'react';
import { PluginInfo } from '../../../types/PluginInfo';
import { load } from '../../../service/pluginManager';

export default function ({ className }) {
  const { metadata } = useBlogPost();

  const { permalink, tags, title, date, authors } = metadata as Metadata;
  const id = permalink.replace(/^\/plugins\//, '');

  const [pluginInfo, setPluginInfo] = useState(
    {} as {
      [id: string]: PluginInfo;
    }
  );

  if (Object.keys(pluginInfo).length === 0)
    load()
      .then((v) => setPluginInfo(v.data))
      .catch((e) => console.error(e));

  return (
    <Link
      className={clsx('card', 'padding--md', styles.cardContainer, className)}
      to={permalink}
    >
      <div>
        <span title={id} className={styles.cardTitle}>
          {title}
        </span>
        <code className={styles.version}>{pluginInfo[id]?.version}</code>
      </div>
      <div className={styles.avatars}>
        {authors.map((a) => (
          <div className="avatar">
            <img className="avatar__photo" src={a.imageURL} />
            <div className="avatar__intro">
              <div className="avatar__name"> {a.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div>{pluginInfo[id]?.description}</div>
      <div>
        <Datetime date={pluginInfo[id]?.updateTime}></Datetime>
      </div>

      <div className={styles.tags}>
        {tags.map((t) => (
          <Link className="badge badge--secondary" to={t.permalink}>
            {t.label}
          </Link>
        ))}
      </div>
    </Link>
  );
}

function Datetime({ date }) {
  if (!date) return <></>;

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return <time dateTime={date}>{dateTimeFormat.format(new Date(date))}</time>;
}

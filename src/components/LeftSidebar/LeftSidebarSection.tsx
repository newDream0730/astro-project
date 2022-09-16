/* jsxImportSource: react */
import { useState } from 'react';
import { Tree } from '@salesforce/design-system-react';

import type { ILeftSidebarSection, ILeftSidebarItem, ITreeOnClickData } from '../../types';
import classes from './index.module.css';

interface Props {
  section: ILeftSidebarSection;
}

export default function LeftSidebarSection(props: Props) {
  const { section } = props;

  const [sectionItems, setSectionItems] = useState(section.items);

  const getNavItems = (node: Record<'nodes', number[]>) => (node.nodes ? node.nodes.map((id: number) => sectionItems[id.toString()]) : []);

  const handleClick = (event: any, data: ITreeOnClickData<ILeftSidebarItem>) => {
    const {
      select,
      node: { link },
    } = data;
    if (!select) return;

    const { host, protocol } = window.location;
    window.location.href = `${protocol}//${host}/${link}`;
  };

  return (
    <Tree
      id={section.id}
      className={classes.section}
      heading={section.heading}
      getNodes={getNavItems}
      nodes={sectionItems['0']?.nodes || []}
      onClick={handleClick}
      onExpandClick={() => true}
    />
  );
}

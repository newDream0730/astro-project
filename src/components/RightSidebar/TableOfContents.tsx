import { useMemo } from 'react';
import { VerticalNavigation } from '@salesforce/design-system-react';

import type { FC } from 'react';
import type { MarkdownHeading } from 'astro';
import type { IContentItem, ITableOfContents } from '../../types';

const overviewItem: IContentItem = {
  id: 'overview',
  label: 'Overview',
  slug: 'overview',
};

const TableOfContents: FC<{ headings: MarkdownHeading[] }> = ({ headings = [] }) => {
  // Creating the structure required by LDS
  const headingsForLDS: ITableOfContents[] = useMemo(() => {
    return [
      {
        id: 'on-this-page',
        label: 'On this page',
        items: [overviewItem, ...headings.map(({ text, slug }) => ({ id: slug, label: text, slug: slug }))],
      },
    ];
  }, [headings]);

  return (
    <VerticalNavigation
      categories={headingsForLDS}
      selectedId="." // If undefined is provided, the default behaviour is to mark the first navItem as selected
      onSelect={(event: any, { item }: { item: IContentItem }) => {
        const headingToScrollTo = document.querySelector(`#${item.id}`) as HTMLHeadingElement | null;
        window.scrollTo(0, headingToScrollTo?.offsetTop || 0);
      }}
    />
  );
};

export default TableOfContents;

import type { ILeftSidebarSection } from '../../types/index';
import { BASE_SITE_URL } from '@components/config';

export const SIDEBAR_SECTIONS: Record<string, ILeftSidebarSection[]> = {
  en: [
    {
      id: '1',
      heading: 'Section header',
      items: {
        0: {
          id: 0,
          nodes: [1, 2, 3],
        },
        1: {
          id: 1,
          label: 'Introduction',
          link: `${BASE_SITE_URL}/en/introduction`,
          selected: false,
          expanded: true,
        },
        2: {
          id: 2,
          label: 'Page 2',
          link: `${BASE_SITE_URL}/en/page-2`,
          selected: false,
          expanded: true,
        },
        3: {
          id: 3,
          label: 'Page 3',
          link: `${BASE_SITE_URL}/en/page-3`,
          selected: false,
          expanded: true,
        },
      },
    },
    {
      id: '2',
      heading: 'Another section',
      items: {
        0: {
          id: 0,
          nodes: [1],
        },
        1: {
          id: 1,
          label: 'Page 4',
          link: `${BASE_SITE_URL}/en/page-4`,
          selected: false,
          expanded: true,
        },
      },
    },
  ],
};

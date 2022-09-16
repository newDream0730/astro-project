import { v4 as uuidv4 } from 'uuid';

export const capitalize = (value: string) => value.charAt(0).toLocaleUpperCase() + value.slice(1);

export const getLastItemOfArray = (array: any[]) => array[array.length - 1];

export const transformToNavItems = (pages: Record<string, any>[]) => {
  return pages.map(({ frontmatter, url }) => ({
    id: uuidv4(),
    label: frontmatter?.title || '',
    link: url,
  }));
};

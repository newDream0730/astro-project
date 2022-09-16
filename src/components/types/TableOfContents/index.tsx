export interface ITableOfContents {
  id: string;
  label: string;
  items: IContentItem[];
}

export interface IContentItem {
  id: string;
  label: string;
  slug: string;
}

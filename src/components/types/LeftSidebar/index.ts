export interface ILeftSidebarSection {
  id: string;
  heading: string;
  items: Record<string, ILeftSidebarItem>;
}

export interface ILeftSidebarItem {
  id: number;
  label?: string;
  link?: string;
  selected?: boolean;
  expanded?: boolean;
  nodes?: number[] | string[];
}

export interface ITreeOnClickData<T> {
  node: T;
  select: boolean;
  treeIndex: string;
}

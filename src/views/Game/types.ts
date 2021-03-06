export type Tab = {
  key: string; // Name of tab
  value: JSX.Element; // The tab
  icon: string; // Img source
};

export type Stat = {
  index: number;
  count: number;
  percentage: number;
};

// TabProvider

export type State = {
  tabs: Tab[];
  option: string;
};

export type Action = {
  option: string;
};

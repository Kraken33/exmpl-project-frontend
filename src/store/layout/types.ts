export interface MenuItem {
  icon: string;
  label: string;
  link: string;
}

export interface Config {
  menu: MenuItem[];
}

export interface LayoutStore {
  config: Config;
  siderIsOpen: boolean;
}

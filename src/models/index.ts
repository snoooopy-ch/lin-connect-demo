export enum Align {
  CENTER = 'center',
  START = 'start',
  END = 'end'
}

export enum GlobalColor {
  WHITE = 'white',
  LIGHTGRAY = 'lightgray',
  DARKGRAY = 'darkgray',
  YELLOW = 'yellow',
  LIGHTBLUE = 'lightblue'
}

export interface SectionTitleProp {
  title: string;
  align: Align;
}

export interface LinkButtonProp {
  title: string;
  link: string;
  align?: Align;
}

export interface DotProp {
  size: number;
  color: string;
}

export interface ItemProp {
  image: string,
  title: string,
  price: number,
}

export interface InfoItem {
  title: string,
  date: string,
}

export interface InfoListProp {
  infos: InfoItem[];
}
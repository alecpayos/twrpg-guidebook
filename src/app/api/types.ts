export type ItemColors = {
  [itemColor: string]: string
}

export type BuildItem = {
  [itemName: string]: string[]
};

export type Build = {
  for: string;
  type: string;
  order: number;
  stat: string;
  version: string;
  itemColors?: ItemColors[];
  items: BuildItem;
  description?: string[];
  guidelink?: string[];
}

export type SpecItemEffectsAndColor = {
  [itemName: string]: string[];
} & {
  color: string;
}

export type Hero = {
  id: string;
  name: string;
  heroClass: string;
  mainstat: string;
  color: string;
  icon: string;
  wearable: string[];
  role: string[];
  description: string[];
  spec: string[];
  secondary?: string[];
}

type RecipeItem = {
  [item: string]: number
}

export type Item = {
  id: string;
  name: string;
  koreanname: string;
  description?: string;
  rank: string;
  grade: number;
  type: string;
  level?: number;
  color: string;
  required_by?: string[];
  stats?: {
    [stat: string]: string[] | number;
  };
  recipe?: RecipeItem[];
  notes?: string[];
  drops?: string[];
  droprate?: number | number[];
  dropped_by?: string[];
  worth?: number;
}

export type Skill = {
  id: string;
  name: string;
  heroClass: string;
  color: string;
  hotkey: string;
  icon: string;
  cooldown?: number;
  order: number;
  active?: string[];
  passive?: string[];
  proc_rate?: number;
  toggle?: string[];
}
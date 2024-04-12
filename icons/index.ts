import * as Uncategorized from './uncategorized/index';
import * as Accessory from './items/accessories/index';
import * as Armor from './items/armor/index';
import * as Head from './items/headwear/index';
import * as Mat from './items/materials/index';
import * as Misc from './items/miscellaneous/index';
import * as Weapon from './items/weapons/index';
import * as Wings from './items/wings/index';
import heroIcons from './heroes/index';
import placeholder from './placeholder.jpg';
import { Icon } from 'types';

import {
  earlyGame,
  endGame,
  highGame,
  lateGame,
  midGame
} from 'bossIcons';

const itemIcons: any = {
  ...Uncategorized,
  ...Accessory,
  ...Armor,
  ...Head,
  ...Mat,
  ...Misc,
  ...Weapon,
  ...Wings,
  ...earlyGame,
  ...midGame,
  ...highGame,
  ...lateGame,
  ...endGame,
  ...{ test: 1 }
}

export {
  itemIcons,
  heroIcons,
  placeholder,
}
import {
  Build,
  ColorGrade,
  Hero,
  Item,
  RecipeIcon,
  SpecItemEffectsAndColor
} from 'types';

import items from 'info/items';
import heroes from 'info/heroes';
import heroBuilds from 'info/builds';
import { Key } from 'react';
import { heroIcons, itemIcons } from 'icons';
import { grades } from 'dictionaries';
import { StaticImageData } from 'next/image';
import { getIconName } from 'api/helpers';

export class ItemFullDetails {
  public id: Key;
  public details: Item;
  public itemColorGrade: ColorGrade;
  public itemIcon: StaticImageData;
  public recipeIcons: RecipeIcon[];
  public usedInIcons: RecipeIcon[];
  public droppedBy: RecipeIcon[];
  public drops: RecipeIcon[];

  constructor(id: Key) {
    this.id = id;

    this.details = items.find(item => {
      const idOrName = id.toString().length == 4 ? item.id : item.name
      return idOrName == this.id;
    }) as Item;

    this.itemColorGrade = grades[this.details.grade];
    this.itemIcon = itemIcons[getIconName(this.details?.name)];
    this.recipeIcons = this.getRecipeIcons(this.details);
    this.usedInIcons = this.getIconsForIconNames(this.details, 0);
    this.droppedBy = this.getIconsForIconNames(this.details, 1);
    this.drops = this.getIconsForIconNames(this.details, 2);
  }

  protected getIconsForIconNames(itemDetails: Item, propNameIndex: number) {
    const iconNameProps = ['required_by', 'dropped_by', 'drops'];

    return (itemDetails[iconNameProps[propNameIndex]] as string[])?.reduce((depsList: RecipeIcon[], deps) => {
      const depsIcon = itemIcons[getIconName(deps)] ?? itemIcons[getIconName(`${deps}Icon`)];
      depsList.push({ [deps]: depsIcon });

      return depsList;
    }, []) as RecipeIcon[];
  }

  protected getRecipeIcons(itemDetails: Item) {
    return itemDetails.recipe?.reduce((recipeList: RecipeIcon[], recipe) => {
      const recipeName = Object.keys(recipe)[0];
      const recipeIcon = itemIcons[getIconName(recipeName)];
      recipeList.push({ [recipeName]: recipeIcon });
  
      return recipeList;
    }, []) as RecipeIcon[];
  }
}

export class HeroFullDetails {
  public id: string;
  public hero: Hero;
  public icon: StaticImageData;
  public builds: Build[];
  public specializedItems: SpecItemEffectsAndColor[];

  constructor(id: string) {
    this.id = id;
    this.hero = heroes.find(hero => hero.heroClass == this.id) as Hero;
    this.builds = heroBuilds.filter(build => build.for == this.hero.heroClass);
    this.icon = heroIcons[`${id.replace(' ', '')}Icon`];

    this.builds.forEach(build => {
      build.itemColors = Object.keys(build.items).map(item => {
        const itemMatch = items.find(match => match.name == item) as Item;
        return { [item]: itemMatch?.color };
      });
    })
    
    this.specializedItems = this.hero.spec.reduce((specItemList: SpecItemEffectsAndColor[], specItem) => {
      if (specItem != 'No Specs!') {
        const specItemsList = items.filter(item => (item?.stats?.spec));
        const itemMatch = specItemsList.find(item => specItem.includes(item.name));
        
        itemMatch?.stats?.spec && specItemList.push({
          [itemMatch.name]: itemMatch.stats.spec.slice(1),
          color: itemMatch?.color
        } as SpecItemEffectsAndColor);
      }
  
      return specItemList;
    }, []);
  }
}
import heroes from 'info/heroes';
import heroSkills from 'info/skills'
import heroBuilds from 'info/builds';
import { getItemColors, getSpecializedItems } from './items';
import { Item, SpecItemEffectsAndColor } from 'types';

export const getHeroSkills = (heroClass: string) => {
  return heroSkills.filter(skill => skill.heroClass == heroClass);
}

export const getHeroBuilds = (hero: string, heroClass: string) => {
  return heroBuilds.filter(build => build.stat == heroClass && build.for == hero);
}

export const getHeroFullDetails = (heroName: string) => {
  const specItemsList = getSpecializedItems();
  const hero = heroes.find(hero => hero.heroClass == heroName);
  const builds = heroBuilds.filter(build => build.stat == hero?.mainstat && build.for == hero?.heroClass);

  builds.forEach(build => {
    const itemNameList = Object.keys(build.items);
    build['itemColors'] = getItemColors(itemNameList)
  })

  const specializedItems = hero?.spec.reduce((specItemList: SpecItemEffectsAndColor[], specItem: string) => {
    if (specItem != 'No Specs!') {
      const itemMatch = specItemsList.find((item: Item) =>  specItem.includes(item.name));
      
      if (itemMatch && itemMatch.stats && Array.isArray(itemMatch.stats.spec)) {
        const specItem: SpecItemEffectsAndColor = {
          [itemMatch.name]: itemMatch.stats.spec.slice(1),
          color: itemMatch?.color
        } as SpecItemEffectsAndColor;

        specItemList.push(specItem);
      }
    }

    return specItemList;
  }, []) || [];

  return {
    hero,
    builds,
    specializedItems,
  }
}

export const getHeroes = (category: string) => {
  const specializedItems = getSpecializedItems();
  const categorizedHeroes = heroes.filter(hero => hero.mainstat == category);
  const heroWithSpecs = categorizedHeroes.filter(hero => !hero.spec.includes('No Specs!'));

  const formattedHeroSpecs: any = heroWithSpecs.reduce((formattedSpecsList: any, hero) => {
    const formattedSpecs = hero.spec.map(spec => {
      const specMatch: any = specializedItems.find(item => spec.includes(item.name));
      return specMatch?.stats.spec.slice(1);
    });

    formattedSpecsList[hero.name] = formattedSpecs.flat();

    return formattedSpecsList;
  }, {});

  return {
    categorizedHeroes,
    formattedHeroSpecs
  };
}
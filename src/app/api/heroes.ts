import heroes from 'info/heroes';
import heroSkills from 'info/skills'
import { getSpecializedItems } from './items';

export const getHeroSkills = (heroClass: string) => {
  return heroSkills.filter(skill => skill.heroClass == heroClass);
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
import items from 'info/items';

export const itemTabs = [
  { id: 'Weapon' },
  { id: 'Head' },
  { id: 'Armor' },
  { id: 'Accessory' },
  { id: 'Wings' },
  { id: 'Mat' },
  { id: 'Misc' },
  { id: 'Pickaxe' },
  { id: 'Token' },
  { id: 'Icon' },
  { id: 'Food' },
  { id: 'Coin' },
  { id: 'Special' },
];

export const getItemAttrMatches = (attrGroup: string, item: any) => {
  const matchers = attrGroup == 'armor'
    ? ['armor']
    : attrGroup == 'constitution'
    ? ['hpregen','mpregen','hp','mp']
    : attrGroup == 'statsgain'
    ? ['mainstat','allstat','str','agi','int']
    : attrGroup == 'affinities'
    ? ['affinitydarkpercent','affinityflamepercent','affinityearthpercent','affinitylightpercent','affinityiwpercent','affinitywlpercent',]
    : attrGroup == 'dexterities'
    ? ['attackspeedpercent','movespeed','critchancepercent','critmultiplier']
    : attrGroup == 'targeted'
    ? ['periodicdamagepercent','skilldamagepercent','procdamagepercent','aadamagepercent']
    : attrGroup == 'defense'
    ? ['drpercent', 'dtpercent','mdpercent']
    : attrGroup == 'survival'
    ? ['dodgechancepercent', 'healingpercent', 'healreceivedpercent',]
    : [];

  const keys = item.stats ? Object.keys(item.stats) : [];
  const regex = new RegExp(matchers.join('|'), 'ig');
  
  return attrGroup == 'damage'
    ? keys.find(key => key == 'damage')?.length || 0
    : keys.join('').match(regex)?.length || 0;
}

export const getItemMatches = (attrGroup: string, paginatedFilteredItems: any[]) => {
  return paginatedFilteredItems.reduce((matches, item: any) => {
    matches += getItemAttrMatches(attrGroup, item);

    return matches;
  }, 0);
}

export const getSpecializedItems = () => {
  return items.filter(item => item.stats && Object.prototype.hasOwnProperty.call(item.stats, 'spec'));
}

export const getItemColors = (itemList: string[]) => {
  return itemList.map((item: string) => {
    const itemMatch: any = items.find(match => match.name.toLowerCase() == item.toLowerCase());
    return { [item]: itemMatch?.color || '' };
  })
}

export const getFilteredItems = (
  page: number,
  category: string,
  searchValue: string,
  itemsPerPage: number = 15
) => {
  const from = (page - 1) * itemsPerPage;
  const to = page * itemsPerPage;
  const regex = new RegExp(searchValue, 'ig');

  const filteredItems = items.filter(item => {
    return item.type?.includes(category) && regex.test(item.name);
  }).sort((a,b) => a.name.localeCompare(b.name));

  const paginatedFilteredItems = filteredItems.slice(from, to);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;

  return {
    items: paginatedFilteredItems,
    totalPages,
  };
}
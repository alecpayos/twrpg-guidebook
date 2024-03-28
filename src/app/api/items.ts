import * as itemsData from 'info/items.json'

const possibleStatsList = (items: any[]) => {
  const done = [
    'hpregen', 'mpregen', 'hp', 'mp',
    'affinitydarkpercent','affinityflamepercent','affinityearthpercent','affinitylightpercent','affinityiwpercent','affinitywlpercent',
    'mainstat','allstat','str','agi','int',
  ];

  return items.reduce((list, item) => {
    item.stats && Object.keys(item.stats).forEach(stat => {
      (!list.includes(stat) && !done.includes(stat)) && list.push(stat);
    });

    return list;
  }, []);
}

export const getItemAttrMatches = (attrGroup: string, item: any) => {
  const matchers = attrGroup == 'constitution'
    ? ['hpregen','mpregen','hp','mp']
    : attrGroup == 'statsgain'
    ? ['mainstat','allstat','str','agi','int']
    : attrGroup == 'affinities'
    ? ['affinitydarkpercent','affinityflamepercent','affinityearthpercent','affinitylightpercent','affinityiwpercent','affinitywlpercent',]
    : [];
    
  const keys = item.stats ? Object.keys(item.stats) : [];
  const regex = new RegExp(matchers.join('|'), 'ig');
  return keys.join('').match(regex)?.length || 0;
}

export const getItemMatches = (attrGroup: string, paginatedFilteredItems: any[]) => {
  return paginatedFilteredItems.reduce((matches, item: any) => {
    matches += getItemAttrMatches(attrGroup, item);

    return matches;
  }, 0);
}

export const getFilteredItems = (
  page: number,
  category: string,
  searchValue: string,
  itemsPerPage: number = 15
) => {
  const from = (page - 1) * itemsPerPage;
  const to = page * itemsPerPage;
  const items = Object.values(itemsData);
  const regex = new RegExp(searchValue, 'ig');

  const filteredItems = items.filter(item => {
    return item.type?.includes(category) && regex.test(item.name);
  }).sort((a,b) => a.name.localeCompare(b.name));

  const paginatedFilteredItems = filteredItems.slice(from, to);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const statsList = possibleStatsList(filteredItems);

  return {
    items: paginatedFilteredItems,
    totalPages,
    statsList
  };
}
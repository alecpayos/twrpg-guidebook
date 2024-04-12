import items from 'info/items';
import { statGroups } from 'dictionaries';
import { Item } from './types';

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getIconName = (name: string) => {
  return name
    .split(' ')
    .map(name => capitalize(name))
    .join('')
    .replace(/[+]/ig, 'Plus')
    .replace(/[^a-zA-Z0-9]/ig, '');
}

export const getItemAttrMatches = (attrGroup: string, item: Item) => {
  const keys = item.stats ? Object.keys(item.stats) : [];
  const regex = statGroups[attrGroup] ? new RegExp(statGroups[attrGroup].join('|'), 'ig') : '';

  return attrGroup == 'damage'
    ? keys.find(key => key == 'damage')?.length || 0
    : keys.join('').match(regex)?.length || 0;
}

export const getFilteredItems = (
  page: number,
  category: string,
  searchValue: string,
  itemsPerPage: number = 15
) => {
  const from = (page - 1) * itemsPerPage;
  const to = page * itemsPerPage;
  const allowedSearchValues = /[a-zA-Z]/.test(searchValue) ? searchValue : '';
  const regex = new RegExp(allowedSearchValues, 'ig');

  const filteredItems = items.filter(item => {
    return item.type?.includes(category) && regex.test(item.name);
  }).sort((a, b) => a.name.localeCompare(b.name));

  const paginatedFilteredItems = filteredItems.slice(from, to);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;

  return {
    items: paginatedFilteredItems,
    totalPages,
  };
}
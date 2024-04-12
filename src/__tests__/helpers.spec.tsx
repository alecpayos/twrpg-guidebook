import { describe, expect, it } from "vitest";
import { capitalize, getFilteredItems, getIconName, getItemAttrMatches } from "@/app/api/helpers";
import { Item } from "types";

describe('capitalize function', () => {
  it('should return a capitalized string', () => {
    const capitalized = capitalize('capitalized');

    expect(capitalized).toBe('Capitalized');
  });
});

describe('getIconName function', () => {
  it('should return a formatted string', () => {
    const iconName = getIconName('Tomato');

    expect(iconName).toBe('Tomato');
  });
});

describe('getItemAttributeMatches function', () => {
  it('should return 0 if no Item', () => {
    const statsGroup = [
      'damage',
      'armor',
      'constitution',
      'statsgain',
      'affinities',
      'dexterities',
      'targeted',
      'defense',
      'survival',
    ];

    const { items } = getFilteredItems(1, 'Weapon', '', 20);

    statsGroup.forEach(stat => {
      items.forEach(item => {
        const attrMatch = getItemAttrMatches(stat, item);
        
        expect(attrMatch).toBeDefined();
      });

      const emptyMatch = getItemAttrMatches(stat, {} as Item);

      expect(emptyMatch).toBe(0);
    });
  });
});

describe('getFilteredItems function', () => {
  it('should have a length of 4 due to filters', () => {
    const { items } = getFilteredItems(1, 'Weapon', 'byss', 20);

    expect(items.length).toBe(4);
  });

  it('should be 1 due to filters', () => {
    const { totalPages } = getFilteredItems(1, 'No filter', '', 2);

    expect(totalPages).toBe(1);
  });
});
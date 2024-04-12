import heroes from "info/heroes";
import items from "info/items";
import { Item } from "types";
import { HeroFullDetails, ItemFullDetails } from "classes";
import { describe, expect, expectTypeOf, it } from "vitest";

describe('ItemFullDetails class', () => {
  items.forEach(item => {
    it(`constructor initializes properties correctly for item ${item.id}`, () => {
      const itemMatch = new ItemFullDetails(item.id);
    
      expect(itemMatch).toBeDefined();
      expect(itemMatch.details).toBeDefined();
      expectTypeOf(itemMatch.details).toEqualTypeOf<Item>();
    });
  });
});

describe('HeroFullDetails class', () => {
  heroes.forEach(hero => {
    it(`constructor initializes properties correctly for hero ${hero.heroClass}`, () => {
      const heroMatch = new HeroFullDetails(hero.heroClass);
  
      expect(heroMatch).toBeDefined();
      expect(heroMatch.specializedItems).toBeDefined();
    });
  });
});
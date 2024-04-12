import builds from 'info/builds.ts';
import heroes from 'info/heroes.ts';
import items from 'info/items.ts';
import skills from 'info/skills.ts';

import { describe, it, expect, expectTypeOf } from 'vitest';
import { Item, Build, Skill, Hero } from 'types';

type FileContents = {
  builds?: Build[];
  heroes?: Hero[];
  items?: Item[];
  skills?: Skill[];
  current: number;
  expects: number;
  [key: string]: Build[] | Hero[] | Item[] | Skill[] | number | number | undefined;
}

const fileContents: FileContents[] = [
  { builds, current: builds.length, expects: 120},
  { heroes, current: heroes.length, expects: 36},
  { items, current: items.length, expects: 748},
  { skills, current: skills.length, expects: 367},
];

describe('Sanity test', () => {
  it('for file content length', () => {
    const expectedContentLength = fileContents.reduce((contentLength, content) => {
      contentLength += content.expects;

      return contentLength;
    }, 0);

    const actualContentLength = fileContents.reduce((contentLength, content) => {
      contentLength += content.current;

      return contentLength;
    }, 0);

    expect(actualContentLength).toEqual(expectedContentLength);
  })
});

describe('Information entry or count per info file', () => {
  fileContents.forEach(content => {
    const fileName = Object.keys(content)[0];

    it(`where ${fileName} info file lenght is ${content.expects}`, () => {
      expect(content.current).toEqual(content.expects);
    });
  });
});

describe('Each record is of correct type', () => {
  (fileContents[0].builds as Build[]).forEach(record => {
    it(`where record for ${record.for} is of Build type`, () => {
      expectTypeOf(record).toEqualTypeOf<Build>()
    });
  });

  (fileContents[1].heroes as Hero[]).forEach(record => {
    it(`where record for ${record.heroClass} is of Hero type`, () => {
      expectTypeOf(record).toEqualTypeOf<Hero>()
    });
  });

  (fileContents[2].items as Item[]).forEach(record => {
    it(`where record for ${record.name} is of Item type`, () => {
      expectTypeOf(record).toEqualTypeOf<Item>()
    });
  });

  (fileContents[3].skills as Skill[]).forEach(record => {
    it(`where record for ${record.name} is of Skill type`, () => {
      expectTypeOf(record).toEqualTypeOf<Skill>()
    });
  });
});
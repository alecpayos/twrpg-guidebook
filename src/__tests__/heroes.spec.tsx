import heroes from 'info/heroes';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HeroFullDetails } from '@/app/api/classes';
import Heroes, { BuildItems, ProgressionBuildTypes, SpecializedItems } from '@/app/components/heroes';


describe('Heroes page', () => {
  it('renders the entire page correctly', () => {
    const { container } = render(<Heroes />);

    expect(container.firstChild).toBeTruthy();
  });
});

describe('Hero components', () => {
  heroes.forEach(({ heroClass }) => {
    it(`renders the components of ${heroClass} correctly`, () => {
      const {
        hero,
        builds,
        specializedItems,
      } = new HeroFullDetails(heroClass);

      const { container: specItems } = render(
        <SpecializedItems specializedItems={specializedItems} />
      );

      const { container: buildTypes } = render(
        <ProgressionBuildTypes builds={builds} heroColor={hero.color || ''} />
      );

      specializedItems.length
        ? expect(specItems.firstChild).toBeTruthy()
        : expect(specItems.firstChild).toBeNull();

      expect(buildTypes.firstChild).toBeTruthy();

      builds.forEach(build => {
        const { container } = render(
          <BuildItems items={build.items} colors={build.itemColors || []} />
        );

        expect(container.firstChild).toBeTruthy();
      });
    });
  });
});
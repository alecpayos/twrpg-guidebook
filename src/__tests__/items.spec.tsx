import items from 'info/items';
import Items from '@/app/components/items';
import { render, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  AffinityRows,
  ArmorRows,
  BossTargetedRows,
  ConstitutionRows,
  DamageRows,
  DexterityRows,
  StatsGainRows,
  SurvivalRows,
} from '@/app/components/items-table-rows';
import { useDisclosure } from '@nextui-org/react';
import { ItemIconsForIconNameList, ItemRecipeList, ItemStatsList, ShowItemDetailsModal } from '@/app/components/item-details';
import { ItemFullDetails } from '@/app/api/classes';
import { useState } from 'react';

describe('Items page parent component', () => {
  it('renders the page correctly', () => {
    const { container } = render(<Items rowHoverBg='hover:bg-zinc-800' />);

    expect(container.firstChild).toBeTruthy();
  });
});

describe('Item table rows', () => {
  items.forEach(item => {
    it('renders the table rows correctly', () => {
      const { container: damageRows } = render(<DamageRows item={item} />);
      const { container: armorRows } = render(<ArmorRows item={item} />);
      const { container: constitutionRows } = render(<ConstitutionRows item={item} />);
      const { container: statsGainRows } = render(<StatsGainRows item={item} />);
      const { container: dexterityRows } = render(<DexterityRows item={item} />);
      const { container: affinityRows } = render(<AffinityRows item={item} />);
      const { container: bossTargetedRows } = render(<BossTargetedRows item={item} />);
      const { container: survivalRows } = render(<SurvivalRows item={item} />);

      expect(damageRows.firstChild).toBeTruthy();
      expect(armorRows.firstChild).toBeTruthy();
      expect(constitutionRows.firstChild).toBeTruthy();
      expect(statsGainRows.firstChild).toBeTruthy();
      expect(dexterityRows.firstChild).toBeTruthy();
      expect(affinityRows.firstChild).toBeTruthy();
      expect(bossTargetedRows.firstChild).toBeTruthy();
      expect(survivalRows.firstChild).toBeTruthy();
    });
  });
});

describe('Item full details', () => {
  items.forEach(item => {
    it(`renders the full details of ${item.name} correctly`, () => {
      const {
        details,
        recipeIcons,
        usedInIcons,
        droppedBy,
        drops,
      } = new ItemFullDetails(item.id);
      
      const { result } = renderHook(() => useDisclosure());
      const { isOpen, onOpenChange } = result.current;

      const { result: testItem } = renderHook(() => useState<string | number | bigint>(item.id))
      const [, setItem] = testItem.current;

      const { container: parent } = render(<ShowItemDetailsModal isOpen={isOpen} onOpenChange={onOpenChange} itemId='I0DN' />);
      const { container: statsList } = render(<ItemStatsList itemDetails={item} />);
      const { container: iconNameList } = render(<ItemIconsForIconNameList iconNameList={usedInIcons} propIndex={0} />);
      const { container: dropped } = render(<ItemIconsForIconNameList iconNameList={droppedBy} propIndex={1} />);
      const { container: mobDrops } = render(<ItemIconsForIconNameList iconNameList={drops} propIndex={2} />);
      const { container: recipeList } = render(<ItemRecipeList itemDetails={details} recipeIcons={recipeIcons} setItem={setItem} />);
      
      expect(parent.firstChild).toBeNull();
      expect(statsList.firstChild).toBeTruthy();
      expect(iconNameList.firstChild).toBeTruthy();
      expect(dropped.firstChild).toBeTruthy();
      expect(mobDrops.firstChild).toBeTruthy();
      expect(recipeList.firstChild).toBeTruthy();
    });
  });
});
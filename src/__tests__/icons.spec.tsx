import { describe, it, expect, vi } from 'vitest';
import heroSkillsIcons from 'heroSkillsIcons';

describe('Sanity test', () => {
  it('if 1 === 1', () => {
    expect(1).toEqual(1);
  })
});

vi.doMock('icons/heroes/skills.ts', async () => {
  await vi.importActual('../../icons/heroes/skills.ts');

  return heroSkillsIcons;
});
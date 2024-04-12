import { getCategorizedBosses } from 'api/bosses';
import { describe, expect, it } from 'vitest';

describe('Bosses data', () => {
  it('should have data', () => {
    const bosses = getCategorizedBosses();

    expect(bosses).toBeDefined();
  });
});
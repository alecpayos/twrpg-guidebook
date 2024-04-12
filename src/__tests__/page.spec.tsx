import { expect, describe, test } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import Page from '../app/page'

describe('Page component', () => {
  test('changeMode function toggles between dark and light mode', () => {
    const { getByRole } = render(<Page />);
    const classList = document.body.querySelector('main')?.classList as DOMTokenList;

    expect(classList.contains('dark')).toBe(true);
    expect(classList.contains('text-gray-400')).toBe(true);
    expect(classList.contains('bg-background')).toBe(true);
    
    fireEvent.click(getByRole('tab', { name: 'Light' }));
    
    expect(classList.contains('bg-sky-50')).toBe(false);
    
    fireEvent.click(getByRole('tab', { name: 'Dark' }));
    
    expect(classList.contains('dark')).toBe(true);
    expect(classList.contains('text-gray-400')).toBe(true);
    expect(classList.contains('bg-background')).toBe(true);
  });
});
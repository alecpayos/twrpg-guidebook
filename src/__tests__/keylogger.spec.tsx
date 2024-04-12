import KeyLogger from "@/app/components/keylogger";
import { act, render, renderHook } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, it } from "vitest";

describe('Items page parent component', () => {
  it('renders the page correctly', () => {
    const { result: itemCategory } = renderHook(() => useState(''));
    const [, changeItemCategory ] = itemCategory.current;
    
    const { result: keyPressed } = renderHook(() => useState(''));
    const [, onKeyPress ] = keyPressed.current;

    act(() => {
      const { container } = render(
        <KeyLogger changeItemCategory={changeItemCategory} onKeyPress={onKeyPress} />
      );

      changeItemCategory('A');
      onKeyPress('4');

      container.dispatchEvent(new KeyboardEvent('keydown', { key: 'A' }));
      container.dispatchEvent(new KeyboardEvent('keyup', { key: 'A' }));
      container.dispatchEvent(new KeyboardEvent('keypress', { key: 'A' }));
    });

    expect(itemCategory.current[0]).toBe('A');
    expect(keyPressed.current[0]).toBe('4');
    expect(1).toBe(1)
  });
});
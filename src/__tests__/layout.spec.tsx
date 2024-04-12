import { expect, describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout';

vi.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      subsets: ["latin"]
    }
  })
}));

describe('Root layout', () => {
  it('to render', () => {
    render(
      <RootLayout>
        <></>
      </RootLayout>
    );
    
    expect(screen).toBeDefined();
  });
})
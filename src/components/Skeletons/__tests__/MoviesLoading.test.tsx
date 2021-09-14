import { render, screen } from '@testing-library/react';
import React from 'react';
import { MoviesLoading } from '../MoviesLoading';

describe('Movies loading component test', () => {
  it('should contain 5 loading skeleton cards', () => {
    render(<MoviesLoading />);

    const skeletonElements = screen.getAllByTestId('skeleton_card');
    expect(skeletonElements.length).toBe(5);

    expect(true).toBe(true);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkeletonCard } from '../SkeletonCard';

describe('Skeleton card loading test', () => {
  it('should have the skeleton card container', () => {
    render(<SkeletonCard />);
    const skeletonCardContainer = screen.getByTitle('skeleton_card__container');
    expect(skeletonCardContainer).toBeInTheDocument();
  });

  it('should have the loading card class', () => {
    render(<SkeletonCard />);
    const skeletonCard = screen.getByTestId('skeleton_card');
    expect(skeletonCard).toHaveClass('ant-card-loading');
  });
});

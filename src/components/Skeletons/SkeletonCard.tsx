import { Card, Row } from 'antd';
import React from 'react';

/**
 *
 * @returns Skeleton card UI to show individual loading state
 */
export const SkeletonCard: React.FC = () => {
  return (
    <Row title="skeleton_card__container">
      <Card
        loading
        style={{ width: '400px', marginBottom: '20px' }}
        data-testid="skeleton_card"
      />
    </Row>
  );
};

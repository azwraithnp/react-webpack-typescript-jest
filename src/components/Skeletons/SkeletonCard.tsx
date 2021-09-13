import { Card, Row } from 'antd';
import React from 'react';

/**
 *
 * @returns Skeleton card UI to show individual loading state
 */
export const SkeletonCard: React.FC = () => {
  return (
    <Row justify="center">
      <Card loading style={{ width: '400px', marginBottom: '20px' }} />
    </Row>
  );
};

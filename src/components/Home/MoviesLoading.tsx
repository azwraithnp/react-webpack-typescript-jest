import { Col } from 'antd';
import React from 'react';
import { SkeletonCard } from '../Skeletons/SkeletonCard';

/**
 *
 * @returns Show 5 skeleton cards if the state is loading
 */
export const MoviesLoading: React.FC = () => {
  return (
    <Col xs={24}>
      {[0, 1, 2, 3, 4].map((val) => (
        <SkeletonCard key={val} />
      ))}
    </Col>
  );
};

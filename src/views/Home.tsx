import { Layout, Row } from 'antd';
import React, { useState } from 'react';
import { MovieDetails } from '../../src/components/Home/MovieDetails'; //Detail movie view to show in drawer
import { MovieCard } from '../../src/components/Home/MovieCard'; //Single card component for movie list
import { DirectorDetails } from '../../src/components/Home/DirectorDetails'; //Director detail view to show inside modal

export const Home: React.FC = () => {
  const [showDirectorModal, setShowDirectorModal] = useState(false); //useState to hide or show director's detail modal
  const [showMovieDetails, setShowMovieDetails] = useState(false); //useState to hide or show movie details drawer

  const hello = 'abcd';

  return (
    <Layout style={{ backgroundColor: 'white', padding: '20px 20px' }}>
      <Row justify="center" gutter={[0, 18]}>
        <MovieCard
          setDirectorModal={setShowDirectorModal}
          setDisplayDetails={setShowMovieDetails}
        />
        <MovieCard
          setDirectorModal={setShowDirectorModal}
          setDisplayDetails={setShowMovieDetails}
        />
        <MovieCard
          setDirectorModal={setShowDirectorModal}
          setDisplayDetails={setShowMovieDetails}
        />
        <MovieCard
          setDirectorModal={setShowDirectorModal}
          setDisplayDetails={setShowMovieDetails}
        />
      </Row>
      <MovieDetails
        showDisplayDetails={showMovieDetails}
        setShowDisplayDetails={setShowMovieDetails}
        setShowDirectorDetails={setShowDirectorModal}
      />
      <DirectorDetails
        showDirectorDetails={showDirectorModal}
        setShowDirectorDetails={setShowDirectorModal}
      />
    </Layout>
  );
};

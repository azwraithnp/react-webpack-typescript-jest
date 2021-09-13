import { Layout, Row } from 'antd';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { MovieDetails } from '../../src/components/Home/MovieDetails';
import { MovieCard } from '../../src/components/Home/MovieCard';
import { DirectorDetails } from '../../src/components/Home/DirectorDetails';
import { MoviesLoading } from '../../src/components/Home/MoviesLoading';
import { API_URL } from '../../utils/urls';
import Movie from 'src/interfaces/movie';
import Director from 'src/interfaces/director';

/**
 *
 * @returns Call fetch movies list API and return JSON returned
 */
const fetchMovies = async () => {
  const res = await fetch(`${API_URL}/movies`);
  return res.json();
};

/**
 *
 * @returns Homepage of the application
 */
export const Home: React.FC = () => {
  //useState to hide or show director's detail modal
  const [showDirectorModal, setShowDirectorModal] = useState<Director | null>(
    null,
  );

  //useState to hide or show movie details drawer
  const [showMovieDetails, setShowMovieDetails] = useState<Movie | null>(null);

  //react-query hook to store data and status returned by the fetch API
  const { isLoading, data } = useQuery('movies', fetchMovies);

  return (
    <Layout style={{ backgroundColor: 'white', padding: '20px 20px' }}>
      <Row justify="center" gutter={[0, 18]}>
        {isLoading && <MoviesLoading />}

        {data &&
          data.map((movie: Movie, index: number) => (
            <MovieCard
              setDirectorModal={setShowDirectorModal}
              setDisplayDetails={setShowMovieDetails}
              movie={movie}
              key={index}
            />
          ))}
      </Row>
      <MovieDetails
        showDisplayDetails={showMovieDetails}
        setShowDisplayDetails={setShowMovieDetails}
        setShowDirectorDetails={setShowDirectorModal}
        movieList={data}
      />
      <DirectorDetails
        showDirectorDetails={showDirectorModal}
        setShowDirectorDetails={setShowDirectorModal}
      />
    </Layout>
  );
};

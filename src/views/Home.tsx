import { Layout, Row } from 'antd';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { MovieDetails } from '../components/Home/Movie/MovieDetails';
import { MovieCard } from '../components/Home/Movie/MovieCard';
import { DirectorDetails } from '../components/Home/Director/DirectorDetails';
import { API_URL } from '../../utils/urls';
import Movie from 'src/interfaces/movie';
import Director from 'src/interfaces/director';
import { motion } from 'framer-motion';
import { MoviesLoading } from '../../src/components/Skeletons/MoviesLoading';

/**
 *
 * @returns Call fetch movies list API and return JSON returned
 */
const fetchMovies = async () => {
  const res = await fetch(`${API_URL}/movies`);
  return res.json();
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
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
      <Row gutter={[0, 18]}>
        {isLoading && <MoviesLoading />}
        {data && (
          <motion.div animate={variants.open}>
            {data &&
              data.map((movie: Movie, index: number) => (
                <MovieCard
                  setDirectorModal={setShowDirectorModal}
                  setDisplayDetails={setShowMovieDetails}
                  movie={movie}
                  key={index}
                />
              ))}
          </motion.div>
        )}
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

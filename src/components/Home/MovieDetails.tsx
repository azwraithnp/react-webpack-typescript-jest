import { Col, Drawer, Row } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react';
import Director from 'src/interfaces/director';
import Movie from 'src/interfaces/movie';
import { API_URL } from '../../../utils/urls';
import { MovieCard } from './MovieCard';
import { ButtonStyled } from './styles/button.styled';
import { DrawerCard } from './styles/drawer-card.styled';

/**
 * @interface Props
 * @prop {boolean} Props.showDisplayDetails - Value to denote whether movie details drawer is shown or hidden, Movie object is returned when shown
 * @prop {void} Props.setShowDisplayDetails - Show or hide the display movie details drawer
 * @prop {void} Props.setShowDirectorDetails - Show or hide the director details modal
 * @prop {Array<Movie>} Props.movieList - List of movies passed from the parent component
 */
interface Props {
  showDisplayDetails: Movie | null;
  setShowDisplayDetails: (show: Movie | null) => void;
  setShowDirectorDetails: (show: Director | null) => void;
  movieList: Array<Movie>;
}

/**
 *
 * @param {Props} Props passed to the component
 * @returns Detail view to show when a movie card is clicked
 */
export const MovieDetails: React.FC<Props> = ({
  showDisplayDetails,
  setShowDisplayDetails,
  setShowDirectorDetails,
  movieList,
}) => {
  const breakpoint = useBreakpoint(); //custom hook provided by AntD to find out window's breakpoints

  /**
   * Stops event's propagation to prevent bubbling,
   * Add a movie to favorite
   * @param event React's Browser's Synthetic Event for Mouse events
   */
  const addToFav = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log('added to fav');
  };

  /**
   * Stops event's propagation to prevent bubbling,
   * Show director detail's modal on click,
   * @param event React's Browser's Synthetic Event for Mouse events
   */
  const showDirectorModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setShowDirectorDetails(
      showDisplayDetails?.director ? showDisplayDetails.director : null,
    );
  };

  return (
    <Drawer
      visible={!!showDisplayDetails}
      onClose={() => setShowDisplayDetails(null)}
      destroyOnClose={true}
      width={breakpoint.lg ? '50%' : '100%'}
    >
      <div onClick={() => setShowDisplayDetails(null)}>
        <DrawerCard>
          <Col xs={12}>
            <img
              src={API_URL + showDisplayDetails?.cover?.url}
              alt="movie_image"
            />
          </Col>
          <Col xs={12}>
            <div>
              <Row>
                <span className="title">{showDisplayDetails?.title}</span>
              </Row>
              <Row>
                <span className="category_title">
                  {showDisplayDetails?.category_name}
                </span>
              </Row>
              <Row>
                <span
                  className="director_title"
                  id="director_title"
                  onClick={(event) => showDirectorModal(event)}
                >
                  {showDisplayDetails?.director?.name}
                </span>
              </Row>
            </div>
          </Col>
        </DrawerCard>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={24}>
            <p>{showDisplayDetails?.description}</p>
          </Col>
        </Row>
        <Row>
          <ButtonStyled size="large" onClick={(event) => addToFav(event)}>
            Add to Favorite
          </ButtonStyled>
        </Row>
        <Row gutter={[0, 18]} style={{ marginTop: '20px' }}>
          {movieList &&
            movieList.map(
              (movie, index) =>
                movie.id !== showDisplayDetails?.id && (
                  <MovieCard
                    key={index}
                    setDirectorModal={setShowDirectorDetails}
                    setDisplayDetails={setShowDisplayDetails}
                    movie={movie}
                    detailsLayout
                  />
                ),
            )}
        </Row>
      </div>
    </Drawer>
  );
};

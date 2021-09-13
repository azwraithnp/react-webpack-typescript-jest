import { Col, Row } from 'antd';
import React from 'react';
import Director from 'src/interfaces/director';
import Movie from 'src/interfaces/movie';
import { API_URL } from '../../../utils/urls';
import { CardStyled } from './styles/card.styled';

/**
 * @interface Props
 * @prop {void} Props.setDisplayDetails - Show or hide the display movie details drawer
 * @prop {void} Props.setDirectorModal - Show or hide the director details modal
 * @prop {boolean} Props.detailsLayout - Value to denote whether the movie card is being used in home or movie details to change alignment
 * @prop {Movie} Props.movie - Movie detail object to populate data
 */
interface Props {
  setDirectorModal: (show: Director | null) => void;
  setDisplayDetails: (show: Movie | null) => void;
  detailsLayout?: boolean;
  movie: Movie;
}

/**
 *
 * @param {Props} Props passed to the component
 * @returns Individual movie card object to show brief movie details in a card in movies list
 */
export const MovieCard: React.FC<Props> = ({
  setDirectorModal,
  setDisplayDetails,
  movie,
  detailsLayout,
}) => {
  /**
   * Stops event's propagation to prevent bubbling,
   * Show director detail's modal on click,
   * @param event React's Browser's Synthetic Event for Mouse events
   */
  const handleDirectorClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDirectorModal(movie.director);
  };

  /**
   * Stops event's propagation to prevent bubbling,
   * Show movie details drawer on click,
   * @param event React's Browser's Synthetic Event for Mouse events
   */
  const handleViewClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDisplayDetails(movie);
  };

  return (
    <Col xs={24}>
      <Row justify={detailsLayout ? 'start' : 'center'}>
        <CardStyled onClick={(event) => handleViewClick(event)}>
          <Col>
            <img src={API_URL + movie.cover?.url} alt="movie_image" />
          </Col>
          <Col>
            <div>
              <Row>
                <span className="title">{movie.title}</span>
              </Row>
              <Row>
                <span className="category_title">{movie.category_name}</span>
              </Row>
              <Row onClick={(event) => handleDirectorClick(event)}>
                <span className="director_title" id="director_title">
                  {movie.director?.name}
                </span>
              </Row>
            </div>
          </Col>
        </CardStyled>
      </Row>
    </Col>
  );
};

import { Col, Row } from 'antd';
import React from 'react';
import { CardStyled } from './styles/card.styled';

/**
 * @interface Props
 * @prop {void} Props.setDisplayDetails - Show or hide the display movie details drawer
 * @prop {void} Props.setDirectorModal - Show or hide the director details modal
 */
interface Props {
  setDirectorModal: (show: boolean) => void;
  setDisplayDetails: (show: boolean) => void;
}

export const MovieCard: React.FC<Props> = ({
  setDirectorModal,
  setDisplayDetails,
}) => {
  /**
   * Stops event's propagation to prevent bubbling,
   * Show director detail's modal on click,
   * @param event React's Browser's Synthetic Event for Mouse events
   */
  const handleDirectorClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDirectorModal(true);
  };

  /**
   * Stops event's propagation to prevent bubbling,
   * Show movie details drawer on click,
   * @param event React's Browser's Synthetic Event for Mouse events
   */
  const handleViewClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDisplayDetails(true);
  };

  return (
    <Col xs={24}>
      <Row>
        <CardStyled onClick={(event) => handleViewClick(event)}>
          <Col>
            <img
              src="https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg"
              alt="movie_image"
            />
          </Col>
          <Col>
            <div>
              <Row>
                <span className="title">Interstellar</span>
              </Row>
              <Row>
                <span className="category_title">Space Movie</span>
              </Row>
              <Row onClick={(event) => handleDirectorClick(event)}>
                <span className="director_title" id="director_title">
                  Christopher Nolan
                </span>
              </Row>
            </div>
          </Col>
        </CardStyled>
      </Row>
    </Col>
  );
};

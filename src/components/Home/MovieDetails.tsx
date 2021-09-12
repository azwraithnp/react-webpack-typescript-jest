import { Button, Col, Drawer, Row } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react';
import { MovieCard } from './MovieCard';
import { DrawerCard } from './styles/drawer-card.styled';

/**
 * @interface Props
 * @prop {boolean} Props.showDisplayDetails - Value to denote whether movie details drawer is shown or hidden
 * @prop {void} Props.setShowDisplayDetails - Show or hide the display movie details drawer
 * @prop {void} Props.setShowDirectorDetails - Show or hide the director details modal
 */
interface Props {
  showDisplayDetails: boolean;
  setShowDisplayDetails: (show: boolean) => void;
  setShowDirectorDetails: (show: boolean) => void;
}

export const MovieDetails: React.FC<Props> = ({
  showDisplayDetails,
  setShowDisplayDetails,
  setShowDirectorDetails,
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
    setShowDirectorDetails(true);
  };

  return (
    <Drawer
      visible={showDisplayDetails}
      onClose={() => setShowDisplayDetails(false)}
      destroyOnClose={true}
      width={breakpoint.lg ? '50%' : '100%'}
    >
      <div onClick={() => setShowDisplayDetails(false)}>
        <DrawerCard>
          <Col xs={12}>
            <img
              src="https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg"
              alt="movie_image"
            />
          </Col>
          <Col xs={12}>
            <div>
              <Row>
                <span className="title">Interstellar</span>
              </Row>
              <Row>
                <span className="category_title">Space Movie</span>
              </Row>
              <Row>
                <span
                  className="director_title"
                  id="director_title"
                  onClick={(event) => showDirectorModal(event)}
                >
                  Christopher Nolan
                </span>
              </Row>
            </div>
          </Col>
        </DrawerCard>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={24}>
            <p>
              Interstellar is a 2014 epic science fiction drama film co-written,
              directed and produced by Christopher Nolan. It stars Matthew
              McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen
              Burstyn, and Michael Caine. Set in a dystopian future where
              humanity is struggling to survive, the film follows a group of
              astronauts who travel through a wormhole near Saturn in search of
              a new home for humanity. Brothers Christopher and Jonathan Nolan
              wrote the screenplay, which had its origins in a script Jonathan
              developed in 2007.
            </p>
          </Col>
        </Row>
        <Row>
          <Button
            size="large"
            style={{
              backgroundColor: '#1B54A8',
              color: 'white',
              height: '50px',
              padding: '0px 27px 5px 27px',
              borderRadius: '8px',
              textTransform: 'uppercase',
            }}
            onClick={(event) => addToFav(event)}
          >
            Add to Favorite
          </Button>
        </Row>
        <Row gutter={[0, 18]} style={{ marginTop: '20px' }}>
          <MovieCard
            setDirectorModal={setShowDirectorDetails}
            setDisplayDetails={setShowDisplayDetails}
          />
          <MovieCard
            setDirectorModal={setShowDirectorDetails}
            setDisplayDetails={setShowDisplayDetails}
          />
          <MovieCard
            setDirectorModal={setShowDirectorDetails}
            setDisplayDetails={setShowDisplayDetails}
          />
          <MovieCard
            setDirectorModal={setShowDirectorDetails}
            setDisplayDetails={setShowDisplayDetails}
          />
        </Row>
      </div>
    </Drawer>
  );
};

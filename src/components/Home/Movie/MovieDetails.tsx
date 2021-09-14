import { Col, Drawer, message, Row } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Director from 'src/interfaces/director';
import Movie from 'src/interfaces/movie';
import { API_URL } from '../../../../utils/urls';
import { MovieCard } from './MovieCard';
import { ButtonStyled } from '../styles/button.styled';
import { DrawerCard } from '../styles/drawer-card.styled';

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
 * Update the favorites boolean status for this movie
 * @param {boolean} val boolean value to update the favorites status in the movie
 * @param {number} id ID of the movie which has its favorites status to be update
 * @returns Response from calling the update favorites status API for movies
 */
const changeFavStatus = async ({
  val,
  id,
}: {
  val: boolean;
  id: number | undefined;
}) => {
  const favResponse = await fetch(`${API_URL}/movies/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ fav: val }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return favResponse.json();
};

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
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(changeFavStatus, {
    onSuccess: (data) => {
      console.log(data);
      setShowDisplayDetails(data);
      message.success(
        data.fav ? 'Added to Favorites' : 'Removed from Favorites',
      );
    },
    onError: () => {
      message.error('There was an error');
    },
    onSettled: () => {
      queryClient.invalidateQueries('movies');
    },
  });

  //custom hook provided by AntD to find out window's breakpoints
  const breakpoint = useBreakpoint();

  /**
   * Stops event's propagation to prevent bubbling,
   * Add a movie to favorite
   * @param event React's Browser's Synthetic Event for Mouse events
   */
  const addToFav = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    mutate({ val: !showDisplayDetails?.fav, id: showDisplayDetails?.id });
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
          <ButtonStyled
            size="large"
            onClick={(event) => addToFav(event)}
            loading={isLoading}
          >
            {showDisplayDetails?.fav
              ? 'Added To Favourites'
              : 'Add to Favorite'}
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

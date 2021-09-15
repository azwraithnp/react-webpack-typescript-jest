import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { API_URL } from 'utils/urls';
import { MovieDetails } from '../MovieDetails';
import { mockMovie } from '../__mocks__/mockMovie';

const queryClient = new QueryClient();

const mockFn = jest.fn((show) => {
  show;
});

const MockComponent = () => (
  <QueryClientProvider client={queryClient}>
    <MovieDetails
      showDisplayDetails={mockMovie}
      setShowDisplayDetails={mockFn}
      setShowDirectorDetails={mockFn}
      movieList={[]}
    />
  </QueryClientProvider>
);

describe('Movie details drawer test', () => {
  it('should contain Button with Added To Favourites when fav data item is true', () => {
    render(<MockComponent />);
    const buttonElement = screen.getByText('Added To Favourites');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should contain the provided movie title', async () => {
    render(<MockComponent />);
    const paraElement = screen.getByTitle('movie_title');
    expect(paraElement).toBeVisible();
    expect(paraElement).toHaveTextContent(mockMovie.title);
  });

  it('should contain the proper cover image url', () => {
    render(<MockComponent />);
    const imgElement = screen.getByAltText('movie_image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', API_URL + mockMovie.cover.url);
  });

  it('should contain the provided movie category title', () => {
    render(<MockComponent />);
    const titleElement = screen.getByTitle('category_title');
    expect(titleElement).toBeVisible();
    expect(titleElement).toHaveTextContent(mockMovie.category_name);
  });

  it('should contain the provided movie director title', () => {
    render(<MockComponent />);
    const titleElement = screen.getByTitle('director_title');
    expect(titleElement).toBeVisible();
    expect(titleElement).toHaveTextContent(mockMovie.director.name);
  });
});

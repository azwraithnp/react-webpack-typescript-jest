import { render, screen } from '@testing-library/react';
import React from 'react';
import { API_URL } from 'utils/urls';
import { MovieCard } from '../MovieCard';
import { mockMovie } from '../__mocks__/mockMovie';

const mockFn = jest.fn((show) => {
  show;
});

describe('Movie list card test', () => {
  it('should contain the provided movie title', () => {
    render(
      <MovieCard
        setDirectorModal={mockFn}
        setDisplayDetails={mockFn}
        movie={mockMovie}
      />,
    );
    const paraElement = screen.getByTitle('movie_title');
    expect(paraElement).toHaveTextContent(mockMovie.title);
  });

  it('should contain the proper cover image url', () => {
    render(
      <MovieCard
        setDirectorModal={mockFn}
        setDisplayDetails={mockFn}
        movie={mockMovie}
      />,
    );
    const imgElement = screen.getByAltText('movie_image');
    expect(imgElement).toHaveAttribute('src', API_URL + mockMovie.cover.url);
  });

  it('should contain the provided movie category title', () => {
    render(
      <MovieCard
        setDirectorModal={mockFn}
        setDisplayDetails={mockFn}
        movie={mockMovie}
      />,
    );
    const titleElement = screen.getByTitle('category_title');
    expect(titleElement).toHaveTextContent(mockMovie.category_name);
  });

  it('should contain the provided movie director title', () => {
    render(
      <MovieCard
        setDirectorModal={mockFn}
        setDisplayDetails={mockFn}
        movie={mockMovie}
      />,
    );
    const titleElement = screen.getByTitle('director_title');
    expect(titleElement).toHaveTextContent(mockMovie.director.name);
  });
});

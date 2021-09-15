import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { API_URL } from 'utils/urls';
import { DirectorDetails } from '../DirectorDetails';
import { mockDirector } from '../__mocks__/mockDirector';

const queryClient = new QueryClient();

const mockFn = jest.fn((show) => {
  show;
});

const MockComponent = () => (
  <QueryClientProvider client={queryClient}>
    <DirectorDetails
      setShowDirectorDetails={mockFn}
      showDirectorDetails={mockDirector}
    />
  </QueryClientProvider>
);

describe('Director details modal test', () => {
  it('should contain the provided director description', () => {
    render(<MockComponent />);
    const paraElement = screen.getByTestId('director_paragraph');
    expect(paraElement).toBeVisible();
    expect(paraElement).toHaveTextContent(mockDirector.description);
  });

  it('should contain the proper cover image url', () => {
    render(<MockComponent />);
    const imgElement = screen.getByAltText('director_image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', API_URL + mockDirector.cover.url);
  });

  it('should contain the provided director name', () => {
    render(<MockComponent />);
    const titleElement = screen.getByTitle('director_title');
    expect(titleElement).toBeVisible();
    expect(titleElement).toHaveTextContent(mockDirector.name);
  });
});

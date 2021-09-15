import Movie from 'src/interfaces/movie';

export const mockMovie: Movie = {
  id: 0,
  title: 'Movie title',
  description: 'Movie description',
  category_name: 'Space movie',
  created_at: 'null',
  updated_at: 'null',
  fav: true,
  director: {
    name: 'Director name',
    cover: {
      created_at: 'null',
      updated_at: 'null',
      caption: 'caption',
      url: 'url',
      name: 'name',
    },
    description: 'Director description',
    id: 0,
    created_at: 'null',
    updated_at: 'null',
  },
  cover: {
    created_at: 'null',
    updated_at: 'null',
    caption: 'caption',
    url: 'url',
    name: 'name',
  },
};

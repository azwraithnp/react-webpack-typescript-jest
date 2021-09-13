import Cover from './cover';
import Director from './director';

/**
 * @interface Movie
 * @prop {number} Movie.id Unique ID integer for Movie
 * @prop {string} Movie.title Movie's title
 * @prop {string} Movie.category_name Movie's category/genre name
 * @prop {string} Movie.description Movie long text description
 * @prop {string} Movie.created_at Date when the Movie object was created in Date String
 * @prop {string} Movie.updated_at Date when the Movie object was updated in Date String
 * @prop {Cover} Movie.cover Cover image object of the Movie
 * @prop {Director} Movie.director Director object of the Movie
 */
interface Movie {
  id: number;
  title: string;
  category_name: string;
  description: string;
  created_at: string;
  updated_at: string;
  cover: Cover;
  director: Director;
}

export default Movie;

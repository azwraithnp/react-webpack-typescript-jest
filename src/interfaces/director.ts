import Cover from './cover';

/**
 * @interface Director
 * @prop {number} Director.id Unique ID integer for Director
 * @prop {string} Director.name Director's name
 * @prop {string} Director.description Description long text for the Director
 * @prop {string} Director.created_at Date when the Director object was created in Date String
 * @prop {string} Director.updated_at Date when the Director object was updated in Date String
 * @prop {Cover} Director.cover Cover image object of the Director
 */
interface Director {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  cover: Cover;
}

export default Director;

/**
 * @interface Cover
 * @prop {string} Cover.created_at Date when the cover image was created in Date String
 * @prop {string} Cover.updated_at Date when the cover image was updated in Date String
 * @prop {string} Cover.caption Caption text for the cover image, if any
 * @prop {string} Cover.url URL string for the cover image's location
 * @prop {string} Cover.name Name string for the cover image, if any
 */
interface Cover {
  created_at: string;
  updated_at: string;
  caption: string;
  url: string;
  name: string;
}

export default Cover;

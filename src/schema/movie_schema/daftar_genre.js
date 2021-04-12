export const daftar_genre = `
  CREATE TYPE GENRE_ENUM AS ENUM ('Drakor', 'Action', 'Adventure', 'Anime', 'Animation',
                                  'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'History',
                                  'Mystery', 'Horror', 'Kids', 'Thriller', 'Science Fiction',
  'War');
  CREATE TABLE IF NOT EXISTS daftar_genre (
  id_genre serial PRIMARY KEY NOT NULL,
  genre GENRE_ENUM NOT NULL
  );
`;

export const genre_film = `
  CREATE TABLE IF NOT EXISTS genre_film (
    id_genre_film serial PRIMARY KEY NOT NULL,
    id_film INT NOT NULL,
    id_genre INT NOT NULL,
    id_series INT NOT NULL,
    FOREIGN key (id_film)
      REFERENCES daftar_film (id_film),
    FOREIGN key (id_genre)
      REFERENCES daftar_genre (id_genre),
    FOREIGN key (id_series)
      REFERENCES daftar_film_berseri (id_series)
  );
`;

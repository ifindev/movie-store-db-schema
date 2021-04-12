export const subtitle_film = `
  CREATE TABLE IF NOT EXISTS subtitle_film (
    id_subtitle serial PRIMARY KEY NOT NULL,
    id_film INT NOT NULL,
    id_bahasa_subtitle INT NOT NULL,
    link_subtitle VARCHAR (255) NOT NULL,
    FOREIGN key (id_film)
      REFERENCES daftar_film (id_film),
    FOREIGN key (id_bahasa_subtitle)
      REFERENCES bahasa_subtitle (id_bahasa_subtitle)
  );
`;

export const daftar_film_berseri = `
  CREATE TABLE IF NOT EXISTS daftar_film_berseri (
    id_series serial PRIMARY KEY NOT NULL,
    id_film INT NOT NULL,
    nama_seri VARCHAR (100) NOT NULL,
    season INT NOT NULL,
    episode INT NOT NULL,
    FOREIGN key (id_film)
      REFERENCES daftar_film (id_film)
  );
`;

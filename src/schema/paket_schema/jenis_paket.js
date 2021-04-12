export const jenis_paket = `
  CREATE TYPE JENIS_PAKET_ENUM AS ENUM ('beli_film_aja', 'membership');
  CREATE TABLE IF NOT EXISTS jenis_paket (
    id_jenis_paket serial PRIMARY KEY NOT NULL,
    nama_paket JENIS_PAKET_ENUM NOT NULL
  );
`;

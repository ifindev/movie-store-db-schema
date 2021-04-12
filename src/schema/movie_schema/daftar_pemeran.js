export const daftar_pemeran = `
  CREATE TYPE GENDER_ENUM AS ENUM ('male', 'female');
  CREATE TABLE IF NOT EXISTS daftar_pemeran (
    id_pemeran serial PRIMARY KEY NOT NULL,
    nama_pemeran VARCHAR (100) NOT NULL,
    gender GENDER_ENUM NOT NULL
  );
`;

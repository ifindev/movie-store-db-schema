export const jenis_layar = `
  CREATE TYPE JENIS_LAYAR_ENUM AS ENUM ('Phone', 'Tablet', 'Computer', 'TV');
  CREATE TABLE IF NOT EXISTS jenis_layar (
    id_jenis_layar serial PRIMARY KEY NOT NULL,
    jenis_layar JENIS_LAYAR_ENUM NOT NULL
  );
`;

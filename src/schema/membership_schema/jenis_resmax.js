export const jenis_resmax = `
  CREATE TYPE JENIS_RESMAX_ENUM AS ENUM ('480p', '720p', '1080p', '4K+');
  CREATE TABLE IF NOT EXISTS jenis_resolusi_maksimum (
    id_jenis_resolusi_maksimum serial PRIMARY KEY NOT NULL,
    jenis_resolusi_maksimum JENIS_RESMAX_ENUM NOT NULL
  );
`;

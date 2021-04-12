export const metode_pembayaran = `
  CREATE TYPE METODE_PEMBAYARAN_ENUM AS ENUM ('transfer_bank', 'kartu_kredit', 'e_money');
  CREATE TABLE IF NOT EXISTS metode_pembayaran (
    id_metode_pembayaran serial PRIMARY KEY NOT NULL,
    metode_pembayaran METODE_PEMBAYARAN_ENUM NOT NULL,
    keterangan_metode_pembayaran VARCHAR (255)
  );
`;

export const jenis_transaksi = `
  CREATE TYPE JENIS_TRANSAKSI_ENUM AS ENUM (
    'beli_film', 'bayar_membership', 'ganti_membership',
    'pembatalan_membership', 'memebership_diakhiri');
  CREATE TABLE IF NOT EXISTS jenis_transaksi (
    kode_jenis_transaksi serial PRIMARY KEY NOT NULL,
    jenis_transaksi JENIS_TRANSAKSI_ENUM NOT NULL,
    keterangan_transaksi VARCHAR (255)
  );
`;

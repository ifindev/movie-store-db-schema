-- status transaksi
CREATE TYPE STATUS_TRANSAKSI_ENUM AS ENUM ('sukses', 'pending', 'gagal', 'dibatalkan');
CREATE TABLE IF NOT EXISTS status_transaksi (
	id_status_transaksi serial PRIMARY KEY NOT NULL,
	status_transaksi STATUS_TRANSAKSI_ENUM NOT NULL,
	keterangan_status_transaksi VARCHAR (255)
);
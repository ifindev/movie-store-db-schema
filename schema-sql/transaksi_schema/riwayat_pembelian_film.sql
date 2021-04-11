-- riwayat pembelian film
CREATE TABLE IF NOT EXISTS riwayat_pembelian_film (
	id_pembelian_film serial PRIMARY KEY NOT NULL,
	id_transaksi_bayar INT NOT NULL,
	id_film INT NOT NULL,
	harga_film DECIMAL(10,2) NOT NULL,
	diskon_film DECIMAL(10,2) NOT NULL,
	waktu_pembelian_dibuat TIMESTAMPTZ NOT NULL,
	waktu_pembelian_diperbarui TIMESTAMPTZ NOT NULL,
	FOREIGN key (id_transaksi_bayar)
		REFERENCES riwayat_transaksi_bayar (id_transaksi_bayar),
	FOREIGN key (id_film)
		REFERENCES daftar_film (id_film)
);
-- riwayat transaksi non-bayar
CREATE TABLE IF NOT EXISTS riwayat_transaksi_non_bayar (
	id_transaksi_non_bayar serial PRIMARY KEY NOT NULL,
	id_user INT NOT NULL,
	kode_jenis_transaksi INT NOT NULL,
	id_status_transaksi INT NOT NULL,
	waktu_transaksi TIMESTAMPTZ NOT NULL,
	tanggal_transaksi_dibuat TIMESTAMPTZ NOT NULL,
	tanggal_transaksi_diperbarui TIMESTAMPTZ NOT NULL,
	FOREIGN key (id_user)
		REFERENCES data_user (id_user),
	FOREIGN key (kode_jenis_transaksi)
		REFERENCES jenis_transaksi (kode_jenis_transaksi),
	FOREIGN key (id_status_transaksi)
		REFERENCES status_transaksi (id_status_transaksi)
);

-- riwayat transaksi bayar
CREATE TABLE IF NOT EXISTS riwayat_transaksi_bayar (
	id_transaksi_bayar serial PRIMARY KEY NOT NULL,
	id_user INT NOT NULL,
	kode_jenis_transaksi INT NOT NULL,
	jumlah_bayar DECIMAL(10,2) NOT NULL,
	service_charge_fee DECIMAL (10, 2) NOT NULL,
	pajak_ppn DECIMAL(10,2) NOT NULL,
	total_diskon DECIMAL(10,2) NOT NULL,
	total_tagihan DECIMAL(10,2) NOT NULL,
	id_metode_pembayaran INT NOT NULL,
	id_payment_gateway INT NOT NULL,
	id_status_transaksi INT NOT NULL,
	waktu_transaksi TIMESTAMPTZ NOT NULL,
	tanggal_transaksi_dibuat TIMESTAMPTZ NOT NULL,
	tanggal_transaksi_diperbarui TIMESTAMPTZ NOT NULL,
	FOREIGN key (id_user)
		REFERENCES data_user (id_user),
	FOREIGN key (kode_jenis_transaksi)
		REFERENCES jenis_transaksi (kode_jenis_transaksi),
	FOREIGN key (id_metode_pembayaran)
		REFERENCES metode_pembayaran (id_metode_pembayaran),
	FOREIGN key (id_payment_gateway)
		REFERENCES payment_gateway (id_payment_gateway),
	FOREIGN key (id_status_transaksi)
		REFERENCES status_transaksi (id_status_transaksi)
);

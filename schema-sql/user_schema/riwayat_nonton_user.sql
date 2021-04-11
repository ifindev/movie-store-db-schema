-- riwayat nonton user
CREATE TABLE IF NOT EXISTS riwayat_nonton_user (
	id_riwayat_nonton serial PRIMARY KEY NOT NULL,
	id_user INT NOT NULL,
	id_film INT NOT NULL,
	waktu_data_dibuat TIMESTAMPTZ NOT NULL,
	waktu_data_diperbarui TIMESTAMPTZ NOT NULL,
	FOREIGN key (id_user)
		REFERENCES data_user (id_user),
	FOREIGN key (id_film)
		REFERENCES daftar_film (id_film)
);
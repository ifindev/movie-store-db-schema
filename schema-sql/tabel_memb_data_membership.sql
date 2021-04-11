-- data membership
CREATE TABLE IF NOT EXISTS data_membership (
	id_membership serial PRIMARY KEY NOT NULL,
	id_user INT NOT NULL,
	id_jenis_membership INT NOT NULL,
	id_status_membership INT NOT NULL,
	waktu_data_dibuat TIMESTAMPTZ NOT NULL,
	waktu_data_diperbarui TIMESTAMPTZ NOT NULL,
	FOREIGN key (id_user)
		REFERENCES data_user (id_user),
	FOREIGN key (id_jenis_membership)
		REFERENCES jenis_membership (id_jenis_membership),
	FOREIGN key (id_status_membership)
		REFERENCES status_membership (id_status_membership)
);

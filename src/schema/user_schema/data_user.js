export const create_data_user = `
  CREATE TABLE IF NOT EXISTS data_user (
	id_user serial PRIMARY KEY,
	nama_lengkap VARCHAR ( 100 ) NOT NULL,
	email VARCHAR ( 100 ) UNIQUE NOT NULL,
	hashed_password VARCHAR ( 64 ) NOT NULL,
	tanggal_terdaftar TIMESTAMPTZ NOT NULL,
	tanggal_data_dibuat TIMESTAMPTZ NOT NULL,
	tanggal_data_diperbarui TIMESTAMPTZ NOT NULL
  );
`;

export const pilihan_paket_user = `
  CREATE TABLE IF NOT EXISTS pilihan_paket_user (
    id_pilihan_paket serial PRIMARY KEY NOT NULL,
    id_user INT NOT NULL,
    id_jenis_paket int NOT NULL,
    tanggal_data_dibuat TIMESTAMPTZ NOT NULL,
    tanggal_data_diperbarui TIMESTAMPTZ NOT NULL,
    FOREIGN key (id_user)
      REFERENCES data_user (id_user),
    FOREIGN key (id_jenis_paket)
      REFERENCES jenis_paket (id_jenis_paket)
  );
`;

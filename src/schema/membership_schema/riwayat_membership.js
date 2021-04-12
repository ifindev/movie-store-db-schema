export const riwayat_membership = `
  CREATE TABLE IF NOT EXISTS riwayat_membership (
    id_riwayat_membership serial PRIMARY KEY NOT NULL,
    id_membership INT NOT NULL,
    id_user INT NOT NULL,
    tanggal_bayar_membership TIMESTAMPTZ NOT NULL,
    tanggal_habis_membership TIMESTAMPTZ NOT NULL,
    waktu_data_dibuat TIMESTAMPTZ NOT NULL,
    waktu_data_diperbarui TIMESTAMPTZ NOT NULL,
    FOREIGN key (id_membership)
      REFERENCES data_membership (id_membership),
    FOREIGN key (id_user)
      REFERENCES data_user (id_user)
  );
`;

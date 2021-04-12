export const resolusi_maks_user = `
  CREATE TABLE IF NOT EXISTS resolusi_maksimum_user (
    id_resolusi_maksimum serial PRIMARY KEY NOT NULL,
    id_membership INT NOT NULL,
    id_jenis_resolusi_maksimum INT NOT NULL,
    waktu_data_dibuat TIMESTAMPTZ NOT NULL,
    waktu_data_diperbarui TIMESTAMPTZ NOT NULL,
    FOREIGN key (id_membership)
      REFERENCES data_membership (id_membership),
    FOREIGN key (id_jenis_resolusi_maksimum)
      REFERENCES jenis_resolusi_maksimum (id_jenis_resolusi_maksimum)
  );
`;

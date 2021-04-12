export const layar_nonton_user = `
  CREATE TABLE IF NOT EXISTS layar_nonton_user (
    id_layar_nonton serial PRIMARY KEY NOT NULL,
    id_membership INT NOT NULL,
    id_jenis_layar INT NOT NULL,
    waktu_data_dibuat TIMESTAMPTZ NOT NULL,
    waktu_data_diperbarui TIMESTAMPTZ NOT NULL,
    FOREIGN key (id_membership)
      REFERENCES data_membership (id_membership),
    FOREIGN key (id_jenis_layar)
      REFERENCES jenis_layar (id_jenis_layar)
  );
`;

export const riwayat_login_user = `
  CREATE TABLE IF NOT EXISTS riwayat_login_user (
    id_riwayat_login serial PRIMARY KEY NOT NULL,
    id_user INT NOT NULL,
    jenis_perangkat VARCHAR (100) NOT NULL,
    sistem_operasi VARCHAR (50) NOT NULL,
    tipe_browser VARCHAR (100) NOT NULL,
    latitude_lokasi FLOAT NOT NULL,
    longitude_lokasi FLOAT NOT NULL,
    waktu_login TIMESTAMPTZ NOT NULL,
    FOREIGN key (id_user)
      REFERENCES data_user (id_user)
  );
`;

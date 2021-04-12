export const jenis_membership = `
  CREATE TYPE JENIS_MEMBERSHIP_ENUM AS ENUM ('Mobile', 'Mobile+', 'Standard', 'Premium');
  CREATE TABLE IF NOT EXISTS jenis_membership (
    id_jenis_membership serial PRIMARY KEY NOT NULL,
    nama_membership JENIS_MEMBERSHIP_ENUM NOT NULL,
    harga_langganan_bulanan DECIMAL(10,2) NOT NULL
  );
`;

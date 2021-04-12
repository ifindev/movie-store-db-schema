export const status_membership = `
  CREATE TYPE STATUS_MEMBERSHIP_ENUM AS ENUM ('aktif', 'nonaktif');
  CREATE TABLE IF NOT EXISTS status_membership (
    id_status_membership serial PRIMARY KEY NOT NULL,
    status_membership STATUS_MEMBERSHIP_ENUM NOT NULL
  );
`;

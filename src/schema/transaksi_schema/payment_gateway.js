export const payment_gateway = `
  CREATE TYPE PAYMENT_GATEWAY_ENUM AS ENUM ('Mandiri', 'BCA', 'BNI', 'Stripe', 'OVO', 'Gopay');
  CREATE TABLE IF NOT EXISTS payment_gateway (
    id_payment_gateway serial PRIMARY KEY NOT NULL,
    payment_gateway PAYMENT_GATEWAY_ENUM NOT NULL,
    keterangan_payment_gateway VARCHAR (255)
  );
`;

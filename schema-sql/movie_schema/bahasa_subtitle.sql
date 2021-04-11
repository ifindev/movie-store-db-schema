-- bahasa subtitle
CREATE TYPE BAHASA_SUBTITLE_ENUM AS ENUM ('ID', 'EN');
CREATE TABLE IF NOT EXISTS bahasa_subtitle (
	id_bahasa_subtitle serial PRIMARY KEY NOT NULL,
	bahasa_subtitle BAHASA_SUBTITLE_ENUM NOT NULL
);
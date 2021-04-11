-- daftar film
CREATE TABLE IF NOT EXISTS daftar_film (
	id_film serial PRIMARY KEY NOT NULL,
	judul VARCHAR(100) NOT NULL,
	tahun_rilis DATE NOT NULL,
	rating_film DECIMAL (2,2),
	link_thumbnail VARCHAR (255),
	link_film VARCHAR (255),
	lokasi_shooting VARCHAR (50),
	bahasa VARCHAR (50)
);
# Movie Store Website Database Schema Design

## Penjelasan Repository

Pada respository ini, disimpan database schema untuk Movie Store Website yang sedang didesain pada dengan Figma pada [Wireframe berikut](https://www.figma.com/file/bTfNSWux0iKoR9TjtgqUl8/Movie-Store-Website?node-id=0%3A1). Berikut adalah penjelasan direktori yang ada di repository ini:

1. `schema-design`: direktori ini berisi file pdf brainstorming schema dan desain final database schema dalam bentuk ER Diagram.
2. `schema-sql`: implementasi schema dari ERD dalam bentuk script SQL untuk PostgreSQL.
3. `src`: direktori ini berisi modul-modul dan program javascript berbasis Node.js yang digunakan untuk melakukan migrasi tabel sesuai schema ke PostgreSQL database.

## Cara Penggunaan

Untuk melakukan migrasi tabel secara otomatis, maka lakukan hal-hal berikut:

- setup terlebih dahulu server PostgreSQL lokal dan databasenya sesuai dengan tatacara yang dijelaskan pada bagian akhir README `schema-sql`
- jalankan program `app.js` dengan perintah `node app.js` di direktori.

Untuk melakukan migrasi tabel secara manual, silahkan copy-paste script SQL di terminal `psql` atau di Query Tool pgAdmin sesuai dengan urutan yang telah diberikan di README direktori `schema-sql`.

## Copyright

Muhammad Arifin &copy; 2021

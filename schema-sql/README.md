# Movie Store SQL Schemas

## Keterangan Direktori

Pada direktori ini, schema database untuk Movie Store Website yang telah di desain pada dokumen di direktori `schema-designs` diimplementasikan dalam bentuk query SQL, spesifiknya query untuk `PostgreSQL`. Untuk melihat desain kasar / wirefram dari tampilan front-end Movie Store Website ini, silahkan buka link Figma berikut: [Wireframe Movie Store Website](https://www.figma.com/file/bTfNSWux0iKoR9TjtgqUl8/Movie-Store-Website?node-id=0%3A1)

## Pembagian Struktur Schema

Untuk mempermudah pembagian jenis schema, maka tabel-tabel yang ada dipisahkan dalam beberapa sub-direktori sesuai skema dasar masing-masing. Secara keseluruhan ada lima macam schemas yang telah di desain untuk Movie Store Website yang sedang dibangun.

1. `user data schema`: berisi tabel-tabel yang berkaitan dengan informasi user.
2. `paket_schema`: berisi tabel-tabel yang berkaitan dengan fitur paket yang ada di Movie Store Website yang sedang dibangun.
3. `membership schema`: berisi tabel-tabel yang berkaitan dengan paket membership yang ada di Movie Store Website.
4. `transaction schema`: berisi tabel-tabel yang berkaitan dengan transaksi-transaksi berbayar maupun non-bayar yang dilakukan oleh seluruh user di Movie Store Website.
5. `movie schema`: berisi tabel-tabel yang berkaitan dengan data-data film yang tersedia di Movie Store Website.

## Catatan Ralat

CATATAN sebelum lanjut: Terdapat revisi schema antara tabel `data_membership` di dokumen ERD dan tabel `data_membership` yang dibuat. Karena adanya limitasi shape untuk free member dari software `lucidchart` yang digunakan, maka sulit untuk mengubah diagram-diagram yang sudah dibuat. Oleh karena itu, struktur tabel yang benar untuk `data_membership` adalah struktur tabel yang ada di script SQL.

## Urutan Inisialisasi Tabel

Karena adanya hubungan antar tabel, maka inisialisasi pembuatan tabel haruslah dilakukan secara bertahap agar Foreign Key (FK) pada satu tabel sudah terdefinisi dulu sebagai Primary Key (PK) di tabel asalnya. Berikut adalah urutan inisialisasi pembuatan tabel-tabel yang ada agar tidak muncul error saat pembuatan tabel di awal.

- tabel data_user
- riwayat_login_user
- riwayat_logout_user
- jenis_paket
- pilihan_paket_user
- jenis_layar
- jenis_resolusi_maksimum
- jenis_membership
- status_membership
- data_membership
- riwayat_membership
- layar_maksimum_user
- resolusi_maksimum_user
- metode_pembayaran
- payment_gateway
- jenis_transaksi
- status_transaksi
- riwayat_transaksi_bayar
- riwayat_transaksi_nonbayar
- daftar_film
- riwayat_pembelian_film
- riwayat_nonton_user
- bahasa_subtitle
- subtitle_film
- daftar_pemeran
- daftar_film_pemeran
- daftar_genre
- genre_film
- daftar_film_berseri

## Catatan Tambahan

Jika ingin mencoba langsung membuat masing-masing tabel, maka langkah-langkah yang harus dijalankan adalah:

1. Install PostgreSQL dan pgAdmin di komputer/laptop anda. Silahkan ikuti [tutorial ini](https://www.postgresqltutorial.com/postgresql-getting-started/).
2. Setting koneksi pgAdmin terhadap server PostgreSQL lokal. [Tutorialnya](https://www.postgresqltutorial.com/connect-to-postgresql-database/)
3. Buat database baru dengan nama `movie-store-db` atau sesuka anda melalui pgAdmin atau melalui terminal psql.
4. Buat tabel sesuai dengan urutan di bagian sebelumnya.
5. Tabel jadi.

## Copyright

Muhammad Arifin &copy; 2021

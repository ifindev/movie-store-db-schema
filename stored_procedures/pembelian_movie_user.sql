-- Query untuk memperoleh data user dan film yang sudah dibelinya
SELECT
	data_user.id_user,
	data_user.nama_lengkap,
	daftar_film.judul,
	riwayat_pembelian_film.waktu_pembelian_dibuat
FROM
	data_user
JOIN riwayat_transaksi_bayar
	ON data_user.id_user = riwayat_transaksi_bayar.id_user
JOIN riwayat_pembelian_film
	ON riwayat_pembelian_film.id_transaksi_bayar = riwayat_transaksi_bayar.id_transaksi_bayar
JOIN daftar_film
	ON riwayat_pembelian_film.id_film = daftar_film.id_film

SELECT
	data_user.id_user,
	data_user.nama_lengkap,
	jenis_membership.nama_membership
FROM
	data_user
JOIN data_membership
	ON data_membership.id_user = data_user.id_user
JOIN jenis_membership
	ON data_membership.id_jenis_membership = jenis_membership.id_jenis_membership
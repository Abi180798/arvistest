-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 05 Sep 2021 pada 23.19
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id17538853_arvisdatabase`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `url_foto` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`id`, `nama`, `url_foto`) VALUES
(1, 'Makanan & Minuman', 'https://cf.shopee.co.id/file/b912e9726dc8cb5e9447a7738a68479c_tn'),
(2, 'Elektronik', 'https://cf.shopee.co.id/file/02577b74fe168f6dabd57eab9c2f8f21_tn'),
(3, 'Pakaian Pria', 'https://cf.shopee.co.id/file/04dba508f1ad19629518defb94999ef9_tn'),
(4, 'Pakaian Wanita', 'https://cf.shopee.co.id/file/23918f8dacba18c938fe42d13aa31b57_tn'),
(5, 'Aksesoris', 'https://cf.shopee.co.id/file/1f18bdfe73df39c66e7326b0a3e08e87_tn'),
(6, 'Otomotif', 'https://cf.shopee.co.id/file/27838b968afb76ca59dd8e8f57ece91f_tn');

-- --------------------------------------------------------

--
-- Struktur dari tabel `keranjang`
--

CREATE TABLE `keranjang` (
  `id` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `jml` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `keranjang`
--

INSERT INTO `keranjang` (`id`, `id_produk`, `id_kategori`, `id_user`, `jml`) VALUES
(1, 1, 1, 1, 2),
(7, 3, 1, 1, 7);

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `nama` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `harga` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `jumlah` int(50) NOT NULL,
  `url_foto` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_kategori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id`, `nama`, `deskripsi`, `harga`, `jumlah`, `url_foto`, `id_kategori`) VALUES
(1, 'Nasi Goreng', 'Lorem Ipsum is', '12000', 15, 'https://cf.shopee.co.id/file/9447aaee26842666b1b4fe6157b0cd0a_tn', 1),
(2, 'Nasi Lemak', 'Lorem Ipsum is', '15000', 19, 'https://cf.shopee.co.id/file/9881cf675eb44143c93b466df4af58a0_tn', 1),
(3, 'Mie Goreng', 'Lorem Ipsum is', '9000', 16, 'https://cf.shopee.co.id/file/365054a83b77f9b43291e3fe48fa40d7_tn', 1),
(4, 'Laptop', 'Lorem Ipsum is', '15000000', 10, 'https://cf.shopee.co.id/file/25ddda79acb44204698364713599cc1b_tn', 2),
(5, 'Handphone', 'Lorem Ipsum is', '2500000', 18, 'https://cf.shopee.co.id/file/7f69712751d828d3419df1eec6006a32_tn', 2),
(6, 'PC', 'Lorem Ipsum is', '20000000', 0, 'https://cf.shopee.co.id/file/3d7ae8ec9ea65e18614f8e2f4e10b590_tn', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Admin', 'admin@gmail.com', '123456'),
(2, 'Habiburrahman', 'habiburrahman180798@gmail.com', 'masuk123');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `keranjang`
--
ALTER TABLE `keranjang`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `keranjang`
--
ALTER TABLE `keranjang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

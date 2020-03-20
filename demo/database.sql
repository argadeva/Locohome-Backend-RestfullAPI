-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2020 at 02:54 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newloco`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Coffee'),
(3, 'Cake');

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE `checkout` (
  `id` int(11) NOT NULL,
  `order_number` varchar(64) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sub_total` int(64) NOT NULL,
  `ppn` int(64) NOT NULL,
  `total` int(64) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `checkout`
--

INSERT INTO `checkout` (`id`, `order_number`, `user_id`, `sub_total`, `ppn`, `total`, `created_at`) VALUES
(1, '1582102037926', 1, 103000, 10300, 113300, '2019-12-31 15:47:17'),
(2, '1582102134647', 1, 285000, 28500, 313500, '2020-02-14 15:48:54'),
(3, '1582102246615', 1, 53000, 5300, 58300, '2020-02-17 15:50:46'),
(4, '1582102309198', 1, 150000, 15000, 165000, '2020-02-18 15:51:49'),
(5, '1582102465904', 1, 285000, 28500, 313500, '2020-02-19 15:54:25'),
(12, '1582118195210', 1, 69000, 6900, 75900, '2020-02-19 20:16:39'),
(13, '1582118318236', 1, 20000, 2000, 22000, '2020-02-19 20:18:42'),
(14, '1582123785002', 1, 120000, 12000, 132000, '2020-02-19 21:49:49'),
(15, '1582124037024', 1, 15000, 1500, 16500, '2020-02-19 21:54:01'),
(16, '1582132237763', 1, 97000, 9700, 106700, '2020-02-20 00:10:42'),
(17, '1582137380180', 1, 69000, 6900, 75900, '2020-02-20 01:36:24'),
(18, '1582172388121', 1, 180000, 18000, 198000, '2020-02-20 11:19:52'),
(19, '1582609907763', 1, 69000, 6900, 75900, '2020-02-25 12:51:51'),
(20, '1582609975804', 1, 69000, 6900, 75900, '2020-02-25 12:53:00'),
(21, '1582609989614', 1, 150000, 15000, 165000, '2020-02-25 12:53:13'),
(22, '1582610198866', 1, 69000, 6900, 75900, '2020-02-25 12:56:40'),
(23, '1582646364138', 1, 129000, 12900, 141900, '2020-02-25 22:59:26'),
(24, '1582660758100', 1, 69000, 6900, 75900, '2020-02-26 02:59:20'),
(25, '1582661180758', 1, 99000, 9900, 108900, '2020-02-26 03:06:23'),
(26, '1582707101302', 1, 400000, 40000, 440000, '2020-02-26 15:51:44'),
(27, '1582707323780', 1, 69000, 6900, 75900, '2020-02-26 15:55:26'),
(28, '1582708651302', 1, 69000, 6900, 75900, '2020-02-26 16:17:33'),
(29, '1582708744300', 1, 60000, 6000, 66000, '2020-02-26 16:19:07'),
(30, '1582708778648', 1, 120000, 12000, 132000, '2020-02-26 16:19:41'),
(31, '1582709608319', 1, 30000, 3000, 33000, '2020-02-26 16:33:31'),
(32, '1582709621479', 1, 60000, 6000, 66000, '2020-02-26 16:33:44'),
(33, '1582710410580', 1, 181000, 18100, 199100, '2020-02-26 16:46:53'),
(34, '1582725324970', 1, 33000, 3300, 36300, '2020-02-26 20:55:28'),
(35, '1582762902440', 1, 40000, 4000, 44000, '2020-02-27 07:21:44'),
(36, '1582772648882', 1, 168000, 16800, 184800, '2020-02-27 10:04:11'),
(37, '1583511063665', 1, 180000, 18000, 198000, '2020-03-06 23:11:05'),
(38, '1584111329193', 1, 213000, 21300, 234300, '2020-03-12 21:55:31'),
(39, '1584111454834', 1, 120000, 12000, 132000, '2020-03-13 21:57:35');

-- --------------------------------------------------------

--
-- Table structure for table `checkout_detail`
--

CREATE TABLE `checkout_detail` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` int(64) NOT NULL,
  `qty` int(64) NOT NULL,
  `total` int(64) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `checkout_detail`
--

INSERT INTO `checkout_detail` (`id`, `order_id`, `product_id`, `price`, `qty`, `total`, `created_at`) VALUES
(1, 1, 4, 60000, 1, 60000, '2020-02-19 15:47:18'),
(2, 1, 7, 33000, 1, 33000, '2020-02-19 15:47:18'),
(3, 1, 10, 10000, 1, 10000, '2020-02-19 15:47:18'),
(4, 2, 2, 60000, 3, 180000, '2020-02-19 15:48:54'),
(5, 2, 5, 30000, 2, 60000, '2020-02-19 15:48:54'),
(6, 2, 9, 15000, 3, 45000, '2020-02-19 15:48:54'),
(7, 3, 6, 28000, 1, 28000, '2020-02-19 15:50:46'),
(8, 3, 10, 10000, 2, 20000, '2020-02-19 15:50:46'),
(9, 3, 8, 5000, 1, 5000, '2020-02-19 15:50:46'),
(10, 4, 5, 30000, 1, 30000, '2020-02-19 15:51:49'),
(11, 4, 4, 60000, 2, 120000, '2020-02-19 15:51:49'),
(12, 5, 9, 15000, 1, 15000, '2020-02-19 15:54:26'),
(13, 5, 7, 33000, 4, 132000, '2020-02-19 15:54:26'),
(19, 5, 1, 69000, 2, 138000, '2020-02-19 20:09:24'),
(21, 12, 1, 69000, 1, 69000, '2020-02-19 20:16:40'),
(22, 13, 8, 5000, 2, 10000, '2020-02-19 20:18:43'),
(23, 13, 10, 10000, 1, 10000, '2020-02-19 20:18:43'),
(24, 14, 4, 60000, 2, 120000, '2020-02-19 21:49:50'),
(25, 15, 11, 15000, 1, 15000, '2020-02-19 21:54:01'),
(26, 16, 1, 69000, 1, 69000, '2020-02-20 00:10:42'),
(27, 16, 6, 28000, 1, 28000, '2020-02-20 00:10:43'),
(28, 17, 1, 69000, 1, 69000, '2020-02-20 01:36:25'),
(29, 18, 4, 60000, 1, 60000, '2020-02-20 11:19:53'),
(30, 18, 2, 60000, 2, 120000, '2020-02-20 11:19:53'),
(31, 19, 1, 69000, 1, 69000, '2020-02-25 12:51:52'),
(32, 20, 1, 69000, 1, 69000, '2020-02-25 12:53:00'),
(33, 21, 5, 30000, 1, 30000, '2020-02-25 12:53:14'),
(34, 21, 4, 60000, 2, 120000, '2020-02-25 12:53:14'),
(35, 22, 1, 69000, 1, 69000, '2020-02-25 12:56:41'),
(36, 23, 1, 69000, 1, 69000, '2020-02-25 22:59:27'),
(37, 23, 2, 60000, 1, 60000, '2020-02-25 22:59:28'),
(38, 24, 1, 69000, 1, 69000, '2020-02-26 02:59:21'),
(39, 25, 1, 69000, 1, 69000, '2020-02-26 03:06:24'),
(40, 25, 5, 30000, 1, 30000, '2020-02-26 03:06:24'),
(41, 26, 4, 60000, 3, 180000, '2020-02-26 15:51:56'),
(42, 26, 6, 28000, 1, 28000, '2020-02-26 15:51:56'),
(43, 26, 2, 60000, 1, 60000, '2020-02-26 15:51:56'),
(44, 26, 5, 30000, 1, 30000, '2020-02-26 15:51:56'),
(45, 26, 1, 69000, 1, 69000, '2020-02-26 15:51:57'),
(46, 26, 7, 33000, 1, 33000, '2020-02-26 15:51:57'),
(47, 27, 1, 69000, 1, 69000, '2020-02-26 15:55:27'),
(48, 28, 1, 69000, 1, 69000, '2020-02-26 16:17:34'),
(49, 29, 2, 60000, 1, 60000, '2020-02-26 16:19:08'),
(50, 30, 4, 60000, 2, 120000, '2020-02-26 16:19:42'),
(51, 31, 5, 30000, 1, 30000, '2020-02-26 16:33:32'),
(52, 32, 4, 60000, 1, 60000, '2020-02-26 16:33:45'),
(53, 33, 10, 10000, 2, 20000, '2020-02-26 16:47:00'),
(54, 33, 7, 33000, 1, 33000, '2020-02-26 16:47:00'),
(55, 33, 5, 30000, 1, 30000, '2020-02-26 16:47:00'),
(56, 33, 8, 5000, 2, 10000, '2020-02-26 16:47:00'),
(57, 33, 6, 28000, 1, 28000, '2020-02-26 16:47:00'),
(58, 33, 4, 60000, 1, 60000, '2020-02-26 16:47:00'),
(59, 34, 7, 33000, 1, 33000, '2020-02-26 20:55:28'),
(60, 35, 10, 10000, 1, 10000, '2020-02-27 07:21:45'),
(61, 35, 9, 15000, 2, 30000, '2020-02-27 07:21:45'),
(62, 36, 1, 69000, 2, 138000, '2020-02-27 10:04:12'),
(63, 36, 5, 30000, 1, 30000, '2020-02-27 10:04:12'),
(64, 37, 2, 60000, 2, 120000, '2020-03-06 23:11:06'),
(65, 37, 4, 60000, 1, 60000, '2020-03-06 23:11:06'),
(66, 38, 4, 60000, 2, 120000, '2020-03-13 21:55:33'),
(67, 38, 7, 33000, 1, 33000, '2020-03-13 21:55:33'),
(68, 38, 2, 60000, 1, 60000, '2020-03-13 21:55:33'),
(69, 39, 2, 60000, 1, 60000, '2020-03-13 21:57:36'),
(70, 39, 4, 60000, 1, 60000, '2020-03-13 21:57:36');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int(128) NOT NULL,
  `stock` int(128) NOT NULL,
  `category_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `stock`, `category_id`, `update_at`, `created_at`, `deleted`) VALUES
(1, 'Wiener Schnitzel', 'Wiener Schnitzel', 'http://18.206.61.46:3000/uploads/file-wiener.png', 69000, 78, 1, '2020-02-19 15:27:21', '2020-02-19 15:27:21', 0),
(2, 'Salmon Truffle Teriyaki', 'Salmon Truffle', 'http://18.206.61.46:3000/uploads/file-salmon.png', 60000, 88, 1, '2020-02-19 15:28:14', '2020-02-19 15:28:14', 0),
(4, 'Chicken Katsu Dabu-dabu', 'Chicken Katsu', 'http://18.206.61.46:3000/uploads/file-chickenkatsu.png', 60000, 81, 1, '2020-02-19 15:32:21', '2020-02-19 15:31:47', 0),
(5, 'Black Forest', 'Black Forest', 'http://18.206.61.46:3000/uploads/file-blackforest.png', 30000, 91, 3, '2020-02-19 15:43:20', '2020-02-19 15:43:20', 0),
(6, 'Choco Rhum', 'Choco Rhum', 'http://18.206.61.46:3000/uploads/file-chocorum.png', 28000, 96, 3, '2020-02-19 15:43:58', '2020-02-19 15:43:58', 0),
(7, 'Red Velvet Latte', 'Red Velvet Latte', 'http://18.206.61.46:3000/uploads/file-redvelvet.png', 33000, 91, 3, '2020-02-19 15:44:43', '2020-02-19 15:44:43', 0),
(8, 'Cappucino', 'Cappucino', 'http://18.206.61.46:3000/uploads/file-cappucino.png', 5000, 94, 2, '2020-02-19 15:45:39', '2020-02-19 15:45:39', 0),
(9, 'Cofee Latte', 'Cofee Latte', 'http://18.206.61.46:3000/uploads/file-cofee-latte.png', 15000, 93, 2, '2020-02-19 15:46:05', '2020-02-19 15:46:05', 0),
(10, 'Espresso', 'Espresso', 'http://18.206.61.46:3000/uploads/file-espresso.png', 10000, 93, 2, '2020-02-19 15:46:39', '2020-02-19 15:46:39', 0);

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `type` enum('in','out') NOT NULL,
  `qty` int(64) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`) VALUES
(1, 'Admin', 'admin@admin.com', '$2a$10$RjQGWYPheWPo0XJaj0RdpebQb28yMiS7PVRkkePswHa2BklsBtwwC', '1#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHRzIjp7ImlkIjoxLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInRva2VuIjpudWxsfSwiaWF0IjoxNTg0MTExMTc0LCJleHAiOjE1ODQ3MTU5NzR9.-Ds7RrEA4SBfHdulFEV1eMRBsgdo-uL9M1KiHi3q6vQ'),
(4, 'kasir', 'kasir@kasir.com', '$2a$10$qBQoNoDpACBHsswMtqkSUuEZL7KhasX.9JdulGKESaO9UKRksuX52', NULL),
(5, 'admin', 'admin', 'admin', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `checkout_detail`
--
ALTER TABLE `checkout_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `checkout`
--
ALTER TABLE `checkout`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `checkout_detail`
--
ALTER TABLE `checkout_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

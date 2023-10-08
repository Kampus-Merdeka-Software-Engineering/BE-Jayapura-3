-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2023 at 02:27 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `byu`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` text NOT NULL,
  `category` enum('daily','sports') NOT NULL,
  `gender` enum('men','women','unisex') NOT NULL,
  `brand` enum('nike','adidas','reebok') NOT NULL,
  `image` varchar(255) NOT NULL,
  `sizes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `category`, `gender`, `brand`, `image`, `sizes`) VALUES
(1, 'Nike Air Max', 120, 'Running Sneaker Shoes', 'sports', 'men', 'nike', 'images/product-1.png', '36,37,38,39,40,41,42,43,44'),
(2, 'Nike Air Max', 230, 'Leather Mens Slipper', 'sports', 'unisex', 'nike', 'images/product-2.png', '36,37,38,39,40,41,42,43'),
(3, 'Nike Air Max', 150, 'Simple Fabric Shoe', 'daily', 'men', 'nike', 'images/product-3.png', '36,37,38,39,40,41,42,43'),
(4, 'Nike Air Max', 170, 'Air Jordan 7 Retro', 'sports', 'men', 'nike', 'images/product-4.png', '36,37,38,39,40,41,42,43'),
(5, 'Nike Air Max', 1300, 'Nike Air Max 270 SE', 'sports', 'men', 'nike', 'images/product-5.png', '36,37,38,39,40,41,42,43'),
(6, 'Adidas Air Max', 200, 'Adidas Sneakers Shoes', 'sports', 'unisex', 'adidas', 'images/product-6.png', '36,37,38,39,40,41,42,43'),
(7, 'Nike Air Max', 100, 'Nike Basketball shoes', 'daily', 'unisex', 'nike', 'images/product-7.png', '36,37,38,39,40,41,42,43'),
(8, 'Nike Air Max', 120, 'Simple Fabric Shoe', 'sports', 'men', 'nike', 'images/product-8.png', '36,37,38,39,40,41,42,43'),
(17, 'reebok shoes', 100, 'Shoes ', 'daily', 'women', 'reebok', 'images/product-10.png', '38,39,40,41,42,42,44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 14, 2024 at 01:55 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tradeweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `logsign`
--

DROP TABLE IF EXISTS `logsign`;
CREATE TABLE IF NOT EXISTS `logsign` (
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `mailid` varchar(30) NOT NULL,
  `mob` varchar(15) NOT NULL,
  `usid` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `homeaddr` varchar(50) DEFAULT NULL,
  `companyaddr` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`usid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `logsign`
--

INSERT INTO `logsign` (`fname`, `lname`, `mailid`, `mob`, `usid`, `pass`, `homeaddr`, `companyaddr`) VALUES
('Jack', 'Daniel', 'jkdl@gmail.com', '6272585251', 'jd123', '87654321', 'Nirappel (H)', 'Nirappel CO'),
('John', 'Dhurairaj', 'jndj123@gmail.com', '9457862143', 'jn123', '147852369', 'Kaduvakkunnel (H)', 'Kaduvakkunnel Brothers & CO.'),
('Thoppil', 'Joppan', 'thoppan@gmail.com', '8905646175', 'top123', '123654789', 'Thoppil (H)', 'Thoppil Chandy\'s Enterprise.');

-- --------------------------------------------------------

--
-- Table structure for table `orderlist`
--

DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE IF NOT EXISTS `orderlist` (
  `usid` varchar(20) NOT NULL,
  `proid` int NOT NULL,
  `cba` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orderlist`
--

INSERT INTO `orderlist` (`usid`, `proid`, `cba`) VALUES
('jn123', 127, 'b'),
('jn123', 126, 'c'),
('jd123', 116, 'b'),
('jd123', 117, 'c'),
('top123', 115, 'b'),
('top123', 112, 'c');

-- --------------------------------------------------------

--
-- Table structure for table `sellbid`
--

DROP TABLE IF EXISTS `sellbid`;
CREATE TABLE IF NOT EXISTS `sellbid` (
  `usid` varchar(20) NOT NULL,
  `sfname` varchar(20) NOT NULL,
  `slname` varchar(20) NOT NULL,
  `smail` varchar(30) NOT NULL,
  `scont` bigint NOT NULL,
  `saddr` varchar(50) NOT NULL,
  `dettype` varchar(10) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `category` varchar(20) NOT NULL,
  `squant` int NOT NULL,
  `pdesc` varchar(250) NOT NULL,
  `newold` varchar(10) NOT NULL,
  `pyear` year NOT NULL,
  `price` float NOT NULL,
  `tdate` date NOT NULL,
  `pimage` varchar(50) NOT NULL,
  `proid` int NOT NULL AUTO_INCREMENT,
  `nbidamount` float DEFAULT NULL,
  `biduser` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`sfname`),
  UNIQUE KEY `proid` (`proid`)
) ENGINE=MyISAM AUTO_INCREMENT=203 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sellbid`
--

INSERT INTO `sellbid` (`usid`, `sfname`, `slname`, `smail`, `scont`, `saddr`, `dettype`, `pname`, `category`, `squant`, `pdesc`, `newold`, `pyear`, `price`, `tdate`, `pimage`, `proid`, `nbidamount`, `biduser`) VALUES
('top123', 'Thoppil ', 'Joppan', 'thoppan@gmail.com', 8905646175, 'Thoppil Chandy\'s Enterprise', 'bid', 'Apple iPod', 'Computer & Gaming Ac', 1, 'Old classic iPod. No screen. Only buttons. Plugged with an aux cable.', 'old', '2010', 50, '2024-01-11', 'IMG_0144.jpg', 201, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sellfix`
--

DROP TABLE IF EXISTS `sellfix`;
CREATE TABLE IF NOT EXISTS `sellfix` (
  `usid` varchar(20) NOT NULL,
  `sfname` varchar(20) NOT NULL,
  `slname` varchar(20) NOT NULL,
  `smail` varchar(30) NOT NULL,
  `scont` bigint NOT NULL,
  `saddr` varchar(50) NOT NULL,
  `dettype` varchar(10) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `category` varchar(20) NOT NULL,
  `newold` varchar(5) NOT NULL,
  `pyear` year NOT NULL,
  `price` float NOT NULL,
  `quant` int NOT NULL,
  `pdesc` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pimage` varchar(50) NOT NULL,
  `proid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`proid`,`sfname`)
) ENGINE=MyISAM AUTO_INCREMENT=141 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sellfix`
--

INSERT INTO `sellfix` (`usid`, `sfname`, `slname`, `smail`, `scont`, `saddr`, `dettype`, `pname`, `category`, `newold`, `pyear`, `price`, `quant`, `pdesc`, `pimage`, `proid`) VALUES
('top123', 'Thoppil ', 'Joppan', 'thoppan@gmail.com', 8905646175, 'Thoppil Chandy\'s Enterprise', 'fix', 'Fastrack Watch', 'Watches', 'new', '2023', 2500, 1, 'Analogue watch. Water Resistant 30m.', 'IMG_0098.jpg', 114),
('jd123', 'Jack', 'Daniel', 'jkdl@gmial.com', 6272585251, 'Nirappel CO', 'fix', 'Apple Magsafe', 'Mobile Accessories', 'new', '2023', 10000, 1, 'The MagSafe Battery Pack has a 1,460mAh capacity.', 'IMG_0097.jpg', 112),
('jd123', 'Jack', 'Daniel', 'jkdl@gmail.com', 6272585251, 'NIrappel CO', 'fix', 'Spigen Mobile Case', 'Mobile Accessories', 'new', '2023', 600, 1, 'High quality mobile cover. Suitable for iPhone 13 ', 'IMG_0092.jpg', 115),
('jn123', 'John', 'Dhurairaj', 'jndj123@gmail.com', 9457862143, 'Kaduvakkunnel Brothers & CO', 'fix', 'Sonic Watch', 'Watches', 'new', '2023', 900, 1, 'Chromium finished watch. Analogue with only time d', 'IMG_0099.jpg', 116),
('top123', 'Thoppil ', 'Joppan', 'thoppan@gmail.com', 8905646175, 'Thoppil Chandy\'s Enterprise', 'fix', 'Boat Smart Watch', 'Smart Wearable Tech', 'new', '2023', 3000, 1, '7 days of working time. Calling feature available.', 'IMG_0101.jpg', 117),
('jn123', 'John ', 'Dhurairaj', 'jndj123@gmail.com', 9457862413, 'Kaduvakkunnel Brothers & CO', 'fix', 'Poco M3', 'Mobiles', 'old', '2021', 4500, 1, '6GB RAM, 128GB internal Storage. Descent daily usa', 'IMG_0114.jpg', 118),
('jd123', 'Jack', 'Daniel', 'jkdl@gmial.com', 6272585251, 'Nirappel CO', 'fix', 'Laser Light', 'Toys and Games', 'new', '2023', 300, 1, 'Toy laser light. Design module is also included in the pack.', 'IMG_0135.jpg', 122),
('top123', 'Thoppil ', 'Joppan', 'thoppan@gmail.com', 8905646175, 'Thoppil Chandy\'s Enterprise', 'fix', 'Logitech M90', 'Computer & Gaming Ac', 'new', '2023', 600, 1, 'Simple mouse suitable for daily and light use', 'IMG_0127.jpg', 121),
('jn123', 'John ', 'Dhurairaj', 'jndj123@gmail.com', 9457862143, 'Kaduvakkunnel Brothers & CO', 'fix', 'Redmi 11i 5G', 'Mobiles & Tablets', 'new', '2023', 26000, 1, '120Hz FHD+ AMOLED Display, Dolby Atmos support, 108MP Triple Pro Camera with Dual Native ISO, a brand new processor Mediatek Dimensity 920 5G', 'IMG_0095.jpg', 123),
('top123', 'Thoppil ', 'Joppan', 'thoppan@gmail.com', 8905646175, 'Thoppil Chandy\'s Enterprise', 'fix', 'iPhone 13 Pro Max', 'Mobiles & Tablets', 'new', '2023', 140000, 1, 'A15 Bionic Chip. 256GB internal. Exclusive gold color.', 'specimen.jpg', 124),
('jn123', 'John ', 'Dhurairaj', 'jndj123@gmail.com', 9457862143, 'Kaduvakkunnel Brothers & CO', 'fix', 'Red Active Perfume', 'Beauty & Grooming', 'new', '2023', 2000, 1, 'Elegant and high quality perfume.', 'IMG_0107.jpg', 125),
('jd123', 'Jack', 'Daniel', 'jkdl@gmial.com', 6272585251, 'Nirappel CO', 'fix', 'Hotwheel Toy Set', 'Toys and Games', 'new', '2023', 500, 1, 'Hotwheels toy set. A pack of 2 toys.', 'IMG_0139.jpg', 126),
('top123', 'Thoppil ', 'Joppan', 'thoppan@gmail.com', 8905646175, 'Thoppil Chandy\'s Enterprise', 'fix', 'Boat Stone 650', 'Speakers', 'new', '2023', 1500, 1, 'Bluetooth range:- 10M. 7Hrs of playtime.', 'IMG_0185.jpg', 127),
('jd123', 'Jack', 'Daniel', 'jkdl@gmail.com', 6272585251, 'NIrappel CO', 'fix', 'Apple Power Adapter', 'Mobile Accessories', 'new', '2023', 2000, 1, '20W power adapter for iPhones.', 'IMG_0116.jpg', 128),
('jn123', 'John', 'Dhurairaj', 'jndj123@gmail.com', 9457862143, 'Kaduvakkunnel Brothers & CO', 'fix', 'Black extreme ', 'Beauty & Grooming', 'new', '2023', 1500, 1, 'Premium and High quality perfume. A bottle contains 100mL.', 'IMG_0109.jpg', 129),
('jn123', 'John ', 'Dhurairaj', 'jndj123@gmail.com', 9457862143, 'Kaduvakkunnel Brothers & CO', 'fix', 'Rubik’s cube ', 'Toys and Games', 'new', '2023', 150, 1, 'High quality and rigid cube with only solid colours.', 'IMG_0131.jpg', 130),
('top123', 'Thoppil ', 'Joppan', 'thoppan@gmail.com', 8905646175, 'Thoppil Chandy\'s Enterprise', 'fix', 'Nikon Battery Adapter', 'Camera Accessories', 'old', '2020', 200, 1, 'The Nikon MH-24 Quick Charger has a rated input maximum of AC10-240 V, 50/60 Hz, 0.2 A and it has a rated output of DC 8.4 V/0.9 A.\r\n', 'IMG_0158.jpg', 131),
('jd123', 'Jack', 'Daniel', 'jkdl@gmail.com', 6272585251, 'NIrappel CO', 'fix', 'Nikon DSLR', 'Camera', 'old', '2013', 3000, 1, 'Nikon D3200 is a DX-format DSLR with 24.2 MP CMOS sensor, ISO 100-6400, 4 FPS continous shooting, WiFi and more.', 'IMG_0122.jpg', 132),
('jd123', 'Jack', 'Daniel', 'jkdl@gmial.com', 6272585251, 'Nirappel CO', 'fix', 'Nikon Lens', 'Camera Accessories', 'old', '2013', 5000, 1, ' Its 3.1x zoom range covers the highly versatile 18–55mm focal length range, great for everything from wide group shots and landscapes to family sports and portraits, even in dim lighting.', 'IMG_0125.jpg', 134),
('jn123', 'John ', 'Dhurairaj', 'jndj123@gmail.com', 9457862143, 'Kaduvakkunnel Brothers & CO', 'fix', 'Honor 9 Lite', 'Mobiles & Tablets', 'old', '2019', 500, 1, 'The 9 Lite features a compact form factor with a mirror-finish glass back, which looks really striking. The phone is also incredibly lightweight due to the plastic build.', 'IMG_0168.jpg', 135),
('top123', 'Thoppil', 'Joppan', 'thoppan@gmail.com', 8905646175, 'Thoppil (H)', 'fix', 'Harddisk Case', 'compacc', 'new', '2023', 500, 1, '            Transparent harddisk case', 'IMG_0162.JPG', 136);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

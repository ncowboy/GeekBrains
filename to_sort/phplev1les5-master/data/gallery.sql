-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 18 2017 г., 12:48
-- Версия сервера: 5.5.50
-- Версия PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `phpl1l5`
--

-- --------------------------------------------------------

--
-- Структура таблицы `gallery`
--

CREATE TABLE IF NOT EXISTS `gallery` (
  `id_photo` int(11) NOT NULL,
  `title` text CHARACTER SET utf8 NOT NULL,
  `url_full` varchar(50) CHARACTER SET utf8 NOT NULL,
  `url_thumb` varchar(50) CHARACTER SET utf8 NOT NULL,
  `size` int(10) NOT NULL,
  `rating` int(15) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=armscii8;

--
-- Дамп данных таблицы `gallery`
--

INSERT INTO `gallery` (`id_photo`, `title`, `url_full`, `url_thumb`, `size`, `rating`, `date`) VALUES
(63, ' ', 'img/c7-6vm6w4aa4qns.jpg-large', 'img/thumbs/c7-6vm6w4aa4qns.jpg-large', 39019, 29, '2017-05-18 12:42:33'),
(65, ' ', 'img/tz-transprint.jpg', 'img/thumbs/tz-transprint.jpg', 299351, 39, '2017-05-18 12:43:19'),
(67, ' ', 'img/talon_oborot_161.jpg', 'img/thumbs/talon_oborot_161.jpg', 900396, 38, '2017-05-18 12:44:18'),
(68, ' ', 'img/dyatkovo.jpg', 'img/thumbs/dyatkovo.jpg', 97815, 32, '2017-05-18 12:44:37');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id_photo`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=70;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

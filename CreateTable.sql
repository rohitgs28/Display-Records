-
use rohitl
- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Дек 18 2016 г., 18:19
-- Версия сервера: 10.1.13-MariaDB
-- Версия PHP: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `flaskpy`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
`PatientMRN` varchar(24) NOT NULL,
  `firstname` varchar(24) NOT NULL,
  `lastname` varchar(24) NOT NULL,
  `DOB` varchar(24) NOT NULL,
`Address` varchar(24) NOT NULL,
`Phonenumber` varchar(24) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--



--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

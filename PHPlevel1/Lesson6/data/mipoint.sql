-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 31 2018 г., 17:10
-- Версия сервера: 5.7.19-log
-- Версия PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `mipoint`
--

-- --------------------------------------------------------

--
-- Структура таблицы `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author` varchar(32) NOT NULL,
  `text` varchar(3072) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `datetime`, `author`, `text`) VALUES
(1, '2018-05-11 13:37:39', 'Игорь', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros justo, laoreet sed metus at, venenatis aliquet lacus. Praesent nulla quam, suscipit id mi auctor, cursus ultricies est. Nunc est mauris, faucibus quis tristique eget, hendrerit at nisl. Aliquam scelerisque faucibus sagittis. Vivamus in interdum ipsum, a mollis odio. Fusce vestibulum tortor quis nisi feugiat laoreet. In feugiat eros sit amet leo efficitur, at consequat est elementum. Nulla fringilla dui ac justo lacinia, a viverra risus gravida.'),
(2, '2018-05-11 13:37:39', 'Вася', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros justo, laoreet sed metus at, venenatis aliquet lacus. Praesent nulla quam, suscipit id mi auctor, cursus ultricies est. Nunc est mauris, faucibus quis tristique eget, hendrerit at nisl. Aliquam scelerisque faucibus sagittis. Vivamus in interdum ipsum, a mollis odio. Fusce vestibulum tortor quis nisi feugiat laoreet. In feugiat eros sit amet leo efficitur, at consequat est elementum. Nulla fringilla dui ac justo lacinia, a viverra risus gravida.\r\n\r\n'),
(7, '2018-05-15 13:26:40', 'Игорь ', 'Очень плохой отзыв'),
(8, '2018-05-15 13:26:46', 'Игорь ', 'Очень плохой отзыв'),
(44, '2018-05-15 15:30:32', '', ''),
(45, '2018-05-15 15:32:19', '', ''),
(46, '2018-05-16 12:03:23', '', ''),
(47, '2018-05-16 12:03:27', 'выа', 'ываываы'),
(48, '2018-05-16 12:15:59', 'Игорь2', 'Все очень плохо'),
(49, '2018-05-16 13:19:54', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `alias` varchar(128) NOT NULL,
  `price` int(7) NOT NULL,
  `short_desc` varchar(256) DEFAULT NULL,
  `full_desc` varchar(3072) DEFAULT NULL,
  `img_cat` varchar(64) DEFAULT NULL,
  `small_img` varchar(64) DEFAULT NULL,
  `full_img` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `items`
--

INSERT INTO `items` (`id`, `name`, `alias`, `price`, `short_desc`, `full_desc`, `img_cat`, `small_img`, `full_img`) VALUES
(0, 'POWERBANK 20000', 'POWERBANK 20000', 1850, 'Часы, шагомер, пульсометр в одном фитнес-браслете', 'цукцукцук', 'powerbank-mini.jpg', 'powerbank-190x240.jpg', 'powerbank-full.jpg'),
(2, 'miBand 2', 'miBand 2', 1450, '<p>Текст</p>', '<p>Mi Band 2 – простой и симпатичный девайс, обладающий всеми нужными возможностями.\r\n</p>\r\n<p>По соотношению цены и функционала он является лучшим вариантом на рынке – что уже поняли миллионы китайских клиентов Xiaomi. За рубежом, особенно в США, он не так популярен: если удобство работы с браслетом на iPhone для вас важнее нескольких десятков долларов, лучше выбрать одну из моделей Jawbone. А вот для владельцев Android-девайсов, особенно с оболочкой MIUI от Xiaomi, это непревзойденный фитнес-браслет, который оправдает себя сторицей. \r\n</p>\r\n<p>Также этот девайс является одним из лучших подарков для тех, кто сам еще пока не освоил покупки в китайских интернет-магазинах. Стильно, современно, полезно и дешево.\r\n</p>\r\n<table>\r\n   <tbody>\r\n      <tr>\r\n         <td>Размеры </td>\r\n         <td>40,3х15,7х10,5</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Вес</td>\r\n         <td>7 г</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Экран</td>\r\n         <td>0,42 дюйма, OLED, монохромный</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Защита модуля</td>\r\n         <td>IP67</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Материалы</td>\r\n         <td>поликарбонат, магниевый сплав, силикон</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Интерфейс подключения</td>\r\n         <td>Bluetooth 4.0</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Датчики  </td>\r\n         <td>оптический пульсометр, трехосевой акселерометр </td>\r\n      </tr>\r\n      <tr>\r\n         <td> Аккумулятор </td>\r\n         <td>70 мАч</td>\r\n      </tr>\r\n   </tbody>\r\n</table>', 'miband2-mini.jpg', 'miband2-190x240.jpg', 'miband2-full.jpg'),
(3, 'Redmi note 3', 'Redmi note 3', 12450, '<p>Линейка смартфонов Redmi Note благодаря сочетанию новейших разработок и демократичной цены добилась признания и расположения пользователей во всем мире. \r\n</p>\r\n<p>Redmi note 3 - стильный и недорогой смартфон для решения любых повседневных задач!\r\n</p>', '<p>Линейка смартфонов <strong>Redmi Note</strong> благодаря сочетанию новейших разработок и демократичной цены добилась признания и расположения пользователей во всем мире. А что же представляет из себя <strong>Redmi Note 3</strong>?\r\n</p>\r\n<p>Как и его предшественники, <strong>Redmi Note 3</strong> может похвастаться топовой конфигурацией, а именно металлическим корпусом, функцией распознавания отпечатков пальцев, мощным аккумулятором 4000 mAh. Он воплотил самые смелые ожидания: объединил в себе последние достижения науки и при этом сохранил былое изящество и легкость, прибавив в весе всего лишь на 4 грамма.\r\n</p>\r\n<p><strong>Redmi Note 3</strong> – достойный представитель флагманской линейки смартфонов Xiaomi, созданный с учетом всех требований молодого поколения.\r\n</p>\r\n<p>\r\n   Быстрый, легкий, стильный и выносливый смартфон - объект желаний энергичных людей, стремящихся к совершенству!\r\n</p>\r\n<table>\r\n   <tbody>\r\n      <tr>\r\n         <td>Стандарт</td>\r\n         <td>GSM/EDGE, UMTS/HSDPA, WCDMA/GSM, 4G (FDD-LTE B1/B3/B7)</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Операционная система</td>\r\n         <td>Android 5 (Lollipop)</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Количество SIM-карт</td>\r\n         <td>2 Micro Sim</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Вес</td>\r\n         <td>164г.</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Диагональ экрана</td>\r\n         <td>5.5 дюйм</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Размер изображения</td>\r\n         <td>1920x1080</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Фотокамера </td>\r\n         <td>13 млн. пикс </td>\r\n      </tr>\r\n      <tr>\r\n         <td> Процессор</td>\r\n         <td>Helio X10</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Количество ядер процессора </td>\r\n         <td> 8</td>\r\n      </tr>\r\n      <tr>\r\n         <td> Объем встроенной памяти</td>\r\n         <td>32 гб </td>\r\n      </tr>\r\n      <tr>\r\n         <td> Объем оперативной памяти</td>\r\n         <td> 3 гб</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Емкость аккумулятора </td>\r\n         <td>4000 мАч </td>\r\n      </tr>\r\n      <tr>\r\n         <td> Цвет</td>\r\n         <td>Серый </td>\r\n      </tr>\r\n   </tbody>\r\n</table>', 'rmn3-mini.jpg', 'rmn3-190x240.jpg', 'rmn3-full.jpg'),
(4, 'Wi-Fi Mini', 'Wi-Fi Mini', 2200, '<p>Компактный роутер с привлекательным дизайном \r\n\r\n						</p>', '<p>Роутер <strong>xiaomi mini wifi</strong> - компактная модель с привлекательным дизайном, который без проблем вольется в любой интерьер. Это отличный вариант для домашнего использования, главной особенностью которого является сочетание цены и характеристик: роутеры с аналогичными параметрами других брендов стоят намного дороже (при этом <strong>xiaomi mini</strong> ничуть не уступает им по качеству и возможностям).\r\n</p>\r\n\r\n<p>Среди других особенностей роутера <strong>xiaomi mi wifi mini</strong> следует выделить:\r\n   <br>\r\n   Наличие USB-порта для подключения внешнего носителя (карта памяти, жесткие диски и пр.). Благодаря этой функции можно организовать свое сетевое хранилище, а также обеспечить резервное копирование данных. В ПО интегрирован коммерческий драйвер Tuxera, поддерживающий все версии NTFS, и позволяющий работать с различными внешними накопителями. \r\n   <br>\r\n   Специализированное программное обеспечение, позволяющее осуществлять настройку роутера <strong>xiaomi mini</strong>, управлять устройством удаленно и получать статистическую информацию о его работе. Для этого можно использовать смартфон, планшет или другой девайс.\r\n   <br>\r\n   128 Мб оперативной памяти, что обеспечивает высокие показатели быстродействия, оказывает влияние на скорость  передачи данных при подключении нескольких устройств, а также на скорость перезагрузки <strong>мини wifi роутер xiaomi</strong>, в случае необходимости.\r\n   <br> \r\n</p>\r\n<p>Кроме этого, как утверждают производители <strong>xiaomi mini</strong>, он может быть интегрирован в состав системы «Умный дом», обеспечив эффективное управление ее компонентами.\r\n</p>\r\n<p>\r\n   Разработчики мини роутера <strong>xiaomi</strong> позаботились о безопасности данных пользователей устройства. Здесь предусмотрены:\r\n   <br>\r\n   Оповещения о подключении к сети Wi-Fi сторонних и подозрительных пользователей.<br>\r\n   Сбор данных о фишинговых, мошеннических и других опасных сайтах и добавление их в черный список.\r\n</p>\r\n<p>\r\n   <strong>Роутер xiaomi mini</strong> - отличный выбор для домашнего использования. Привлекательная цена, неплохие характеристики, современный дизайн, эффективные механизмы защиты домашней сети - все это аргументы в пользу его приобретения. \r\n</p>\r\n<table>\r\n   <tbody>\r\n      <tr>\r\n         <td>Диапазоны работы</td>\r\n         <td>2,4 ГГц, 5 ГГц</td>\r\n      </tr>\r\n      <tr>\r\n         <td>USB порт</td>\r\n         <td>Есть</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Объем оперативной памяти</td>\r\n         <td>128 мб</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Количество LAN портов</td>\r\n         <td>2</td>\r\n      </tr>\r\n      <tr>\r\n         <td>Цвет</td>\r\n         <td>белый</td>\r\n      </tr>\r\n   </tbody>\r\n</table>', 'wifi-mini.jpg', 'wifimini-190x240.jpg', 'wifimini-full.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
--
-- AUTO_INCREMENT для таблицы `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

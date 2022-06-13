-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-06-2022 a las 12:42:45
-- Versión del servidor: 10.5.13-MariaDB
-- Versión de PHP: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id19057173_sanfrancesco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `numero_cuenta` int(11) NOT NULL,
  `ids_productos` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `id_user`, `precio`, `numero_cuenta`, `ids_productos`) VALUES
(1, 1, 62, 1, '1,2,3'),
(2, 1, 62, 4, '1,2,3'),
(4, 1, 100, 2, '3'),
(5, 1, 100, 1, '3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--

CREATE TABLE `habitacion` (
  `id` int(11) NOT NULL,
  `planta` int(11) NOT NULL,
  `letra` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`id`, `planta`, `letra`) VALUES
(1, 1, 'a'),
(2, 1, 'b'),
(3, 1, 'c'),
(4, 1, 'd'),
(5, 2, 'a'),
(6, 2, 'b'),
(7, 2, 'c'),
(8, 2, 'd'),
(9, 3, 'a'),
(10, 3, 'b'),
(11, 3, 'c'),
(12, 3, 'd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `rol` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `name`, `lastname`, `username`, `email`, `dni`, `phone_number`, `rol`, `password`) VALUES
(1, 'Pepe', 'Gonzalez', 'pegonza', 'PEGOINZA@GMAIL.COM', '22331223R', 344554333, 'ADMIN', '12345'),
(16, 'Antonio Miguel', 'Almohano soto', 'antoniomiguel12', 'xenxo2002@hotmail.com', ' ', 0, 'public', 'antonio'),
(19, 'Fernando', 'Ruiz', 'fernandoorf_', 'fernandoruizfleetani@gmail.com', ' ', 0, 'public', '12345678'),
(20, 'david ', 'Grande', 'DavidGrande', 'davidgrande@hotmail.com', ' ', 0, 'public', '12345'),
(21, 'Paqui', 'aaaaaaaaaaaaaaa', 'paqui', 'pqmlnalv@gmail.com', ' ', 0, 'public', 'secreto'),
(24, 'david', 'hernandez', 'dhl', 'dhl@hotmail.com', ' ', 0, 'public', '12345'),
(25, 'Francisco Manuel ', 'González Higueras', 'Franmagoh', 'franmagoh@gmail.com', ' ', 0, 'public', '265318'),
(26, 'ds', 'ds', 'ds', 'ds@hotmail.com', ' ', 0, 'public', '12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `name`, `description`, `img`, `stock`, `precio`) VALUES
(1, 'CLEANSER', 'For the face', '', 1, 18),
(2, 'MOISTURIZING CREAM', 'For the face', '', 1, 24),
(3, 'TONIC', 'For the face', '', 1, 20),
(4, 'ANTI-AGING CREAM', 'For the face', '', 1, 27),
(5, 'MOISTURIZING MASK', 'For the face', '', 1, 28),
(6, 'ANTIAGE MASK', 'For the face', '', 1, 30),
(7, 'THERMAL MUD MASK', 'For the face', '', 1, 28),
(8, 'SWEET ALMOND CREAM', 'For the body', '', 1, 22),
(9, 'ANTI-CELLULITE MUD', 'For the body', '', 1, 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_habitacion` int(11) NOT NULL,
  `inicio` date NOT NULL,
  `fin` date NOT NULL,
  `precio` int(11) NOT NULL,
  `numero_cuenta` int(11) NOT NULL,
  `adultos` int(11) NOT NULL,
  `niños` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id`, `id_user`, `id_habitacion`, `inicio`, `fin`, `precio`, `numero_cuenta`, `adultos`, `niños`) VALUES
(8, 26, 1, '2022-06-08', '2022-06-09', 340, 12345, 1, 0),
(9, 1, 1, '2022-06-13', '2022-06-15', 230, 2, 1, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`id_user`);

--
-- Indices de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_user` (`id_user`),
  ADD KEY `fk_id_habitacion` (`id_habitacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`id_user`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `fk_id_habitacion` FOREIGN KEY (`id_habitacion`) REFERENCES `habitacion` (`id`),
  ADD CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `persona` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

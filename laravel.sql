-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июл 18 2021 г., 14:41
-- Версия сервера: 8.0.25
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `laravel`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, ' БАДы Витамины '),
(2, ' БАДы для Зрения '),
(3, ' БАДы для Сердечно-сосудистой системы ');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2021_07_07_041115_create_orders_table', 1),
(2, '2021_07_07_051251_create_categories_table', 1),
(3, '2021_07_07_051947_create_products_table', 1),
(4, '2021_07_09_145322_create_order_lists_table', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `house` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flat` int NOT NULL,
  `comments` text COLLATE utf8mb4_unicode_ci,
  `cost` double(10,2) NOT NULL,
  `order_id` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `order_lists`
--

CREATE TABLE `order_lists` (
  `id` int UNSIGNED NOT NULL,
  `order_id` int UNSIGNED DEFAULT NULL,
  `product_id` int UNSIGNED DEFAULT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  `price` double(10,2) NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(10,2) NOT NULL,
  `category_id` int UNSIGNED NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category_id`, `category`, `image`) VALUES
(1, 'Алфавит Классик тбл N120 БАД ', 551.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/b78/alfavit_klassik_tbl_120_bad_rusfik_ooo3820.jpg'),
(2, ' Алфавит 50+ тбл N60 БАД ', 429.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/cb3/alfavit_50_tbl_60_bad_rusfik_ooo3820.jpg'),
(3, ' Алфавит В сезон простуд тбл N60 БАД ', 485.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/e3a/alfavit_v_sezon_prostud_tbl_60_bad_rusfik_ooo3820.jpg'),
(4, ' Алфавит д/мужчин тбл N60 БАД ', 542.50, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/5b8/alfavit_d_muzhchin_tbl_60_bad_rusfik_ooo3820.jpg'),
(5, ' Алфавит Диабет тбл N60 БАД ', 455.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/af4/alfavit_diabet_tbl_60_bad_rusfik_ooo3820.jpg'),
(6, ' Алфавит Косметик тбл N60 БАД ', 638.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/78b/alfavit_kosmetik_tbl_60_bad_rusfik_ooo3820.jpg'),
(7, ' Алфавит Мамино здоровье тбл N60 БАД ', 478.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/19f/alfavit_mamino_zdorove_tbl_60_bad_rusfik_ooo3820.jpg'),
(8, ' Алфавит Энергия тбл N60 БАД ', 540.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/a7e/alfavit_jenergija_tbl_60_bad_rusfik_ooo3820.jpg'),
(9, ' Асвитол Солнышко 25мг тбл жеват N10 БАД ', 62.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/7b3/asvitol_solnyshko_25mg_tbl_zhevat_10_bad_farmstandart2677.jpg'),
(10, ' Аскорбиновая к-та с сахаром тбл N10 БАД ', 10.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/21d/askorbinovaja_k_ta_s_saharom_tbl_10_nds_18_bad_askoprom_ooo2579.jpg'),
(11, ' Аскорбиновая к-та с глюкоз тбл N10 БАД ', 7.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/f25/askorbinovaja_k_ta_100mg_s_gljuk_tbl_10_nds_18bad_askoprom_ooo2579.jpg'),
(12, ' Дуовит для Женщин тбл п/об N30 БАД ', 710.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/218/duovit_dlja_zhenschin_tbl_p_ob_30_bad_krka2648.jpg'),
(13, ' Дуовит для Мужчин тбл п/об N30 БАД ', 854.50, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/bc5/duovit_dlja_muzhchin_tbl_p_ob_30_bad_krka2648.jpg'),
(14, ' Кальцид + Магний тбл N100 БАД ', 169.50, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/f0d/kalcid_magnij_tbl_100_bad_komfort_kompleks_ooo279.jpg'),
(15, ' Кальцид 0,4 N100 БАД ', 148.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/fc0/kalcid_0_4_100_bad_komfort_kompleks_ooo279.jpg'),
(16, ' Компливит Антистресс тбл п/об N30 БАД ', 330.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/934/komplivit_antistress_tbl_p_ob_30_bad_farmstandart2677.jpg'),
(17, ' Компливит Диабет тбл п/об N30 БАД ', 360.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/054/komplivit_diabet_tbl_p_ob_30_bad_farmstandart2677.jpg'),
(18, ' Компливит Железо тбл п/об N60 БАД ', 290.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/c16/komplivit_zhelezo_tbl_p_ob_60_bad_farmstandart2677.jpg'),
(19, ' Компливит Магний тбл п/об N60 БАД ', 330.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/866/komplivit_magnij_tbl_p_ob_60_bad_farmstandart2677.jpg'),
(20, ' Компливит Селен тбл п/об N60 БАД ', 315.00, 1, ' БАДы Витамины ', 'https://www.tvoyaapteka.ru/upload/iblock/23a/komplivit_selen_tbl_p_ob_60_bad_farmstandart2677.jpg'),
(21, 'Виталюкс Плюс капс N28 БАД ', 863.50, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/519/vitaljuks_pljus_kaps_28_bad_katalent_farma_soljushnz2875.jpg'),
(22, ' Доппельгерц Актив Вит с лютеином д/глаз N30 БАД ', 530.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/03e/doppelgerc_aktiv_vit_s_ljuteinom_d_glaz_30_bad_kvajscer_farma_gmbh_i_ko262.jpg'),
(23, ' Фокус капс N20 БАД ', 560.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/485/fokus_kaps_20_bad_rusfik_ooo3820.jpg'),
(24, ' Черника форте с лютеином тбл N50 БАД Эвалар ', 240.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/8e5/chernika_forte_s_ljuteinom_tbl_50_bad_jevalar_jevalar_zao655.jpg'),
(25, ' Черника-форте тбл N100 БАД Эвалар ', 265.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/430/chernika_forte_tbl_100_bad_jevalar_jevalar_zao655.jpg'),
(26, ' Черника-форте тбл N150 БАД Эвалар ', 318.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/fab/chernika_forte_tbl_150_bad_jevalar_jevalar_zao655.jpg'),
(27, ' Черника-форте тбл N50 БАД Эвалар ', 156.50, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/65b/chernika_forte_tbl_50_bad_jevalar_jevalar_zao655.jpg'),
(28, ' Лютеин комплекс тбл N60 БАД ', 700.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/2ce/ljutein_kompleks_tbl_60_bad_valeant_ooo2777.jpg'),
(29, ' Лютеин форте капс N30 БАД ', 600.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/a28/ljutein_forte_kaps_30_bad_valeant_ooo2777.jpg'),
(30, ' Лютеин комплекс тбл N30 БАД ', 475.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/b82/ljutein_kompleks_tbl_30_bad_valeant_ooo2777.jpg'),
(31, ' Окувайт форте тбл N30 БАД ', 955.50, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/0e8/okuvajt_ljutein_forte_tbl_30_bad_valeant_ooo2777.jpg'),
(32, ' Черника форте Интенсив комплекс для зрения саше N30БАД ', 1140.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/dea/chernika_forte_intensiv_kompl_d_zren_sashe_30bad_jevalar_zao655.jpg'),
(33, ' Лютеин форте тбл N30 БАД ', 305.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/5ed/lyutein_forte_tbl_30_bad.jpg'),
(34, ' Стрикс форте тбл N30 БАД ', 1080.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/62d/striks_forte_tbl_30_bad.jpg'),
(35, ' Черника-форте с лютеином тбл N100 БАД Эвалар ', 395.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/1be/chernika_forte_s_lyuteinom_tbl_100_bad_evalar.jpg'),
(36, ' Фокус Форте тбл N30 БАД ', 880.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/61f/fokus_forte_tbl_30_bad_1.jpg'),
(37, ' Офтолик витамины д/глаз капс N30 БАД ', 740.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/568/bioritm_zrenie_24_chasa_tbl_32_bad_jevalar_zao655.jpg'),
(38, ' Биоритм Зрение 24 часа тбл N32 БАД ', 454.90, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/d47/zvezdnaja_ochanka_kaps_30_bad_jevalar_zao655.jpg'),
(39, ' Звездная очанка капс N30 БАД ', 530.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/37c/ljutein_intensiv_500mg_tbl_20_bad_jevalar_zao655.jpg'),
(40, ' Лютеин интенсив 500мг тбл N20 БАД ', 530.00, 2, ' БАДы для Зрения ', 'https://www.tvoyaapteka.ru/upload/iblock/485/fokus_kaps_20_bad_rusfik_ooo3820.jpg'),
(41, 'АД Норма капс N60 БАД ', 375.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/470/ad_norma_kaps_60bad_vis_ooo1213.jpg'),
(42, ' Атероклефит БИО капс N30 БАД ', 345.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/44d/ateroklefit_bio_kaps_30_bad_jevalar_zao655.jpg'),
(43, ' Атероклефит БИО капс N60 БАД ', 550.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/869/ateroklefit_bio_kaps_60_bad_jevalar_zao655.jpg'),
(44, ' Вербена-чистые сосуды комплекс капс N30 БАД ', 270.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/f26/verbena_chistye_sosudy_kompleks_kaps_30_bad_koroljovfarm_ooo2484.jpg'),
(45, ' Дигидрокверцетин тбл N20 БАД ', 235.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/626/digidrokvercetin_25mg_tbl_20_bad_jevalar_zao655.jpg'),
(46, ' Доппельгерц V.I.P. Кардио Омега капс N30 БАД ', 1100.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/091/doppelgerc_v_i_p_kardio_omega_kaps_30_bad_kvajscer_farma_gmbh_i_ko262.jpg'),
(47, ' Капилар тбл N100 БАД ', 420.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/9be/kapilar_tbl_100_bad_diod_zavod_jekopitanija193.jpg'),
(48, ' Капилар тбл N200 БАД ', 710.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/60f/kapilar_tbl_200_bad_diod_zavod_jekopitanija193.jpg'),
(49, ' Капилар тбл N50 БАД ', 255.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/ed5/kapilar_tbl_50_bad_diod_zavod_jekopitanija193.jpg'),
(50, ' Капилар Кардио с коэнзимом Q10 тбл N40БАД ', 480.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/7d5/kapilar_kardio_s_kojenzimom_q10_tbl_40bad_diod_zavod_jekopitanija193.jpg'),
(51, ' КардиоАктив боярышник тбл N40 БАД Эвалар ', 265.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/715/kardioaktiv_bojaryshnik_tbl_40_jevalar_bad_jevalar_zao655.jpg'),
(52, ' КардиоАктив витамины для сердца капс N30 БАД ', 531.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/173/kardioaktiv_vitaminy_dlja_serdca_kaps_30_bad_jevalar_zao655.jpg'),
(53, ' Коэнзим Q10 капс N40 /Алкой/ БАД ', 700.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/135/kojenzim_q10_kaps_40_alkoj_bad_realkaps_zao2047.jpg'),
(54, ' Кудесан с калием и магнием тбл N40 БАД ', 440.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/afb/kudesan_s_kaliem_i_magniem_tbl_40_bad_rusfik_ooo3820.jpg'),
(55, ' Кудесан форте тбл N20 БАД ', 520.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/476/kudesan_forte_tbl_20_bad_rusfik_ooo3820.jpg'),
(56, ' Океанол капс N30 БАД ', 150.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/98e/okeanol_kaps_30_bad_koroljovfarm_ooo2484.jpg'),
(57, ' Омега форте Эвалар капс N30 БАД ', 260.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/121/omega_forte_jevalar_kaps_30_bad_jevalar_zao655.jpg'),
(58, ' Омеганол форте капс N30 БАД ', 360.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/203/omeganol_forte_kaps_30_bad_vis_ooo1213.jpg'),
(59, ' Сердечные травы тбл N30 (Леовит) БАД ', 175.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/f19/serdechnye_travy_tbl_30_leovit_bad_leovit_nutrio_ooo315.jpg'),
(60, ' Тайм Эксперт Коэнзим Q10 вит Е тбл N20 БАД ', 305.00, 3, ' БАДы для Сердечно-сосудистой системы ', 'https://www.tvoyaapteka.ru/upload/iblock/00f/tajm_jekspert_kojenzim_q10_vit_e_tbl_20_bad_jevalar_zao655.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `order_lists`
--
ALTER TABLE `order_lists`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `order_lists`
--
ALTER TABLE `order_lists`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */

import thunderstormIcon from "../assets/thunderstorm-icon.webp";
import drizzleIcon from "../assets/drizzle-icon.webp";
import showerRainIcon from "../assets/shower-rain-icon.webp";
import lightSnowIcon from "../assets/light-snow-icon.webp";
import snowIcon from "../assets/snow-icon.webp";
import mistIcon from "../assets/mist-icon.webp";
import sunnyIcon from "../assets/sunny-icon.webp";
import cloudsIcon from "../assets/clouds-icon.webp";
import brokenCloudsIcon from "../assets/broken-clouds-icon.webp";
import unknownPrecipitationIcon from "../assets/unknown-precipitation-icon.webp";

export const weatherDescriptions = [
    // https://www.weatherbit.io/api/codes
    {
        code: 200,
        uaDescription: "Гроза з невеликим дощем",
        engDescription: "Thunderstorm with light rain",
        ruDescription: "Гроза с небольшим дождем",
        img: thunderstormIcon,
    },
    {
        code: 201,
        uaDescription: "Гроза з дощем",
        engDescription: "Thunderstorm with rain",
        ruDescription: "Гроза с дождем",
        img: thunderstormIcon,
    },
    {
        code: 202,
        uaDescription: "Гроза з сильним дощем",
        engDescription: "Thunderstorm with heavy rain",
        ruDescription: "Гроза с сильным дождем",
        img: thunderstormIcon,
    },
    {
        code: 230,
        uaDescription: "Гроза з дрібним дощем",
        engDescription: "Thunderstorm with light drizzle",
        ruDescription: "Гроза с мелким дождем",
        img: thunderstormIcon,
    },
    {
        code: 231,
        uaDescription: "Гроза з мрякою",
        engDescription: "Thunderstorm with drizzle",
        ruDescription: "Гроза с моросью",
        img: thunderstormIcon,
    },
    {
        code: 232,
        uaDescription: "Гроза з сильним дощем",
        engDescription: "Thunderstorm with heavy drizzle",
        ruDescription: "Гроза с сильным моросящим дождем",
        img: thunderstormIcon,
    },
    {
        code: 233,
        uaDescription: "Гроза з градом",
        engDescription: "Thunderstorm with Hail",
        ruDescription: "Гроза с градом",
        img: thunderstormIcon,
    },
    {
        code: 300,
        uaDescription: "Дрібний дощ",
        engDescription: "Light Drizzle",
        ruDescription: "Мелкий дождь",
        img: drizzleIcon,
    },
    {
        code: 301,
        uaDescription: "Мряка",
        engDescription: "Drizzle",
        ruDescription: "Морось",
        img: drizzleIcon,
    },
    {
        code: 302,
        uaDescription: "Сильний дощ",
        engDescription: "Heavy Drizzle",
        ruDescription: "Сильный дождь",
        img: drizzleIcon,
    },
    {
        code: 500,
        uaDescription: "Легкий дощ",
        engDescription: "Light Rain",
        ruDescription: "Легкий дождь",
        img: drizzleIcon,
    },
    {
        code: 501,
        uaDescription: "Помірний дощ",
        engDescription: "Moderate Rain",
        ruDescription: "Умеренный дождь",
        img: drizzleIcon,
    },
    {
        code: 502,
        uaDescription: "Злива",
        engDescription: "Heavy Rain",
        ruDescription: "Ливень",
        img: drizzleIcon,
    },
    {
        code: 511,
        uaDescription: "Крижаний дощ",
        engDescription: "Freezing rain",
        ruDescription: "Ледяной дождь",
        img: drizzleIcon,
    },
    {
        code: 520,
        uaDescription: "Слабкий дощ",
        engDescription: "Light shower rain",
        ruDescription: "Слабый ливневый дождь",
        img: drizzleIcon,
    },
    {
        code: 521,
        uaDescription: "Дощ, як із душу",
        engDescription: "Shower rain",
        ruDescription: "Дождь, как из душа",
        img: showerRainIcon,
    },
    {
        code: 522,
        uaDescription: "Сильна злива",
        engDescription: "Heavy shower rain",
        ruDescription: "Сильный ливневый дождь",
        img: drizzleIcon,
    },
    {
        code: 600,
        uaDescription: "Слабкий сніг",
        engDescription: "Light snow",
        ruDescription: "Слабый снег",
        img: lightSnowIcon,
    },
    {
        code: 601,
        uaDescription: "Сніг",
        engDescription: "Snow",
        ruDescription: "Снег",
        img: snowIcon,
    },
    {
        code: 602,
        uaDescription: "Сильний снігопад",
        engDescription: "Heavy Snow",
        ruDescription: "Сильный снегопад",
        img: snowIcon,
    },
    {
        code: 610,
        uaDescription: "Сніг з дощем",
        engDescription: "Mix snow/rain",
        ruDescription: "Снег с дождем",
        img: lightSnowIcon,
    },
    {
        code: 611,
        uaDescription: "Мокрий сніг",
        engDescription: "Sleet",
        ruDescription: "Мокрый снег",
        img: snowIcon,
    },
    {
        code: 612,
        uaDescription: "Сильний мокрий сніг",
        engDescription: "Heavy sleet",
        ruDescription: "Сильный мокрый снег",
        img: snowIcon,
    },
    {
        code: 621,
        uaDescription: "Снігопад",
        engDescription: "Snow shower",
        ruDescription: "Снегопад",
        img: lightSnowIcon,
    },
    {
        code: 622,
        uaDescription: "Сильний снігопад",
        engDescription: "Heavy snow shower",
        ruDescription: "Сильный снегопад",
        img: snowIcon,
    },
    {
        code: 623,
        uaDescription: "Пориви снігу",
        engDescription: "Flurries",
        ruDescription: "Порывы снега",
        img: snowIcon,
    },
    {
        code: 700,
        uaDescription: "Туман",
        engDescription: "Mist",
        ruDescription: "Туман",
        img: mistIcon,
    },
    {
        code: 711,
        uaDescription: "Дим",
        engDescription: "Smoke",
        ruDescription: "Дым",
        img: mistIcon,
    },
    {
        code: 721,
        uaDescription: "Туман",
        engDescription: "Haze",
        ruDescription: "Туман",
        img: mistIcon,
    },
    {
        code: 731,
        uaDescription: "Пісок / Пил",
        engDescription: "Sand/dust",
        ruDescription: "Песок / Пыль",
        img: mistIcon,
    },
    {
        code: 741,
        uaDescription: "Туман",
        engDescription: "Fog",
        ruDescription: "Туман",
        img: mistIcon,
    },
    {
        code: 751,
        uaDescription: "Крижаний туман",
        engDescription: "Freezing Fog",
        ruDescription: "Ледяной туман",
        img: mistIcon,
    },
    {
        code: 800,
        uaDescription: "Сонячно",
        engDescription: "Clear sky",
        ruDescription: "Солнечно",
        img: sunnyIcon,
    },
    {
        code: 801,
        uaDescription: "Трохи хмарно",
        engDescription: "Few clouds",
        ruDescription: "Немного облачно",
        img: cloudsIcon,
    },
    {
        code: 802,
        uaDescription: "Розсіяні хмари",
        engDescription: "Scattered clouds",
        ruDescription: "Рассеянные облака",
        img: cloudsIcon,
    },
    {
        code: 803,
        uaDescription: "Розірвані хмари",
        engDescription: "Broken clouds",
        ruDescription: "Разорванные облака",
        img: brokenCloudsIcon,
    },
    {
        code: 804,
        uaDescription: "Пасмурно",
        engDescription: "Overcast clouds",
        ruDescription: "Пасмурные облака",
        img: cloudsIcon,
    },
    {
        code: 900,
        uaDescription: "Невідомі опади",
        engDescription: "Unknown Precipitation",
        ruDescription: "Неизвестные осадки",
        img: unknownPrecipitationIcon,
    },
];

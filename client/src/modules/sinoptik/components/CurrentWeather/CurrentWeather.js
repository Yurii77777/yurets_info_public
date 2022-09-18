/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import PT from "prop-types";

import { weatherDescriptions } from "../../data/weatherDescriptions";
import { createDescription } from "../../utils/createDescription";
import { getMainPoster } from "../../utils/getMainPoster";

import "./CurrentWeather.scss";

export const CurrentWeather = ({ language, currentWeatherData = [] }) => {
    const {
        currentWeatherDescriptionUa,
        currentWeatherDescriptionEng,
        currentWeatherDescriptionRu,
    } = createDescription({
        data: currentWeatherData,
        descriptions: weatherDescriptions,
    });

    const { mainPoster: currentWeatherImg } = getMainPoster({
        data: currentWeatherData,
        descriptions: weatherDescriptions,
    });

    return (
        <>
            {currentWeatherData.length &&
                currentWeatherData.map(
                    ({ city_name, temp, wind_spd, aqi, uv, pres }) => {
                        return (
                            <div
                                key={0}
                                className="sinoptik-article__current-weather-container"
                            >
                                <img
                                    src={currentWeatherImg}
                                    alt={currentWeatherDescriptionUa}
                                    className="sinoptik-article__weather-icon"
                                />
                                <p className="sinoptik-article__city-name secondary-paragraph">
                                    {city_name}
                                </p>
                                <p className="sinoptik-article__temp secondary-paragraph">
                                    {temp} &#176;
                                </p>
                                <p className="sinoptik-article__weather-description secondary-paragraph">
                                    {language === "UA" &&
                                        currentWeatherDescriptionUa}
                                    {language === "ENG" &&
                                        currentWeatherDescriptionEng}
                                    {language === "RU" &&
                                        currentWeatherDescriptionRu}
                                </p>
                                <p className="sinoptik-article__weather-description secondary-paragraph">
                                    {language === "UA" &&
                                        "Швидкість вітру " +
                                            Math.floor(wind_spd) +
                                            " м/с"}
                                    {language === "ENG" &&
                                        "Wind speed " +
                                            Math.floor(wind_spd) +
                                            " m/s"}
                                    {language === "RU" &&
                                        "Скорость ветра " +
                                            Math.floor(wind_spd) +
                                            " м/с"}
                                </p>
                                <p className="sinoptik-article__weather-description secondary-paragraph">
                                    {language === "UA" &&
                                        "Індекс чистоти повітря " +
                                            aqi +
                                            " [макс. 500]"}
                                    {language === "ENG" &&
                                        "Air quality index " +
                                            aqi +
                                            " [max. 500]"}
                                    {language === "RU" &&
                                        "Индекс чистоты воздуха " +
                                            aqi +
                                            " [макс. 500]"}
                                </p>
                                <p className="sinoptik-article__weather-description secondary-paragraph">
                                    {language === "UA" &&
                                        "УФ індекс " + Math.round(uv)}
                                    {language === "ENG" &&
                                        "UV index " + Math.round(uv)}
                                    {language === "RU" &&
                                        "УФ индекс " + Math.round(uv)}
                                </p>
                                <p className="sinoptik-article__weather-description secondary-paragraph">
                                    {language === "UA" &&
                                        "Атмосферний тиск " + Math.floor(pres)}
                                    {language === "ENG" &&
                                        "Pressure " + Math.floor(pres)}
                                    {language === "RU" &&
                                        "Атмосферное давление " +
                                            Math.floor(pres)}
                                </p>
                            </div>
                        );
                    }
                )}
        </>
    );
};

CurrentWeather.propTypes = {
    language: PT.string.isRequired,
    currentWeatherData: PT.array.isRequired,
};

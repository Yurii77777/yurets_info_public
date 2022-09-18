/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import PT from "prop-types";

import "./ForecastWeather.scss";

export const ForecastWeather = ({ language, forecastDataForRedner = [] }) => {
    return (
        <div className="sinoptik-article__forecast-container">
            <h2 className="sinoptik-article__subtitle">
                {language === "UA" && "Прогноз на 16 днів"}
                {language === "ENG" && "16-DAY  FORECAST"}
                {language === "RU" && "Прогноз на 16 дней"}
            </h2>
            <ul className="sinoptik-article__forecast-list">
                {forecastDataForRedner.length &&
                    forecastDataForRedner.map(
                        ({
                            id,
                            datetime,
                            img,
                            uaDescription,
                            low_temp,
                            high_temp,
                        }) => {
                            const {
                                ua: uaDayOfWeek,
                                eng: engDayOfWeek,
                                ru: ruDayOfWeek,
                            } = datetime[0];

                            return (
                                <li
                                    key={id}
                                    className="sinoptik-article__forecast-item"
                                >
                                    {id === 0 && language === "UA" && (
                                        <span>Сьогодні</span>
                                    )}
                                    {id === 0 && language === "ENG" && (
                                        <span>Today</span>
                                    )}
                                    {id === 0 && language === "RU" && (
                                        <span>Сегодня</span>
                                    )}
                                    {id !== 0 && language === "UA" && (
                                        <span>{uaDayOfWeek}</span>
                                    )}
                                    {id !== 0 && language === "ENG" && (
                                        <span>{engDayOfWeek}</span>
                                    )}
                                    {id !== 0 && language === "RU" && (
                                        <span>{ruDayOfWeek}</span>
                                    )}
                                    <img
                                        src={img}
                                        alt={uaDescription}
                                        className="sinoptik-article__forecast-item-img"
                                    />
                                    <p className="sinoptik-article__forecast-item-temperature">
                                        <span>
                                            {Math.round(low_temp)}&#176;
                                        </span>
                                        <span>-</span>
                                        <span>
                                            {Math.round(high_temp)}&#176;
                                        </span>
                                    </p>
                                </li>
                            );
                        }
                    )}
            </ul>
        </div>
    );
};

ForecastWeather.propTypes = {
    language: PT.string.isRequired,
    forecastDataForRedner: PT.array.isRequired,
};

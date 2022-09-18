/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { useEffect, useState } from "react";

import PT from "prop-types";

import { useFetch } from "../../hooks/useFetch";

import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { ForecastWeather } from "./components/ForecastWeather/ForecastWeather";
import { Description } from "./components/Description/Description";
import { Stacklist } from "./components/Stacklist/Stacklist";

import { checkNavigationObjectInUserAgent } from "./utils/checkNavigationObjectInUserAgent";
import { weatherDescriptions } from "./data/weatherDescriptions";
import { createCurrentUrlWeatherFetching } from "./utils/createCurrentUrlWeatherFetching";
import { createForecastUrlWeatherFetching } from "./utils/createForecastUrlWeatherFetching";
import { createForecastData } from "./utils/createForecastData";
import "./Sinoptik.scss";

export const Sinoptik = ({ language }) => {
    // TODO:
    // !!! Підключити SSL сертифікати для активації всіх функцій
    // 3. Добавить график под прогнозом, чтобы наглядно видеть куда движется температура
    // 4. Добавить алгоритмы анализа погоды, чтобы выдавать реккомендации
    // 5. Додати Лоадер доки завантажується інфо від сервера

    const [isNavigationModuleAvailable, setIsNavigationModuleAvailable] =
        useState(true);
    const [userCoordinates, setUserCoordinates] = useState({});
    const [errorGeolocation, setErrorGeolocation] = useState();

    useEffect(() => {
        // Check if Navigation Object is available in user Agent
        const isNavigationObjectInUserAgent =
            checkNavigationObjectInUserAgent();
        setIsNavigationModuleAvailable(isNavigationObjectInUserAgent);

        if (isNavigationObjectInUserAgent) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let userCoordinates = {};

                    const { latitude, longitude } = position.coords;

                    userCoordinates["latitude"] = latitude;
                    userCoordinates["longitude"] = longitude;

                    setUserCoordinates(userCoordinates);
                },
                (err) => setErrorGeolocation(err.code)
            );
        }
    }, []);

    let isUserAllowPosition = !!Array.from(Object.keys(userCoordinates)).length;
    let urlForFetchingCurrentWeather = null;
    let urlForFetchingForecastWeather = null;

    if (isUserAllowPosition) {
        urlForFetchingCurrentWeather =
            createCurrentUrlWeatherFetching(userCoordinates);
        urlForFetchingForecastWeather =
            createForecastUrlWeatherFetching(userCoordinates);
    }

    const { data: currentWeatherData = [] } = useFetch({
        onSelect: ({ data }) => data,
        url: urlForFetchingCurrentWeather,
    });

    const { data: forecastWeatherData = [] } = useFetch({
        onSelect: ({ data }) => data,
        url: urlForFetchingForecastWeather,
    });

    const forecastDataForRedner = createForecastData({
        data: forecastWeatherData,
        descriptions: weatherDescriptions,
    });

    return (
        <article className="sinoptik-article article">
            <h1
                className="sinoptik-article__title secondary-title"
                children="SINOPTIK v.2.1.0"
            />

            {!isNavigationModuleAvailable && (
                <p className="sinoptik-article__error error-paragraph-primary">
                    {language === "UA" &&
                        "Нажаль, Ваш пристрій не підтримує функцію детекції геолокації ..."}
                    {language === "ENG" &&
                        "Sorry, your device does not support geolocation detection ..."}
                    {language === "RU" &&
                        "К сожалению, Ваше устройство не поддерживает функцию детекции геолокации ..."}
                </p>
            )}

            {errorGeolocation && (
                <p className="sinoptik-article__error error-paragraph-primary">
                    {language === "UA" &&
                        "Нажаль, Ваш браузер заборонив детекцію Вашої геолокації ..."}
                    {language === "ENG" &&
                        "Sorry, your browser have disabled the detection of your geolocation ..."}
                    {language === "RU" &&
                        "К сожалению, Ваш браузер запретил детекцию Вашей геолокации ..."}
                </p>
            )}

            {isNavigationModuleAvailable && !errorGeolocation && (
                <section className="module-article__top-info sinoptik-article__top-info">
                    {
                        <>
                            <CurrentWeather
                                language={language}
                                currentWeatherData={currentWeatherData}
                            />

                            <ForecastWeather
                                language={language}
                                forecastDataForRedner={forecastDataForRedner}
                            />
                        </>
                    }
                </section>
            )}

            <section className="sinoptik-article__description">
                <Description language={language} />
            </section>

            <section className="sinoptik-article__stack">
                <Stacklist language={language} />
            </section>

            <section className="sinoptik-article__time-to-release">
                <p className="sinoptik-article__time-to-release-paragraph">
                    {language === "UA" &&
                        "v.1.0.0 Час реалізації додатку - 4 вечори"}
                    {language === "ENG" &&
                        "v.1.0.0 Application implementation time - 4 evenings"}
                    {language === "RU" &&
                        "v.1.0.0 Время реализации приложения - 4 вечера"}
                </p>
            </section>
        </article>
    );
};

Sinoptik.propTypes = {
    language: PT.string.isRequired,
};

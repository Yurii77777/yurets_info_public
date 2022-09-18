/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import { weatherFetchOptions } from "../settings/weatherFetchOptions";

const {
    apiKey: WEATHER_API_KEY,
    currentWeatherApiUrl: BASE_CURRENT_WEATHER_API_URL,
} = weatherFetchOptions;

export const createCurrentUrlWeatherFetching = (userCoordinates) => {
    const { latitude, longitude } = userCoordinates;

    const URL_FOR_FETCHING_CURRENT_WEATHER = `${BASE_CURRENT_WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&key=${WEATHER_API_KEY}`;

    return URL_FOR_FETCHING_CURRENT_WEATHER;
};

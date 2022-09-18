/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

export const createDescription = (options) => {
    const { data = [], descriptions = [] } = options;

    let result = {};

    if (data.length) {
        const weatherIconCode = data[0].weather.code;
        const appTemp = data[0].app_temp;

        const weatherInfo = descriptions.filter(
            ({ code }) => code === weatherIconCode
        );

        result["currentWeatherDescriptionUa"] =
            weatherInfo[0].uaDescription + ". Відчувається як " + appTemp;
        result["currentWeatherDescriptionEng"] =
            weatherInfo[0].engDescription + ". Feels like " + appTemp;
        result["currentWeatherDescriptionRu"] =
            weatherInfo[0].ruDescription + ". Чувствуется как " + appTemp;
    }

    return result;
};

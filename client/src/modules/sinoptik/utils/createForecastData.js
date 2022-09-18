/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import { getCurrentDate } from "../../../utils/getCurrentDate";

const weekDays = [
    {
        id: 0,
        ua: "Нд",
        eng: "Sun",
        ru: "Вс",
    },
    {
        id: 1,
        ua: "Пн",
        eng: "Mon",
        ru: "Пн",
    },
    {
        id: 2,
        ua: "Вт",
        eng: "Tue",
        ru: "Вт",
    },
    {
        id: 3,
        ua: "Ср",
        eng: "Wed",
        ru: "Ср",
    },
    {
        id: 4,
        ua: "Чт",
        eng: "Thu",
        ru: "Чт",
    },
    {
        id: 5,
        ua: "Пт",
        eng: "Fri",
        ru: "Пт",
    },
    {
        id: 6,
        ua: "Сб",
        eng: "Sat",
        ru: "Сб",
    },
];

/**
 * Function create forecast weather data for each day received by weather API
 * @param {Object} options
 * @returns Array contains ready to render data
 */
export const createForecastData = (options) => {
    const { data = [], descriptions = [] } = options;

    let result = [];

    if (data.length) {
        const { currentDayOfWeek } = getCurrentDate({ getDayOfWeek: true });
        let nextDay = currentDayOfWeek;

        data.forEach((element, i) => {
            if (i !== 0) {
                nextDay < 6 ? (nextDay += 1) : (nextDay = 0);
            }

            const { weather, low_temp, high_temp } = element;
            let forecastEachDayData = {};

            const filteredData = descriptions.filter(
                ({ code }) => code === weather.code
            );
            const { img, uaDescription } = filteredData[0];

            forecastEachDayData["id"] = i;
            i === 0 &&
                (forecastEachDayData["datetime"] = weekDays.filter(
                    ({ id }) => id === currentDayOfWeek
                ));
            i !== 0 &&
                (forecastEachDayData["datetime"] = weekDays.filter(
                    ({ id }) => id === nextDay
                ));
            forecastEachDayData["low_temp"] = low_temp;
            forecastEachDayData["high_temp"] = high_temp;
            forecastEachDayData["img"] = img;
            forecastEachDayData["uaDescription"] = uaDescription;

            result.push(forecastEachDayData);
        });
    }

    return result;
};

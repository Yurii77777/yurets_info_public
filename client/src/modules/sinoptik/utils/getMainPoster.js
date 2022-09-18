/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

/**
 * Function gets code of current weather poster
 * @param {Object} options
 * @returns Current weather image || null
 */
export const getMainPoster = (options) => {
    const { data = [], descriptions = [] } = options;

    let mainPoster = null;

    if (data.length) {
        const weatherIconCode = data[0].weather.code;

        const weatherInfo = descriptions.filter(
            ({ code }) => code === weatherIconCode
        );

        mainPoster = weatherInfo[0].img;
    }

    // TODO: Add else section that returns default poster

    return { mainPoster: mainPoster };
};

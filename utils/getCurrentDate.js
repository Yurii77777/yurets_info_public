/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

/**
 * The function returns the day of the week and/or full date and/or current time, depending on the request.
 * Request is getDayOfWeek: Boolean or getFullDate: Boolean or getTime: Boolean
 * @param {Object} props
 * @returns Object contains currentDayOfWeek (Number) and currentFullDate (String) and currentTime (String)
 */
const getCurrentDate = (props) => {
    const { getDayOfWeek, getFullDate, getTime } = props;
    let currentDayOfWeek = null;
    let currentFullDate = null;
    let currentTime = null;

    const date = new Date();

    getDayOfWeek && (currentDayOfWeek = date.getDay());
    getFullDate &&
        (currentFullDate =
            date.getDate() +
            "." +
            (date.getMonth() + 1) +
            "." +
            date.getFullYear());

    getTime &&
        (currentTime =
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds());

    return { currentDayOfWeek, currentFullDate, currentTime };
};

module.exports = getCurrentDate;

/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

/**
 * Function to format title string
 * it replace all digits and dots on apps titles
 * or trim spaces on other titles
 * @param {String} title
 * @returns Formated String
 */
export const formatArticleTitle = (title = "") => {
    let result = null;

    // Is digits in the string?
    const isAppTitle = /\d/.test(title);

    if (!isAppTitle) {
        result = title.trim();
    } else if (isAppTitle) {
        const titleWithoutDigitsAndDots = title
            .replace(/\d/g, "")
            .replace(/\./g, "");

        const formatedTitle = titleWithoutDigitsAndDots
            .substring(0, titleWithoutDigitsAndDots.length - 1)
            .trim();

        result = formatedTitle;
    } else {
        result = title.trim();
    }

    return result;
};

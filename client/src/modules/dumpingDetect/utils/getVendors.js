/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

/**
 * Function gets Vendor name from Catalog local file
 * @param {Array} props
 * @returns Array of Strings
 */
export const getVendors = (props) => {
    let result = null;

    if (!props.length) {
        return result;
    } else {
        result = props.map((el) => {
            for (let key in el) {
                return key[0].toUpperCase() + key.slice(1);
            }
        });
    }

    return result;
};

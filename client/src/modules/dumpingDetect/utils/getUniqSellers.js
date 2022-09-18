/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

export const getUniqSellers = (receivedData) => {
    let result = [];

    for (let i = 0; i < receivedData.length; i++) {
        const productItem = receivedData[i];
        const { sellerName } = productItem;

        !result.includes(sellerName) && result.push(sellerName);
    }

    return result;
};

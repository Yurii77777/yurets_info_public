/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const createMessageString = (options) => {
    const { productName, rrp, currentPrice, productUrl } = options;

    return `${productName} | РРЦ: ${rrp} | Пот. ціна: ${currentPrice} | Знижка: ${Math.floor(
        (1 - currentPrice / rrp) * 100
    )}%\n URL: ${productUrl}\n`;
};

const createMessageForDopomoshnychok = (options) => {
    const {
        sellerName,
        currentFullDate,
        productsQtyInStock,
        dumpingProducts = [],
    } = options;

    let result = [];
    const dumpingProductsQty = dumpingProducts.length;

    const headerMessage = `<b>Продавець:</b> ${sellerName}\n <b>Дата оновлення цін:</b> ${currentFullDate}\n <b>К-сть позицій в наявності:</b> ${productsQtyInStock}\n <b>К-сть позицій в демпінгу:</b> ${dumpingProductsQty}\n - - - \n`;
    result.push(headerMessage);

    let message = "";

    if (dumpingProductsQty < 11) {
        for (let i = 0; i < dumpingProducts.length; i++) {
            const { productName, rrp, currentPrice, productUrl } =
                dumpingProducts[i];

            const messageItem = createMessageString({
                productName,
                rrp,
                currentPrice,
                productUrl,
            });
            message += messageItem;
        }

        result.push(message);
    }

    if (dumpingProductsQty > 11) {
        for (let i = 0; i < dumpingProducts.length; i++) {
            const { productName, rrp, currentPrice, productUrl } =
                dumpingProducts[i];

            if (i % 10 === 0 && message !== "") {
                result.push(message);
                message = "";
            }

            const messageItem = createMessageString({
                productName,
                rrp,
                currentPrice,
                productUrl,
            });
            message += messageItem;
        }

        message !== "" && result.push(message);
    }

    return result;
};

module.exports = createMessageForDopomoshnychok;

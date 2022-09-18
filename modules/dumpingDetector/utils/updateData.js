/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const createProductItemInDb = require("./createProductItemInDb");
const getDumpingProducts = require("./getDumpingProducts");
const sendmessagesDDTgBot = require("./sendmessagesDDTgBot");
const catalog = require("../data/catalog");
const createMessageForDopomoshnychok = require("./createMessageForDopomoshnychok");

const updateData = (options) => {
    let { data = [], sellerName, currentFullDate } = options;

    for (let i = 0; i < data.length; i++) {
        const {
            productId,
            productName,
            currentPrice,
            inStock,
            sellerName,
            lastUpdateDate,
            productUrl,
            sellerUrl,
            productVendor,
        } = data[i];

        i !== 0 &&
            createProductItemInDb({
                productId,
                productName,
                currentPrice,
                inStock,
                sellerName,
                lastUpdateDate,
                productUrl,
                sellerUrl,
                productVendor,
            });
    }

    const dumpingProducts = getDumpingProducts({
        catalog,
        data,
    });
    const isDumpingProducts = !!dumpingProducts.length;

    if (isDumpingProducts) {
        const productsQtyInStock = data.filter(
            ({ inStock }) => inStock === true
        ).length;

        const messagesForDopomoshnychok = createMessageForDopomoshnychok({
            sellerName,
            currentFullDate,
            productsQtyInStock,
            dumpingProducts,
        });

        sendmessagesDDTgBot({
            messages: messagesForDopomoshnychok,
            sellerName,
        });
    }
};

module.exports = updateData;

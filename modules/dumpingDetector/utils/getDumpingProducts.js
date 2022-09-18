/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const getProductsData = require("./getProductsData");

const getDumpingProducts = (options) => {
    const { catalog, data } = options;
    let result = [];

    try {
        const productsData = getProductsData(catalog);

        for (let i = 0; i < data.length; i++) {
            let productItem = data[i];
            const { productId, inStock, currentPrice } = productItem;

            if (inStock) {
                const foundProductItem = productsData.filter(
                    ({ id }) => id === productId
                );
                const { rrp } = foundProductItem[0];

                if (currentPrice < rrp) {
                    productItem["rrp"] = rrp;
                    result.push(productItem);
                }
            }
        }
    } catch (error) {
        console.log("[error.message]", error.message);
    }

    return result;
};

module.exports = getDumpingProducts;

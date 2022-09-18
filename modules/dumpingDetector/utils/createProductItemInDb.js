/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

const Product = require("../../../models/Product");

const createProductItemInDb = async (options) => {
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
    } = options;

    try {
        const product = new Product({
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

        await product.save();
    } catch (error) {
        console.log("[ERROR: The product was not created]", error.message);
    }
};

module.exports = createProductItemInDb;

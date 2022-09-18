/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

const { Schema, model } = require("mongoose");

const schema = new Schema({
    productId: { type: Number, required: true, unique: false },
    productName: { type: String, required: true, unique: false },
    productVendor: { type: String, required: false, unique: false },
    productUrl: { type: String, required: false, unique: false },
    currentPrice: { type: Number, required: true, unique: false },
    inStock: { type: Boolean, required: true, unique: false },
    lastUpdateDate: { type: String, required: true, unique: false },
    sellerName: { type: String, required: true, unique: false },
    sellerUrl: { type: String, required: true, unique: false },
});

module.exports = model("Product", schema);

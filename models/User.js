/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

const { Schema, model } = require("mongoose");

const schema = new Schema({
    chatId: { type: Number, required: true, unique: true },
    userRole: { type: String, required: true, unique: false },
    ddSubscriptions: { type: Array, required: false, unique: false },
});

module.exports = model("User", schema);

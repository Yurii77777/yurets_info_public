/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const User = require("../../../models/User");

const findUserData = async (options) => {
    const { searchBy, chatId } = options;
    let result = null;

    if (searchBy === "chatId") {
        result = await User.find({
            chatId,
        });
    }

    return result;
};

module.exports = findUserData;

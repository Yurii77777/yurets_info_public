/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const User = require("../../../models/User");
const findUserData = require("./findUserData");

const createNewUser = async (options = {}) => {
    const { iventTitle, chatId, userRole = "user" } = options;

    const ddSubscriptions = [];
    ddSubscriptions.push(iventTitle);

    const user = new User({ chatId, userRole, ddSubscriptions });
    await user.save();

    const foundUserData = await findUserData({
        searchBy: "chatId",
        chatId,
    });

    const result = !!foundUserData.length;

    return result;
};

module.exports = createNewUser;

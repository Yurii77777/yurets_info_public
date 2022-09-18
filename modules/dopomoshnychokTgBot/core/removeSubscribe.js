/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const findUserData = require("../middlewares/findUserData");
const createUserSubscriptionsList = require("../utils/createUserSubscriptionsList");

const removeSubscribe = async (options = {}) => {
    const { ctx } = options;

    const chatId = ctx.chat.id;

    try {
        const foundUserData = await findUserData({
            searchBy: "chatId",
            chatId,
        });

        const userData = !!foundUserData.length;
        !userData && ctx.reply("Так нічого видаляти ... 😉");

        if (userData) {
            const { ddSubscriptions } = foundUserData[0];

            const userSubscriptionsList = await createUserSubscriptionsList({
                flag: "remove",
                ddSubscriptions,
            });

            ctx.reply(userSubscriptionsList, { parse_mode: "html" });
        }
    } catch (error) {
        ctx.reply(
            "Упс-с-с! 😅\n База даних не відповідає на мої запити ... \n Прошу повторити запит ще раз! 🤷‍♂️"
        );
    }
};

module.exports = removeSubscribe;

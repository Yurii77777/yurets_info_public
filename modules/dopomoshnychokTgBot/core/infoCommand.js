/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const findUserData = require("../middlewares/findUserData");
const createUserSubscriptionsList = require("../utils/createUserSubscriptionsList");

const infoCommand = async (options = {}) => {
    const { ctx } = options;

    const chatId = ctx.chat.id;

    try {
        const foundUserData = await findUserData({
            searchBy: "chatId",
            chatId,
        });
        const userData = !!foundUserData.length;

        !userData &&
            ctx.reply(
                "Нажаль, я не знайшов твого профілю в базі підписок ... 🤷‍♂️\n Рекомендую розпочати з команди /start або /help"
            );

        if (userData) {
            const { ddSubscriptions } = foundUserData[0];
            const isSubscriptions = !!ddSubscriptions.length;

            !isSubscriptions &&
                ctx.reply(
                    "Нажаль, я не знайшов підписок в твоєму профілі ... 🤷‍♂️\n Рекомендую розпочати з команди /start або /help"
                );

            if (isSubscriptions) {
                const message = await createUserSubscriptionsList({
                    flag: "get",
                    ddSubscriptions,
                });

                ctx.reply(message, { parse_mode: "html" });
            }
        }
    } catch (error) {
        ctx.reply(
            "Упс-с-с! 😅\n База даних не відповідає на мої запити ... \n Прошу повторити запит ще раз! 🤷‍♂️"
        );
    }
};

module.exports = infoCommand;

/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const findUserData = require("../middlewares/findUserData");
const createNewUser = require("../middlewares/createNewUser");
const upadeUserSubscriptions = require("../middlewares/upadeUserSubscriptions");

const subscribeDDoneItem = async (options = {}) => {
    const { ctx, userRole = "user", iventTitle, flag = "oneItem" } = options;
    const chatId = ctx.chat.id;

    try {
        const foundUserData = await findUserData({
            searchBy: "chatId",
            chatId,
        });
        const userData = !!foundUserData.length;

        if (!userData) {
            const isNewUserWasCreated = await createNewUser({
                chatId,
                userRole,
                iventTitle,
            });

            !isNewUserWasCreated &&
                ctx.reply(
                    "Щось база тупить, не можу створити новий профіль 👤 \nДавай спробуємо ще раз!"
                );

            isNewUserWasCreated &&
                flag === "oneItem" &&
                ctx.reply("Список твоїх підписок успішно оновлено! 👍");

            isNewUserWasCreated &&
                flag === "all" &&
                ctx.reply(
                    "Ну це сильно! 💪\n Підписка на всіх контрагентів у модулі DD оформлена.\n Тримайся! ✊\n\n Кількість контрагентів постійно збільшується!"
                );
        }

        userData &&
            upadeUserSubscriptions({
                personData: foundUserData[0],
                ctx,
                chatId,
                iventTitle,
            });
    } catch (error) {
        ctx.reply(
            "Прикро, але щось пішло не так 😞 \nДавай спробуємо оформити підписку знову!"
        );
    }
};

module.exports = subscribeDDoneItem;

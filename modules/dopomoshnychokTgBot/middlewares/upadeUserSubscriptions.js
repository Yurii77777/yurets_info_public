/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const User = require("../../../models/User");

const upadeUserSubscriptions = async (options = {}) => {
    const { personData, ctx, chatId, iventTitle } = options;

    const { ddSubscriptions = [] } = personData;
    const isExists = ddSubscriptions.includes(iventTitle);

    if (isExists) {
        ctx.reply(
            "Така підписка у тебе вже оформлена! 🙅‍♂️\n Не варто дублювати, буде забагато зайвих повідомлень ;)"
        );
    } else {
        const { acknowledged } = await User.updateOne(
            { chatId: chatId },
            { $push: { ddSubscriptions: iventTitle } }
        );

        acknowledged && ctx.reply("Список твоїх підписок успішно оновлено! 👍");
        !acknowledged &&
            ctx.re(
                "Щось пішло не так, як гадалося ... 😅\n Давай спробуємо ще раз!"
            );
    }
};

module.exports = upadeUserSubscriptions;

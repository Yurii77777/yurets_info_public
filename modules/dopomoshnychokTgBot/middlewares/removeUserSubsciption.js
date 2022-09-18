/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const User = require("../../../models/User");

const removeUserSubsciption = async (options = {}) => {
    const { ctx, iventTitle } = options;
    let result = false;

    const chatId = ctx.chat.id;

    try {
        const { acknowledged } = await User.updateOne(
            { chatId: chatId },
            { $pull: { ddSubscriptions: iventTitle } }
        );

        acknowledged && ctx.reply("Підписку успішно видалено 🗑");
        !acknowledged &&
            ctx.re(
                "Щось пішло не так, як гадалося ... 😅\n Давай спробуємо ще раз!"
            );
    } catch (error) {
        ctx.reply(
            "Упс-с-с! 😅\n База даних не відповідає на мої запити ... \n Прошу повторити запит ще раз! 🤷‍♂️"
        );
    }

    return result;
};

module.exports = removeUserSubsciption;

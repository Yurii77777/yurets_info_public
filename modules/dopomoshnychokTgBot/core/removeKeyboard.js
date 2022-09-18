/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

const removeKeyboard = (options = {}) => {
    const { ctx } = options;

    ctx.reply("Видалив клавіатуру", {
        reply_markup: {
            remove_keyboard: true,
        },
    });

    setTimeout(() => {
        ctx.reply("Ну і що будемо робити? 🤨\n Запускай знову /start ;)");
    }, 1000);
};

module.exports = removeKeyboard;

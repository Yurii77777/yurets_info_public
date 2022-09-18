/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const bot = require("../core/core");

const ddMessages = async (options) => {
    const { chatId, type, infoMsg } = options;

    try {
        type
            ? await bot.telegram.sendMessage(
                  chatId,
                  `Тип: ${type}.\n Повідомлення: ${infoMsg}`,
                  { parse_mode: "html" }
              )
            : await bot.telegram.sendMessage(
                  chatId,
                  `Повідомлення: ${infoMsg}`,
                  { parse_mode: "html" }
              );
    } catch (error) {
        console.log(
            `Не змін відправити повідомлення користувачу ${chatId}. ERROR: ${error.message}`
        );
    }
};

module.exports = ddMessages;

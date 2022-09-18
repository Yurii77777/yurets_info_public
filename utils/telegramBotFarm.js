/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const dopomoshnychokTgBot = require("../modules/dopomoshnychokTgBot/core/eventsHandlers");

const telegramBotFarm = (options = {}) => {
    const { dopomoshnychok } = options;

    dopomoshnychok && dopomoshnychokTgBot();
};

module.exports = telegramBotFarm;

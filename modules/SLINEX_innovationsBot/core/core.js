/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

const config = require("config");
const TelegramBot = require("node-telegram-bot-api");

const token = config.get("slinexInnovationsApiKey");
const bot = new TelegramBot(token, { polling: true });

module.exports = bot;

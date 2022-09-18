/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

const config = require("config");
const { Telegraf } = require("telegraf");

const token = config.get("telegramApiKey");
const bot = new Telegraf(token);

module.exports = bot;

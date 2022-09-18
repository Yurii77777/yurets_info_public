/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const sellersForUpd = require("../../dumpingDetector/core/sellersForUpd");
const createDDSubscriptionsList = require("../utils/createDDSubscriptionsList");

const helpCommand = (options = {}) => {
    const { ctx } = options;

    const ddSubscriptionsList = createDDSubscriptionsList(sellersForUpd);

    ctx.reply(
        `📉 <b>Dumping Detector (DD)</b> - детектор демпінгу по <strong>ТМ SLINEX</strong> в Україні!\nРаз в тиждень відбувається сканування цін нашим крутим модулем, виводяться позиції в демпінгу відносно встановленого РРЦ вендором.\nІ потім я надсилаю позиції з демпінгу кожному, хто оформив відповідну підписку!\n\n 
    ~ ~ ~ \n\n 
    <i>Доступні такі види підписок:</i>\n/all_DD - підписатися на всіх контрагентів; ${ddSubscriptionsList}`,
        { parse_mode: "html" }
    );
};

module.exports = helpCommand;

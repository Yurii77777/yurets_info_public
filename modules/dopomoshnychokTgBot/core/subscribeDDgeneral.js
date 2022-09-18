/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const createDDSubscriptionsList = require("../utils/createDDSubscriptionsList");
const sellersForUpd = require("../../dumpingDetector/core/sellersForUpd");

const subscribeDDgeneral = (options = {}) => {
    const { ctx } = options;

    const ddSubscriptionsList = createDDSubscriptionsList(sellersForUpd);

    setTimeout(() => {
        ctx.reply("✉️ Обери варіант підписки:\n", {
            reply_markup: {
                remove_keyboard: true,
            },
        });

        ctx.reply(
            `/all_DD - підписатися на всіх контрагентів; ${ddSubscriptionsList}`
        );
    }, 1000);
};

module.exports = subscribeDDgeneral;

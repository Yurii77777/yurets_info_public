/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const startCommand = (options = {}) => {
    const { ctx } = options;

    // const chatId = msg.chat.id;
    const { first_name } = ctx.from;

    ctx.reply(`Привіт, ${first_name}! 🤝`);

    setTimeout(() => {
        ctx.reply(
            "Я бот <strong>Допомошничок</strong>, допоможу тобі виконати налаштування персоналізованих повідомлень 🤘",
            { parse_mode: "html" }
        );
    }, 1000);

    setTimeout(() => {
        ctx.reply(
            "Спочатку обери сервіс, з якого я буду слати тобі повідомлення."
        );
    }, 3000);

    setTimeout(() => {
        ctx.reply("Список доступних сервісів:", {
            reply_markup: {
                keyboard: [["Dumping Detector (DD)"], ["Прибрати клавіатуру"]],
            },
        });
    }, 6000);
};

module.exports = startCommand;

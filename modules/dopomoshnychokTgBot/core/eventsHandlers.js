/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const bot = require("./core");
const startCommand = require("./startCommand");
const helpCommand = require("./helpCommand");
const infoCommand = require("./infoCommand");
const removeSubscribe = require("./removeSubscribe");
const removeKeyboard = require("./removeKeyboard");
const subscribeDDgeneral = require("./subscribeDDgeneral");
const subscribeDDoneItem = require("./subscribeDDoneItem");
const removeUserSubsciption = require("../middlewares/removeUserSubsciption");

const eventsHandlers = () => {
    bot.telegram.setMyCommands([
        {
            command: "/start",
            description: "для старту, все логічно 😉",
        },
        {
            command: "/help",
            description: "список доступних підписок 📨",
        },
        {
            command: "/info",
            description: "Отримати список Ваших підписок 🗒",
        },
        {
            command: "/remove",
            description: "Видалити підписку (відписатися) 📭",
        },
    ]);

    // Menu commands
    bot.start((ctx) => startCommand({ ctx }));
    bot.help((ctx) => helpCommand({ ctx }));
    bot.hears(/\/info/, (ctx) => infoCommand({ ctx }));
    bot.hears(/\/remove/, (ctx) => removeSubscribe({ ctx }));

    // Keyboard commands
    bot.hears("Прибрати клавіатуру", (ctx) => removeKeyboard({ ctx }));
    bot.hears("Dumping Detector (DD)", (ctx) => subscribeDDgeneral({ ctx }));

    // Other commands
    bot.hears("/all_DD", (ctx) =>
        subscribeDDoneItem({
            ctx,
            userRole: "user",
            iventTitle: "/all_DD",
            flag: "all",
        })
    );
    bot.hears("/all_DD_admin", (ctx) =>
        subscribeDDoneItem({
            ctx,
            userRole: "admin",
            iventTitle: "/all_DD",
            flag: "all",
        })
    );

    bot.use(async (ctx) => {
        const { message } = ctx;

        let isUser = /^\/?([a-zA-Z]*?(_DD)+$)/.test(message.text);
        let isAdmin = /^\/?([a-zA-Z]*?(_DD_admin)+$)/.test(message.text);
        let isNeedRemove = /^\/?([a-zA-Z]*?(_DD_remove)+$)/.test(message.text);

        const command =
            message.text.charAt(0) === "/"
                ? message.text.replace("_admin", "")
                : "/" + message.text.replace("_admin", "");

        const removeCommand = message.text.replace("_remove", "");

        message.text !== "/all_DD" &&
            message.text !== "all_DD_admin" &&
            isUser &&
            subscribeDDoneItem({
                ctx,
                userRole: "user",
                iventTitle: command,
                flag: "oneItem",
            });

        message.text !== "/all_DD" &&
            message.text !== "all_DD_admin" &&
            isAdmin &&
            subscribeDDoneItem({
                ctx,
                userRole: "admin",
                iventTitle: command,
                flag: "oneItem",
            });

        isNeedRemove &&
            removeUserSubsciption({ ctx, iventTitle: removeCommand });
    });

    bot.launch();
};

module.exports = eventsHandlers;

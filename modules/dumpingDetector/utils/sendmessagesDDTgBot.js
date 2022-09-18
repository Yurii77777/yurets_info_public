/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const User = require("../../../models/User");
const ddMessages = require("../../dopomoshnychokTgBot/utils/ddMessages");

const sendmessagesDDTgBot = async (options) => {
    const { messages = [], sellerName } = options;

    const searchValue = `/${sellerName}_DD`;

    const foundUsersByOneParameter = await User.find({
        ddSubscriptions: searchValue,
    });
    const foundUsersByAllValue = await User.find({
        ddSubscriptions: "all_DD",
    });

    const finalSearchResult = foundUsersByOneParameter
        .concat(foundUsersByAllValue)
        .filter(
            (el, i, arr) =>
                arr.findIndex((value) => value.chatId === el.chatId) === i
        );

    const isUsersToMailing = !!finalSearchResult.length;
    const isTwoItems = messages.length === 2;

    if (isUsersToMailing) {
        for (let i = 0; i < foundUsers.length; i++) {
            const { chatId } = foundUsers[i];

            if (isTwoItems) {
                const message = messages[0] + messages[1];

                await ddMessages({
                    chatId,
                    infoMsg: message,
                });
            }

            if (!isTwoItems) {
                let messageCount = 1;
                const messagesLength = messages.length - 1;

                for (let i = 1; i < messages.length; i++) {
                    const headerMessage = messages[0];

                    const message =
                        headerMessage +
                        `Повідомлення №${messageCount} із ${messagesLength}\n` +
                        messages[i];

                    await ddMessages({
                        chatId,
                        infoMsg: message,
                    });

                    messageCount += 1;
                }
            }
        }
    }
};

module.exports = sendmessagesDDTgBot;

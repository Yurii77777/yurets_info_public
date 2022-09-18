/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const createUserSubscriptionsList = async (optins = {}) => {
    const { flag, ddSubscriptions } = optins;
    let result = null;

    if (flag === "get") {
        const iventsList = ddSubscriptions.reduce(
            (a, b) => `- ${a}\n` + `- ${b}\n`
        );

        result = `Ось що я знайшов🔎\n\n Модуль 📉 <strong>'Dumping Detector ( DD)'</strong> \n Оформлені такі підписки:\n ${iventsList}`;
    }

    if (flag === "remove") {
        const iventsList = ddSubscriptions
            .map((el) => el + "_remove")
            .join("\n");

        result = `Ось що я знайшов🔎\n\n Модуль 📉 <strong>'Dumping Detector ( DD)'</strong> \n Доступні <u>до видалення</u> такі підписки:\n ${iventsList}`;
    }

    return result;
};

module.exports = createUserSubscriptionsList;

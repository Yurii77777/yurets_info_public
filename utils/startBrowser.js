/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const puppeteer = require("puppeteer");

const User = require("../models/User");
const ddMessages = require("../modules/dopomoshnychokTgBot/utils/ddMessages");

const startBrowser = async (options = {}) => {
    const { sellerName } = options;
    let browserInstance;

    try {
        console.log("Opening the browser......");
        browserInstance = await puppeteer.launch({
            timeout: 120000,
            headless: true,
            args: ["--disable-setuid-sandbox", "--no-sandbox"],
            ignoreHTTPSErrors: true,
        });
    } catch (error) {
        console.log(`Browser doesn't start: ${error}`);

        const foundUsers = await User.find({
            userRole: "admin",
        });

        const isUsersToMailing = !!foundUsers.length;

        if (isUsersToMailing) {
            for (let i = 0; i < foundUsers.length; i++) {
                const { chatId } = foundUsers[i];

                await ddMessages({
                    chatId,
                    type: "ERROR__DD",
                    infoMsg: `При скануванні продавця ${sellerName} браузер не запустився! ERROR: ${error}`,
                });
            }
        }
    }

    return browserInstance;
};

module.exports = startBrowser;

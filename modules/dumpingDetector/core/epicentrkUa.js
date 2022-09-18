/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const User = require("../../../models/User");
const ddMessages = require("../../dopomoshnychokTgBot/utils/ddMessages");
const updateData = require("../utils/updateData");
const productsEpicentrkUa = require("../data/productsEpicentrkUa");

const epicentrkUa = async (options) => {
    const { browser, sellerName, currentFullDate } = options;
    const { sellerProducts, sellerUrl } = productsEpicentrkUa;
    let data = [];

    const scrapeCurrentPage = async (
        browser,
        link,
        id,
        sellerName,
        productName,
        currentFullDate,
        sellerUrl,
        productVendor
    ) => {
        try {
            let dataObj = {};

            let page = await browser.newPage();
            await page.setDefaultNavigationTimeout(0);
            await page.goto(link);
            await page.waitForSelector("main");

            dataObj["productId"] = id;
            dataObj["sellerName"] = sellerName;
            dataObj["productName"] = productName;
            dataObj["lastUpdateDate"] = currentFullDate;
            dataObj["productUrl"] = link;
            dataObj["sellerUrl"] = sellerUrl;
            dataObj["productVendor"] = productVendor;

            try {
                dataObj["currentPrice"] = await page.$eval(
                    ".p-price__main",
                    (text) => text.textContent.replace(/(\D)/gm, "")
                );
            } catch (error) {
                dataObj["currentPrice"] = 0;
            }

            try {
                const isInStock = await page.$eval(".p-block__status", (text) =>
                    text.textContent.trim()
                );

                isInStock === "В наявності"
                    ? (dataObj["inStock"] = true)
                    : (dataObj["inStock"] = false);
            } catch (error) {
                dataObj["inStock"] = false;
            }

            data.push(dataObj);

            await page.close();
        } catch (error) {
            console.log("[error]", error);

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
                        infoMsg: `Продавець - ${sellerName}. Помилка вивантаження інформації по позиції ${productName}, дата ${currentFullDate}, системне повідовлення: ${error}`,
                    });
                }
            }
        }
    };

    try {
        data.push({ sellerName });

        for (let item in sellerProducts) {
            const productItem = sellerProducts[item];
            const { productUrl, productId, productName, productVendor } =
                productItem;

            productUrl !== "" &&
                (await scrapeCurrentPage(
                    browser,
                    productUrl,
                    productId,
                    sellerName,
                    productName,
                    currentFullDate,
                    sellerUrl,
                    productVendor
                ));
        }
    } catch (e) {
        console.log("[e]", e);
    }

    updateData({ data, sellerName, currentFullDate });
};

module.exports = epicentrkUa;

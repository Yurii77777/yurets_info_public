/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const Product = require("../../../models/Product");
const User = require("../../../models/User");

const startBrowser = require("../../../utils/startBrowser");
const ddMessages = require("../../dopomoshnychokTgBot/utils/ddMessages");

const bezpekaClub = require("./bezpeka.club");
const rozetka = require("./rozetka");
const nadzorUa = require("./nadzorUa");
const fixerComUa = require("./fixerComUa");
const elmirUa = require("./elmir.ua");
const forterComUa = require("./forter.com.ua");
const varioComUa = require("./vario.com.ua");
const megamarket = require("./megamarket");
const moyo = require("./moyo");
const CamertonComUa = require("./CamertonComUa");
const sicuroComUa = require("./sicuroComUa");
const bezpekaShopCom = require("./bezpekaShopCom");
const DS = require("./DS");
const videoKomplektComUa = require("./videoKomplektComUa");
const bezpekaSystems = require("./bezpekaSystems");
const prodavakaUa = require("./prodavakaUa");
const smartipComUa = require("./smartipComUa");
const repkaUa = require("./repkaUa");
const clickUa = require("./clickUa");
const mtaUa = require("./mtaUa");
const comtradeUa = require("./comtradeUa");
const canUa = require("./canUa");
const comtradingUa = require("./comtradingUa");
const exeUa = require("./exeUa");
const enkoComUa = require("./enkoComUa");
const ubiquitiOrgUa = require("./ubiquitiOrgUa");
const alloUa = require("./alloUa");
const brainComUa = require("./brainComUa");
const itboxUa = require("./itboxUa");
const yUa = require("./yUa");
const rekordmarketComUa = require("./rekordmarketComUa");
const stylusUa = require("./stylusUa");
const optmagComUa = require("./optmagComUa");
const epicentrkUa = require("./epicentrkUa");

const getData = async (options = {}) => {
    let { sellersForUpd, currentFullDate } = options;
    let isUpdating = false;
    let browser = null;
    isUpdating = true;

    try {
        for (let i = 0; i < sellersForUpd.length; i++) {
            const currentSeller = sellersForUpd[i];

            const foundProducts = await Product.find({
                sellerName: currentSeller,
                lastUpdateDate: currentFullDate,
            });

            const isProductsWasUpdated = !!foundProducts.length;

            if (!isProductsWasUpdated) {
                browser = await startBrowser({
                    sellerName: currentSeller,
                });

                if (browser) {
                    currentSeller === "bezpekaClub" &&
                        (await bezpekaClub({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "rozetka" &&
                        (await rozetka({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "nadzorUa" &&
                        (await nadzorUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "fixerComUa" &&
                        (await fixerComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "elmirUa" &&
                        (await elmirUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "forterComUa" &&
                        (await forterComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "varioComUa" &&
                        (await varioComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "megamarket" &&
                        (await megamarket({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "MOYO" &&
                        (await moyo({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "CamertonComUa" &&
                        (await CamertonComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "sicuroComUa" &&
                        (await sicuroComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "bezpekaShopCom" &&
                        (await bezpekaShopCom({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "DS" &&
                        (await DS({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "videoKomplektComUa" &&
                        (await videoKomplektComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "bezpekaSystems" &&
                        (await bezpekaSystems({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "prodavakaUa" &&
                        (await prodavakaUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "smartipComUa" &&
                        (await smartipComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "repkaUa" &&
                        (await repkaUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "clickUa" &&
                        (await clickUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "mtaUa" &&
                        (await mtaUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "comtradeUa" &&
                        (await comtradeUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "canUa" &&
                        (await canUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "comtradingUa" &&
                        (await comtradingUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "exeUa" &&
                        (await exeUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "enkoComUa" &&
                        (await enkoComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "ubiquitiOrgUa" &&
                        (await ubiquitiOrgUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "alloUa" &&
                        (await alloUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "brainComUa" &&
                        (await brainComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "itboxUa" &&
                        (await itboxUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "yUa" &&
                        (await yUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "rekordmarketComUa" &&
                        (await rekordmarketComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "stylusUa" &&
                        (await stylusUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "optmagComUa" &&
                        (await optmagComUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));

                    currentSeller === "epicentrkUa" &&
                        (await epicentrkUa({
                            browser,
                            sellerName: currentSeller,
                            currentFullDate,
                        }));
                }
                console.log(`DD. Дані оновлено!`);
            }

            browser && (await browser.close());
        }
    } catch (error) {
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
                    infoMsg: `Глобальна помилка оновлення даних в модулі DD функція getData! ${error.message}`,
                });
            }
        }

        console.log("[error]", error.message);
    } finally {
        browser && (await browser.close());
        isUpdating = false;
    }

    return isUpdating;
};

module.exports = getData;

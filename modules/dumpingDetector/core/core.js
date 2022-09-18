/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const config = require("config");

const getCurrentDate = require("../../../utils/getCurrentDate");
const getData = require("./getData");
const sellersForUpd = require("./sellersForUpd");

const core = () => {
    const DAY_FOR_UPDATE = config.get("dayForUpdateDumpingDetectorPrices");
    let isUpdating = false;

    setInterval(
        () => {
            const { currentDayOfWeek, currentFullDate } = getCurrentDate({
                getDayOfWeek: true,
                getFullDate: true,
            });

            if (currentDayOfWeek === DAY_FOR_UPDATE && !isUpdating) {
                isUpdating = true;

                isUpdating = getData({
                    sellersForUpd,
                    currentFullDate,
                });
            }
        },
        // 600000
        3600000
    );

    const { currentDayOfWeek, currentFullDate } = getCurrentDate({
        getDayOfWeek: true,
        getFullDate: true,
    });

    if (currentDayOfWeek === DAY_FOR_UPDATE && !isUpdating) {
        isUpdating = true;

        isUpdating = getData({
            sellersForUpd,
            currentFullDate,
        });
    }
};

module.exports = core;

/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import React from "react";
import PT from "prop-types";

import "./TopInfo.scss";

export const TopInfo = ({
    language,
    vendors,
    lastUpdateDate,
    productsQty,
    sellersQty,
}) => (
    <section className="module-article__top-info">
        <div className="module-article__vendor">
            <p className="module-article__vendor-paragraph">
                {language === "UA" && "Бренд(и): "}
                {language === "ENG" && "Vendor(s): "}
                {language === "RU" && "Бренд(ы): "}
            </p>
            <p className="module-article__vendor-name">{vendors.slice(", ")}</p>
        </div>
        <div className="module-article__upd-date">
            <p className="module-article__upd-date-paragraph">
                {language === "UA" && "Дата оновлення цін: "}
                {language === "ENG" && "Price update date: "}
                {language === "RU" && "Дата обновления цен: "}
            </p>
            <p className="module-article__vendor-name">{lastUpdateDate}</p>
        </div>
        <div className="module-article__products-qty">
            <p className="module-article__products-qty-paragraph">
                {language === "UA" && "Товарів в каталозі: "}
                {language === "ENG" && "Products in the catalog: "}
                {language === "RU" && "Товаров в каталоге: "}
            </p>
            <p className="module-article__vendor-name">{productsQty}</p>
        </div>
        <div className="module-article__products-qty">
            <p className="module-article__products-qty-paragraph">
                {language === "UA" && "Продавців: "}
                {language === "ENG" && "Sellers: "}
                {language === "RU" && "Продавцов: "}
            </p>
            <p className="module-article__vendor-name">{sellersQty}</p>
        </div>
    </section>
);

TopInfo.propTypes = {
    language: PT.string.isRequired,
    vendors: PT.array.isRequired,
    lastUpdateDate: PT.string.isRequired,
    productsQty: PT.number.isRequired,
    sellersQty: PT.number.isRequired,
};

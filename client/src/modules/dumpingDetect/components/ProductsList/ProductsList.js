/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import PT from "prop-types";

import "./ProductsList.scss";

export const ProductsList = ({ language, productsData }) => (
    <ul className="module-article__products-list">
        <li className="module-article__products-item-header" key={0}>
            <span>№</span>
            <span>
                {language === "UA" && "Модель"}
                {language === "ENG" && "Product"}
                {language === "RU" && "Модель"}
            </span>
            <span>
                {language === "UA" && "РРЦ, грн"}
                {language === "ENG" && "RRP, uah"}
                {language === "RU" && "РРЦ, грн"}
            </span>
        </li>

        {productsData.map((product, i) => {
            const { productName, rrp } = product;

            return (
                <li className="module-article__products-item" key={i + 1}>
                    <span>{i + 1}</span> <span>{productName}</span>{" "}
                    <span>{rrp}</span>
                </li>
            );
        })}
    </ul>
);

ProductsList.propTypes = {
    language: PT.string.isRequired,
    productsData: PT.array.isRequired,
};

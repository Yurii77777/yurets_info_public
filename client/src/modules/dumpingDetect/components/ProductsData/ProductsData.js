/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import PT from "prop-types";

import "./ProductsData.scss";

export const ProductsData = ({
    language,
    productsDataForRender,
    productsData,
}) =>
    productsDataForRender.length &&
    productsDataForRender.map(({ sellerName, sellerProducts }, i) => {
        return (
            <>
                <ul className="module-article__products-list prices" key={i}>
                    <li className="module-article__products-seller-header">
                        {sellerName}
                    </li>

                    <li className="module-article__products-seller-subheader">
                        <span>
                            {language === "UA" && "Поп. ціна"}
                            {language === "ENG" && "Prev. price"}
                            {language === "RU" && "Пред. цена"}
                        </span>
                        <span>
                            {language === "UA" && "Пот. ціна"}
                            {language === "ENG" && "Curr. price"}
                            {language === "RU" && "Тек. цена"}
                        </span>
                        <span>
                            {language === "UA" && "Наявн."}
                            {language === "ENG" && "InStock"}
                            {language === "RU" && "Налич."}
                        </span>
                    </li>

                    {sellerProducts.length &&
                        sellerProducts.map(
                            ({
                                productId,
                                currentPrice,
                                lastPrice,
                                inStock,
                                productUrl,
                            }) => {
                                const availabilityUa = inStock ? "Так" : "Ні";
                                const availabilityEng = inStock ? "Yes" : "No";
                                const availabilityRu = inStock ? "Да" : "Нет";

                                const filteredProduct = productsData.filter(
                                    ({ id }) => id === productId
                                );

                                const { rrp } = filteredProduct[0];
                                const isOnRrp = currentPrice < rrp;

                                return (
                                    <li
                                        className="module-article__products-item-price"
                                        key={productId}
                                    >
                                        <a
                                            href={productUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={
                                                inStock
                                                    ? "module-article__products-item-link prices"
                                                    : "module-article__products-item-link prices no-available"
                                            }
                                        >
                                            <span>{lastPrice}</span>

                                            <span
                                                className={
                                                    isOnRrp
                                                        ? "module-article__dumping"
                                                        : ""
                                                }
                                            >
                                                {currentPrice}
                                            </span>

                                            <span>
                                                {language === "UA" &&
                                                    availabilityUa}
                                                {language === "ENG" &&
                                                    availabilityEng}
                                                {language === "RU" &&
                                                    availabilityRu}
                                            </span>
                                        </a>
                                    </li>
                                );
                            }
                        )}
                </ul>
            </>
        );
    });

ProductsData.propTypes = {
    language: PT.string.isRequired,
    productsDataForRender: PT.array.isRequired,
    productsData: PT.array.isRequired,
};

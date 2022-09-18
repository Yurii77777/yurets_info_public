/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { useState } from 'react';
import PT from 'prop-types';

import { ShortInfoProductsListHeader } from '../ShortInfoProductsListHeader/ShortInfoProductsListHeader';

import showMoreIcon from "../../../../img/anglesdown.svg";
import hideMoreIcon from "../../../../img/angles-up.svg";

export const ShortInfoProductsList = ({ language, sellerName, dumpingPdocutsPercent, sellerGoods }) => {
    const [ expanded, setExpanded ] = useState(false);
    const isTooBigData = sellerGoods.length > 5;

    return (
        <ul className="dd-shrot-info__list">
            <ShortInfoProductsListHeader
                language={language}
                sellerName={sellerName}
                dumpingPdocutsPercent={dumpingPdocutsPercent}
            />

            {
                !expanded ? sellerGoods.slice(0, 5).map(({
                    productName,
                    productUrl,
                    productRrp,
                    currentPrice,
                    dumpimgPercent,
                }, i) => {

                    return (
                        <li className="dd-shrot-info__item" key={i}>
                            <a
                                href={productUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={
                                    dumpimgPercent < 20
                                        ? "dd-shrot-info__item-link"
                                        : "dd-shrot-info__item-link dumping"
                                }
                            >
                                <span>{i + 1}</span>
                                <span>{productName}</span>
                                <span>{productRrp}</span>
                                <span>{currentPrice}</span>
                                <span>{dumpimgPercent}%</span>
                            </a>
                        </li>
                    )
                }) :
                sellerGoods.map(({
                    productName,
                    productUrl,
                    productRrp,
                    currentPrice,
                    dumpimgPercent,
                }, i) => {

                    return (
                        <li className="dd-shrot-info__item" key={i}>
                            <a
                                href={productUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={
                                    dumpimgPercent < 20
                                        ? "dd-shrot-info__item-link"
                                        : "dd-shrot-info__item-link dumping"
                                }
                            >
                                <span>{i + 1}</span>
                                <span>{productName}</span>
                                <span>{productRrp}</span>
                                <span>{currentPrice}</span>
                                <span>{dumpimgPercent}%</span>
                            </a>
                        </li>
                    )
                })
            }

            {
                isTooBigData && 
                    !expanded &&
                        <li className="dd-shrot-info__bottom-item" onClick={() => setExpanded(!expanded)}>
                            <span>
                                {language === "UA" && "Показати всі позиції"}
                                {language === "ENG" && "Show all items"}
                                {language === "RU" && "Показать все позиции"}
                            </span>
                                <img 
                                    src={showMoreIcon}
                                    alt="Show more items button"
                                    className="dd-shrot-info__show-more-icon"
                                />
                        </li>
            }

            {
                isTooBigData && 
                    expanded &&
                        <li className="dd-shrot-info__bottom-item" onClick={() => setExpanded(!expanded)}>
                            <span>
                                {language === "UA" && "Приховати цей срам"}
                                {language === "ENG" && "Hide this shame"}
                                {language === "RU" && "Спрятать этот срам"}
                            </span>
                                <img 
                                    src={hideMoreIcon}
                                    alt="Hide more items button"
                                    className="dd-shrot-info__show-more-icon"
                                />
                        </li>
            }
        </ul>
    )
};

ShortInfoProductsList.propTypes = {
    language: PT.string.isRequired,
    sellerName: PT.string.isRequired,
    dumpingPdocutsPercent: PT.number.isRequired,
    sellerGoods: PT.array.isRequired
};

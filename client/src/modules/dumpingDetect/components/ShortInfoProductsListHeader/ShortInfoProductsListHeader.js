/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import PT from 'prop-types';

export const ShortInfoProductsListHeader = ({ language, sellerName, dumpingPdocutsPercent }) => (
    <>
        <li className="dd-shrot-info__item-header">
            {language === "UA" && "Продавець: "}
            {language === "ENG" && "Seller: "}
            {language === "RU" && "Продавец: "}
            <span>{sellerName}</span>
    
            {language === "UA" && "Позицій в демпінгу: "}
            {language === "ENG" && "Items in dumping: "}
            {language === "RU" && "Позиций в демпинге: "}
            <span>{dumpingPdocutsPercent}%</span>
        </li>
        <li className="dd-shrot-info__item-title">
            <span>№</span>
            <span>
                {language === "UA" && "Найменування"}
                {language === "ENG" && "Product name"}
                {language === "RU" && "Наименование"}
            </span>
            <span>
                {language === "UA" && "РРЦ"}
                {language === "ENG" && "RRP"}
                {language === "RU" && "РРЦ"}
            </span>
            <span>
                {language === "UA" && "Пот. ціна"}
                {language === "ENG" && "Cur. price"}
                {language === "RU" && "Тек. цена"}
            </span>
            <span>
                {language === "UA" && "% знижки"}
                {language === "ENG" && "% discount"}
                {language === "RU" && "% скидки"}
            </span>
        </li>
    </>
);

ShortInfoProductsListHeader.propTypes = {
    language: PT.string.isRequired,
    sellerName: PT.string.isRequired,
    dumpingPdocutsPercent: PT.number.isRequired
};

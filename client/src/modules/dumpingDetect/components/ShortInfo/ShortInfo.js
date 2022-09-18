/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import PT from "prop-types";

import { ShortInfoProductsContainer } from '../ShortInfoProductsContainer/ShortInfoProductsContainer';

import { getDumpingProductsBySeller } from "../../utils/getDumpingProductsBySeller";

import "./ShortInfo.scss";

export const ShortInfo = ({
    language,
    productsData,
    productsDataForRender,
}) => {
    const sellersWithDumpingProducts = getDumpingProductsBySeller({
        productsData,
        productsDataForRender,
    });

    const fearlessList = sellersWithDumpingProducts
        .filter(({ dumpingPdocutsPercent }) => dumpingPdocutsPercent >= 50)
        .sort((a, b) => a.dumpingPdocutsPercent - b.dumpingPdocutsPercent)
        .reverse();

    const tooMuch = sellersWithDumpingProducts
        .filter(({ dumpingPdocutsPercent }) =>
            dumpingPdocutsPercent >= 20 && dumpingPdocutsPercent < 50)
        .sort((a, b) => a.dumpingPdocutsPercent - b.dumpingPdocutsPercent)
        .reverse();

    const agreed = sellersWithDumpingProducts
        .filter(({ dumpingPdocutsPercent }) =>
            dumpingPdocutsPercent <= 20 && dumpingPdocutsPercent !== 0)
        .sort((a, b) => a.dumpingPdocutsPercent - b.dumpingPdocutsPercent)
        .reverse();

    return (
        <div className="dd-shrot-info__content-container" key={0}>
            {fearlessList.length && (
                <>
                    <h2 className="dd-shrot-info__title">
                        {language === "UA" &&
                            "Безстрашні * >50% позицій з наявності в демпінгу"}
                        {language === "ENG" &&
                            "Fearless * >50% items from availability in dumping"}
                        {language === "RU" &&
                            "Бесстрашные * >50% позиций из наличия в демпинге"}
                    </h2>

                    <ShortInfoProductsContainer
                        language={language}
                        sellers={fearlessList}
                    />
                </>
            )}

            {tooMuch.length && (
                <>
                    <h2 className="dd-shrot-info__title">
                        {language === "UA" &&
                            "Забагато * >20% позицій з наявності в демпінгу"}
                        {language === "ENG" &&
                            "Too much * >20% items from availability in dumping"}
                        {language === "RU" &&
                            "Многовато * >20% позиций из наличия в демпинге"}
                    </h2>
                    <ShortInfoProductsContainer
                        language={language}
                        sellers={tooMuch}
                    />
                </>
            )}

            {agreed.length && (
                <>
                    <h2 className="dd-shrot-info__title">
                        {language === "UA" &&
                            "Погоджено? * <20% позицій з наявності в демпінгу"}
                        {language === "ENG" &&
                            "Agreed? * <20% items from availability in dumping"}
                        {language === "RU" &&
                            "Согласовано? * <20% позиций из наличия в демпинге"}
                        демпінгу
                    </h2>
                    <ShortInfoProductsContainer
                        language={language}
                        sellers={agreed}
                    />
                </>
            )}
        </div>
    );
};

ShortInfo.propTypes = {
    language: PT.string.isRequired,
    productsData: PT.array.isRequired,
    productsDataForRender: PT.array.isRequired,
};

/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */

import PT from "prop-types";

import { ShortArticle } from "../../containers/ShortArticle/ShortArticle";
import "./Manuals.scss";

export const Manuals = ({ language }) => {
    return (
        <>
            <h1 className="primary-title manuals__title">
                {language === "UA" && "Корисні мануали"}
                {language === "ENG" && "Useful manuals"}
                {language === "RU" && "Полезные мануалы"}
            </h1>

            <p className="manuals__paragraph primary-paragraph">
                {language === "UA" && "Мануали із серії 'How-to...'"}
                {language === "ENG" && "Manuals from the series 'How-to...'"}
                {language === "RU" && "Мануалы из серии 'How-to...'"}
            </p>

            <p className="manuals__paragraph primary-paragraph">
                {language === "UA" &&
                    "Тут зібрані речі, з якими мені персонально прийшлося зіткнутися під час розробки додатків."}
                {language === "ENG" &&
                    "Here are the things that I personally had to face during the development of applications."}
                {language === "RU" &&
                    "Здесь собраны вещи, с которыми мне персонально пришлось столкнуться при разработке приложений."}
            </p>

            <ShortArticle language={language} category="manuals" />
        </>
    );
};

Manuals.propTypes = {
    language: PT.string.isRequired,
};

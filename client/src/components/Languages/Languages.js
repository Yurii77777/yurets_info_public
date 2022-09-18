/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */
import "./Languages.scss";

import { useToggle } from "../../hooks/useToggle";

import cn from "classnames";

export const Languages = ({ language, setLanguage }) => {
    const [isShowLangList, setIsShowLangList] = useToggle(false);

    const languagesList = [
        {
            id: 1,
            langTitle: "UA",
        },
        {
            id: 2,
            langTitle: "ENG",
        },
        {
            id: 3,
            langTitle: "RU",
        },
    ];

    const handleLanguageSelect = (e) => {
        let userClick = e.target;

        userClick.innerText === "UA" && setLanguage("UA");
        userClick.innerText === "ENG" && setLanguage("ENG");
        userClick.innerText === "RU" && setLanguage("RU");
    };

    return (
        <ul
            className={
                isShowLangList
                    ? cn("choose-language__list active")
                    : cn("choose-language__list")
            }
            onClick={setIsShowLangList}
        >
            {languagesList.map(({ id, langTitle }) => {
                if (language === "UA" && id === 1) {
                    return (
                        <li className="choose-language__item" key={id}>
                            {langTitle}
                        </li>
                    );
                } else if (language === "ENG" && id === 2) {
                    return (
                        <li className="choose-language__item" key={id}>
                            {langTitle}
                        </li>
                    );
                } else if (language === "RU" && id === 3) {
                    return (
                        <li className="choose-language__item" key={id}>
                            {langTitle}
                        </li>
                    );
                } else if (isShowLangList) {
                    return (
                        <li
                            className="choose-language__item"
                            key={id}
                            onClick={handleLanguageSelect}
                        >
                            {langTitle}
                        </li>
                    );
                }
            })}
        </ul>
    );
};

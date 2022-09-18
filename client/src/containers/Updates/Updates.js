/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */

import PT from "prop-types";

import hyphen from "../../img/hyphen.svg";
import updatesBackgroundImg from "../../img/updates-background.webp";
import updatesBorderImg from "../../img/updates-border.svg";
import "./Updates.scss";

const updatesData = [
    {
        id: 0,
        messageUa: "npm install react@latest react-dom@latest",
        messageEng: "npm install react@latest react-dom@latest",
        messageRu: "npm install react@latest react-dom@latest",
    },
    {
        id: 1,
        messageUa:
            "В файлі index.js імпортуємо { createRoot } із 'react-dom/client'",
        messageEng:
            "In the index.js file we import {createRoot} from 'react-dom / client'",
        messageRu:
            "В файле index.js импортируем {createRoot} из 'react-dom/client'",
    },
    {
        id: 2,
        messageUa: "const root = createRoot(document.getElementById('root'))",
        messageEng: "const root = createRoot(document.getElementById('root'))",
        messageRu: "const root = createRoot(document.getElementById('root'))",
    },
    {
        id: 3,
        messageUa: "Рендеримо програму root.render(<App />)",
        messageEng: "Render the program root.render (<App />)",
        messageRu: "Рендерим програму root.render(<App />)",
    },
];

export const Updates = ({ language }) => {
    return (
        <section className="updates">
            <img
                src={updatesBorderImg}
                alt="Updates universe"
                className="updates__border-img"
            />

            <h3 className="updates__title secondary-title">
                {language === "UA" && "Оновлюємо React 17 до 18"}
                {language === "RU" && "Обновляем React 17 до 18"}
                {language === "ENG" && "Update React 17 to 18"}
            </h3>

            {updatesData.map(({ id, messageUa, messageEng, messageRu }) => {
                return (
                    <p
                        className="updates__paragraph secondary-paragraph"
                        key={id}
                    >
                        <img
                            src={hyphen}
                            alt="Item hyphen"
                            className="updates__item-hyphen"
                        />
                        {language === "UA" && <span>{messageUa}</span>}
                        {language === "RU" && <span>{messageRu}</span>}
                        {language === "ENG" && <span>{messageEng}</span>}
                    </p>
                );
            })}

            <img
                src={updatesBackgroundImg}
                alt="Updates universe"
                className="updates__background-img"
            />
        </section>
    );
};

Updates.propTypes = {
    language: PT.string.isRequired,
};

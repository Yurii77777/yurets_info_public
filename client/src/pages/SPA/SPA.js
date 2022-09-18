import PT from "prop-types";

import { ShortArticle } from "../../containers/ShortArticle/ShortArticle";

import "./SPA.scss";

export const SPA = ({ language }) => {
    return (
        <>
            <h1 className="primary-title spa__title">
                {language === "UA" && "Односторінкові додатки"}
                {language === "ENG" && "Single Page Applications"}
                {language === "RU" && "Одностраничные приложения"}
            </h1>

            <p className="spa__paragraph primary-paragraph">
                {language === "UA" &&
                    "Односторінкові додатки, представлені на цьому сайті, мають ознайомлювальний характер."}
                {language === "ENG" &&
                    "SPA presented on this site are for informational purposes only."}
                {language === "RU" &&
                    "Одностраничные приложения, представленные на данном сайте, носят ознакомительный характер."}
            </p>

            <p className="spa__paragraph primary-paragraph">
                {language === "UA" &&
                    "Ціль створення даних додатків - демонстрація сучасних можливостей веб-розробки."}
                {language === "ENG" &&
                    "These appa were created to showcase the modern possibilities of web development."}
                {language === "RU" &&
                    "Цель создания данных приложений - демонстрация современных возможностей веб-разработки."}
            </p>

            <p className="spa__paragraph primary-paragraph">
                {language === "UA" &&
                    "Стек використовуваних технологій - React, NodeJS, HTML, CSS та ін модулі."}
                {language === "ENG" &&
                    "The stack of technologies used - React, NodeJS, HTML, CSS and other modules."}
                {language === "RU" &&
                    "Стек используемых технологий - React, NodeJS, HTML, CSS и др. модули."}
            </p>

            <ShortArticle language={language} category="spa" />
        </>
    );
};

SPA.propTypes = {
    language: PT.string.isRequired,
};

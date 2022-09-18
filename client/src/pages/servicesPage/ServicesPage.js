import PT from "prop-types";

import "./servicesPage.scss";

import { ShortArticle } from "../../containers/ShortArticle/ShortArticle";

export const ServicesPage = ({ language }) => {
    return (
        <>
            <h1 className="primary-title services__title">
                {language === "UA" && "Онлайн сервіси"}
                {language === "ENG" && "Online services"}
                {language === "RU" && "Онлайн сервисы"}
            </h1>

            <p className="services__paragraph primary-paragraph">
                {language === "UA" &&
                    "Всі сервіси, представлені на цьому сайті, мають ознайомлювальний характер."}
                {language === "ENG" &&
                    "All services presented on this site are for informational purposes only."}
                {language === "RU" &&
                    "Все сервисы, представленные на данном сайте, носят ознакомительный характер."}
            </p>

            <p className="services__paragraph primary-paragraph">
                {language === "UA" &&
                    "Ціль створення даних сервісів - демонстрація сучасних можливостей веб-розробки."}
                {language === "ENG" &&
                    "These services were created to showcase the modern possibilities of web development."}
                {language === "RU" &&
                    "Цель создания данных сервисов - демонстрация современных возможностей веб-разработки."}
            </p>

            <p className="services__paragraph primary-paragraph">
                {language === "UA" &&
                    "Стек використовуваних технологій - React, NodeJS, HTML, CSS та ін модулі."}
                {language === "ENG" &&
                    "The stack of technologies used - React, NodeJS, HTML, CSS and other modules."}
                {language === "RU" &&
                    "Стек используемых технологий - React, NodeJS, HTML, CSS и др. модули."}
            </p>

            <ShortArticle language={language} category="services" />
        </>
    );
};

ServicesPage.propTypes = {
    language: PT.string.isRequired,
};

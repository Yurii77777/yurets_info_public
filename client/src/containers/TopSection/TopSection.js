/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import "./TopSection.scss";
import topSectionPoster from "../../img/top_bg-pic.webp";

export const TopSection = ({ language }) => (
    <section className="top-section">
        <h1 className="top-section__title primary-title">
            {language === "UA" && "Веб-додатки та сервіси"}
            {language === "RU" && "Веб-приложения и сервисы"}
            {language === "ENG" && "Web applications and services"}
        </h1>

        <p className="top-section__paragraph primary-paragraph">
            {language === "UA" &&
                "Доступні для користування \n в он-лайн режимі"}
            {language === "RU" &&
                "Доступны для использования \n в режиме он-лайн"}
            {language === "ENG" && "Available for \n online use"}
        </p>

        <img
            src={topSectionPoster}
            alt="Top Poster - smartphone in the hand"
            className="top-section__top-poster"
        />
    </section>
);

/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import PT from "prop-types";
import { Link } from "react-router-dom";

import { articlesDescription } from "../../data/articlesDescription";
import { formatArticleTitle } from "../../utils/formatArticleTitle";
import carouselItemBorder from "../../img/carousel-item-border.svg";
import "./Carousel.scss";

export const Carousel = ({ language }) => {
    const filterApps = (options = {}) => {
        const { itemsToFilter = [], dataBase = [] } = options;

        let result = dataBase
            .filter(({ id }) => itemsToFilter.includes(id))
            .reverse();

        return result;
    };

    const filteredApps = filterApps({
        itemsToFilter: [0, 1, 3],
        dataBase: articlesDescription,
    });

    return (
        <section className="carousel">
            <ul className="carousel__list">
                {filteredApps.map(
                    ({
                        id,
                        articleTitleUa,
                        articleTitleEng,
                        articleTitleRu,
                        shortDescriptionUa,
                        shortDescriptionEng,
                        shortDescriptionRu,
                        tinyPosterImg,
                        category,
                        url,
                    }) => {
                        const URL_PATH = `/${category}`;

                        const editedTitleUa =
                            formatArticleTitle(articleTitleUa);
                        const editedTitleEng =
                            formatArticleTitle(articleTitleEng);
                        const editedTitleRu =
                            formatArticleTitle(articleTitleRu);

                        return (
                            <Link
                                to={URL_PATH + url}
                                key={id}
                                className="carousel__item-link"
                            >
                                <li className="carousel__item">
                                    <img
                                        src={carouselItemBorder}
                                        alt="Item border"
                                        className="carousel__item-border-img"
                                    />
                                    <div className="carousel__content-container">
                                        <div className="carousel__header">
                                            <span>
                                                <img
                                                    src={tinyPosterImg}
                                                    alt={articleTitleUa}
                                                    className="carousel__item-poster"
                                                    width="32px"
                                                />
                                            </span>
                                            <p className="carousel__item-title tertiary-title">
                                                {language === "UA" &&
                                                    editedTitleUa}
                                                {language === "ENG" &&
                                                    editedTitleEng}
                                                {language === "RU" &&
                                                    editedTitleRu}
                                            </p>
                                        </div>

                                        <p className="carousel__item-description secondary-paragraph">
                                            {language === "UA" &&
                                                shortDescriptionUa}
                                            {language === "ENG" &&
                                                shortDescriptionEng}
                                            {language === "RU" &&
                                                shortDescriptionRu}
                                        </p>
                                    </div>
                                </li>
                            </Link>
                        );
                    }
                )}
            </ul>
        </section>
    );
};

Carousel.propTypes = {
    language: PT.string.isRequired,
};

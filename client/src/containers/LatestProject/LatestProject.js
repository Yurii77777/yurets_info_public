/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { Link } from "react-router-dom";
import PT from "prop-types";

import { articlesDescription } from "../../data/articlesDescription";
import { formatArticleTitle } from "../../utils/formatArticleTitle";
import "./LatestProject.scss";

export const LatestProject = ({ language }) => {
    // Get all manuals
    const filteredCategories = articlesDescription.filter(
        ({ category }) => category === "projects"
    );

    // Get latest project
    const newestProject = filteredCategories.slice(
        filteredCategories.length - 1
    );

    return (
        <section className="latest-project">
            {newestProject.map(
                ({
                    id,
                    posterImg,
                    articleTitleUa,
                    articleTitleEng,
                    articleTitleRu,
                    shortDescriptionUa,
                    shortDescriptionEng,
                    shortDescriptionRu,
                    category,
                    url,
                }) => {
                    const URL_PATH = `/${category}`;

                    const formatedTitleUa = formatArticleTitle(articleTitleUa);
                    const formatedTitleEng =
                        formatArticleTitle(articleTitleEng);
                    const formatedTitleRu = formatArticleTitle(articleTitleRu);

                    return (
                        <Link to={URL_PATH + url} key={id}>
                            <div className="latest-project__container">
                                <img
                                    src={posterImg}
                                    alt={formatedTitleUa}
                                    className="latest-project__poster"
                                />

                                <div className="latest-project__description">
                                    <h2 className="latest-project__title tertiary-title">
                                        {language === "UA" && formatedTitleUa}
                                        {language === "ENG" && formatedTitleEng}
                                        {language === "RU" && formatedTitleRu}
                                    </h2>

                                    <p className="latest-project__paragraph primary-paragraph">
                                        {language === "UA" &&
                                            shortDescriptionUa}
                                        {language === "ENG" &&
                                            shortDescriptionEng}
                                        {language === "RU" &&
                                            shortDescriptionRu}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                }
            )}
        </section>
    );
};

LatestProject.propTypes = {
    language: PT.string.isRequired,
};

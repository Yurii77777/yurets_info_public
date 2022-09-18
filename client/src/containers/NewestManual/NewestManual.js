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
import "./NewestManual.scss";

export const NewestManual = ({ language }) => {
    // Get all manuals
    const filteredCategories = articlesDescription.filter(
        ({ category }) => category === "manuals"
    );

    // Get latest manual
    const newestManual = filteredCategories.slice(
        filteredCategories.length - 1
    );

    const {
        id,
        posterImg,
        articleTitleUa,
        articleTitleEng,
        articleTitleRu,
        category,
        url,
        shortDescriptionUa,
        shortDescriptionEng,
        shortDescriptionRu,
    } = newestManual[0];

    const URL_PATH = `/${category}`;

    return (
        <section className="newest-manual">
            <Link to={URL_PATH + url} key={id}>
                <div className="newest-manual__container">
                    <img
                        src={posterImg}
                        alt={articleTitleUa}
                        className="newest-manual__poster"
                    />

                    <div className="newest-manual__description">
                        <h2 className="newest-manual__title tertiary-title">
                            {language === "UA" && articleTitleUa}
                            {language === "ENG" && articleTitleEng}
                            {language === "RU" && articleTitleRu}
                        </h2>

                        {language === "UA" &&
                            shortDescriptionUa.split("\n").map((element, i) => {
                                if (
                                    element.includes("<code>") ||
                                    element.includes("</code>")
                                ) {
                                    const formatedCodeString = element
                                        .replace("<code>", "")
                                        .replace("</code>", "");

                                    return (
                                        <p
                                            className="newest-manual__paragraph-code paragraph-code"
                                            key={i}
                                        >
                                            {formatedCodeString}
                                        </p>
                                    );
                                } else {
                                    return (
                                        <p
                                            className="newest-manual__paragraph primary-paragraph"
                                            key={i}
                                        >
                                            {element}
                                        </p>
                                    );
                                }
                            })}
                        {language === "ENG" &&
                            shortDescriptionEng.map((element, i) => {
                                if (
                                    element.includes("<code>") ||
                                    element.includes("</code>")
                                ) {
                                    const formatedCodeString = element
                                        .replace("<code>", "")
                                        .replace("</code>", "");

                                    return (
                                        <p
                                            className="newest-manual__paragraph-code paragraph-code"
                                            key={i}
                                        >
                                            {formatedCodeString}
                                        </p>
                                    );
                                } else {
                                    return (
                                        <p
                                            className="newest-manual__paragraph primary-paragraph"
                                            key={i}
                                        >
                                            {element}
                                        </p>
                                    );
                                }
                            })}
                        {language === "RU" &&
                            shortDescriptionRu.map((element, i) => {
                                if (
                                    element.includes("<code>") ||
                                    element.includes("</code>")
                                ) {
                                    const formatedCodeString = element
                                        .replace("<code>", "")
                                        .replace("</code>", "");

                                    return (
                                        <p
                                            className="newest-manual__paragraph-code paragraph-code"
                                            key={i}
                                        >
                                            {formatedCodeString}
                                        </p>
                                    );
                                } else {
                                    return (
                                        <p
                                            className="newest-manual__paragraph primary-paragraph"
                                            key={i}
                                        >
                                            {element}
                                        </p>
                                    );
                                }
                            })}
                    </div>
                </div>
            </Link>
        </section>
    );
};

NewestManual.propTypes = {
    language: PT.string.isRequired,
};

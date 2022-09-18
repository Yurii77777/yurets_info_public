/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */

import PT from "prop-types";

import { articlesDescription } from "../../data/articlesDescription";
import "./FullArticle.scss";

export const FullArticle = ({ language, articleName }) => {
    const currentArticleData = articlesDescription.filter(
        ({ url }) => url === articleName
    );

    const { shortDescriptionUa, shortDescriptionEng, shortDescriptionRu } =
        currentArticleData[0];
    const articleDescriptionUa = shortDescriptionUa.split("\n");
    const articleDescriptionEng = shortDescriptionEng.split("\n");
    const articleDescriptionRu = shortDescriptionRu.split("\n");

    return (
        <>
            {currentArticleData.map(
                ({ id, articleTitleUa, articleTitleEng, articleTitleRu }) => {
                    return (
                        <article className="full-article article" key={id}>
                            <h1 className="full-article__title secondary-title">
                                {language === "UA" && articleTitleUa}
                                {language === "ENG" && articleTitleEng}
                                {language === "RU" && articleTitleRu}
                            </h1>

                            <div className="full-article__content-container">
                                {language === "UA" &&
                                    articleDescriptionUa.map((element, i) => {
                                        if (
                                            element.includes("<code>") ||
                                            element.includes("</code>")
                                        ) {
                                            const formatedCodeString = element
                                                .replace("<code>", "")
                                                .replace("</code>", "");

                                            return (
                                                <p
                                                    className="full-article__paragraph-code paragraph-code"
                                                    key={i}
                                                >
                                                    {formatedCodeString}
                                                </p>
                                            );
                                        } else {
                                            return (
                                                <p
                                                    className="full-article__paragraph secondary-paragraph"
                                                    key={i}
                                                >
                                                    {element}
                                                </p>
                                            );
                                        }
                                    })}
                                {language === "ENG" &&
                                    articleDescriptionEng.map((element, i) => {
                                        if (
                                            element.includes("<code>") ||
                                            element.includes("</code>")
                                        ) {
                                            const formatedCodeString = element
                                                .replace("<code>", "")
                                                .replace("</code>", "");

                                            return (
                                                <p
                                                    className="full-article__paragraph-code paragraph-code"
                                                    key={i}
                                                >
                                                    {formatedCodeString}
                                                </p>
                                            );
                                        } else {
                                            return (
                                                <p
                                                    className="full-article__paragraph secondary-paragraph"
                                                    key={i}
                                                >
                                                    {element}
                                                </p>
                                            );
                                        }
                                    })}
                                {language === "RU" &&
                                    articleDescriptionRu.map((element, i) => {
                                        if (
                                            element.includes("<code>") ||
                                            element.includes("</code>")
                                        ) {
                                            const formatedCodeString = element
                                                .replace("<code>", "")
                                                .replace("</code>", "");

                                            return (
                                                <p
                                                    className="full-article__paragraph-code paragraph-code"
                                                    key={i}
                                                >
                                                    {formatedCodeString}
                                                </p>
                                            );
                                        } else {
                                            return (
                                                <p
                                                    className="full-article__paragraph secondary-paragraph"
                                                    key={i}
                                                >
                                                    {element}
                                                </p>
                                            );
                                        }
                                    })}
                            </div>
                        </article>
                    );
                }
            )}
        </>
    );
};

FullArticle.propTypes = {
    language: PT.string.isRequired,
    articleName: PT.string.isRequired,
};

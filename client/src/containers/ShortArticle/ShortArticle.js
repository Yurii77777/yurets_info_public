import PT from "prop-types";
import { Link } from "react-router-dom";

import "./ShortArticle.scss";

import { articlesDescription } from "../../data/articlesDescription";
import { formatArticleTitle } from "../../utils/formatArticleTitle";

export const ShortArticle = ({ language, category }) => {
    // Get needed categories
    const filteredCategories = articlesDescription.filter(
        (article) => article.category === category
    );

    return (
        <>
            {filteredCategories.map(
                ({
                    id,
                    articleTitleUa,
                    articleTitleEng,
                    articleTitleRu,
                    shortDescriptionUa,
                    shortDescriptionEng,
                    shortDescriptionRu,
                    posterImg,
                    category,
                    url,
                }) => {
                    const URL_PATH = `/${category}`;

                    const editedTitleUa = formatArticleTitle(articleTitleUa);
                    const editedTitleEng = formatArticleTitle(articleTitleEng);
                    const editedTitleRu = formatArticleTitle(articleTitleRu);

                    return (
                        <Link
                            to={URL_PATH + url}
                            key={id}
                            className="short-article__main-link"
                        >
                            <article className="short-article article">
                                <h2 className="short-article__title secondary-title">
                                    {language === "UA" && editedTitleUa}
                                    {language === "ENG" && editedTitleEng}
                                    {language === "RU" && editedTitleRu}
                                </h2>

                                <div className="short-article__container">
                                    <div className="short-article__left-side">
                                        {language === "UA" &&
                                            shortDescriptionUa
                                                .split("\n")
                                                .map((element, i) => {
                                                    if (
                                                        element.includes(
                                                            "<code>"
                                                        ) ||
                                                        element.includes(
                                                            "</code>"
                                                        )
                                                    ) {
                                                        const formatedCodeString =
                                                            element
                                                                .replace(
                                                                    "<code>",
                                                                    ""
                                                                )
                                                                .replace(
                                                                    "</code>",
                                                                    ""
                                                                );

                                                        return (
                                                            <p
                                                                className="short-article__paragraph-code paragraph-code"
                                                                key={i}
                                                            >
                                                                {
                                                                    formatedCodeString
                                                                }
                                                            </p>
                                                        );
                                                    } else {
                                                        return (
                                                            <p
                                                                className="short-article__paragraph secondary-paragraph"
                                                                key={i}
                                                            >
                                                                {element}
                                                            </p>
                                                        );
                                                    }
                                                })}
                                        {language === "ENG" &&
                                            shortDescriptionEng
                                                .split("\n")
                                                .map((element, i) => {
                                                    if (
                                                        element.includes(
                                                            "<code>"
                                                        ) ||
                                                        element.includes(
                                                            "</code>"
                                                        )
                                                    ) {
                                                        const formatedCodeString =
                                                            element
                                                                .replace(
                                                                    "<code>",
                                                                    ""
                                                                )
                                                                .replace(
                                                                    "</code>",
                                                                    ""
                                                                );

                                                        return (
                                                            <p
                                                                className="short-article__paragraph-code paragraph-code"
                                                                key={i}
                                                            >
                                                                {
                                                                    formatedCodeString
                                                                }
                                                            </p>
                                                        );
                                                    } else {
                                                        return (
                                                            <p
                                                                className="short-article__paragraph secondary-paragraph"
                                                                key={i}
                                                            >
                                                                {element}
                                                            </p>
                                                        );
                                                    }
                                                })}
                                        {language === "RU" &&
                                            shortDescriptionRu
                                                .split("\n")
                                                .map((element, i) => {
                                                    if (
                                                        element.includes(
                                                            "<code>"
                                                        ) ||
                                                        element.includes(
                                                            "</code>"
                                                        )
                                                    ) {
                                                        const formatedCodeString =
                                                            element
                                                                .replace(
                                                                    "<code>",
                                                                    ""
                                                                )
                                                                .replace(
                                                                    "</code>",
                                                                    ""
                                                                );

                                                        return (
                                                            <p
                                                                className="short-article__paragraph-code paragraph-code"
                                                                key={i}
                                                            >
                                                                {
                                                                    formatedCodeString
                                                                }
                                                            </p>
                                                        );
                                                    } else {
                                                        return (
                                                            <p
                                                                className="short-article__paragraph secondary-paragraph"
                                                                key={i}
                                                            >
                                                                {element}
                                                            </p>
                                                        );
                                                    }
                                                })}
                                    </div>
                                    <div className="short-article__rigth-side">
                                        {
                                            <img
                                                src={posterImg}
                                                alt={articleTitleUa}
                                                className="short-article__poster"
                                            />
                                        }
                                    </div>
                                </div>
                            </article>
                        </Link>
                    );
                }
            )}
        </>
    );
};

ShortArticle.propTypes = {
    language: PT.string.isRequired,
    category: PT.string.isRequired,
};

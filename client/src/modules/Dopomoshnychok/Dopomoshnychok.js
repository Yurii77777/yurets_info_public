/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import PT from "prop-types";

import { AppsStacklist } from "../../components/AppsStacklist/AppsStacklist";

import "./Dopomoshnychok.scss";
import { articlesDescription } from "../../data/articlesDescription";
import DDmessageScreen from "../../img/articles-imgs/screen_DD_message.webp";
import { stackList } from "../../data/stackList";

export const Dopomoshnychok = ({ language }) => {
    const dopomoshnychokData = articlesDescription.filter(({ id }) => id === 3);
    const {
        posterImg,
        articleTitleUa,
        shortDescriptionUa,
        shortDescriptionEng,
        shortDescriptionRu,
        fullDescriptionUa,
        fullDescriptionEng,
        fullDescriptionRu,
    } = dopomoshnychokData[0];

    return (
        <article className="article-primary">
            <h1 className="dopomoshnychok__title secondary-title">
                {articleTitleUa}
            </h1>

            <section className="dopomoshnychok__top-section">
                <img
                    src={posterImg}
                    alt={articleTitleUa}
                    className="dopomoshnychok__primary-poster"
                />

                <p className="dopomoshnychok__paragraph top secondary-paragraph">
                    {language === "UA" && shortDescriptionUa}
                    {language === "ENG" && shortDescriptionEng}
                    {language === "RU" && shortDescriptionRu}
                </p>
                <a
                    href="https://t.me/Dopomoshnychok_Bot/"
                    target="_blank"
                    rel="noreferrer"
                    className="dopomoshnychok__prime-link"
                >
                    @Dopomoshnychok_Bot
                </a>
            </section>

            <section className="dopomoshnychok__versions-description">
                <img
                    src={DDmessageScreen}
                    alt="Приклад повідомлення в Телеграм Боті із сервісу Dumping Detector"
                    className="dopomoshnychok__dd-message-example"
                />
                <p className="dopomoshnychok__paragraph secondary-paragraph">
                    {language === "UA" && fullDescriptionUa}
                    {language === "ENG" && fullDescriptionEng}
                    {language === "RU" && fullDescriptionRu}
                </p>
            </section>

            <AppsStacklist
                language={language}
                stackList={stackList}
                settingToFilter={[11, 12, 9, 10]}
            />
        </article>
    );
};

Dopomoshnychok.propTypes = {
    language: PT.string.isRequired,
};

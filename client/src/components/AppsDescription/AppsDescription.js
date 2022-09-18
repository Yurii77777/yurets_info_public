/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import PT from "prop-types";

import "./AppsDescription.scss";

export const AppsDescription = ({ language, descriptions = [], appId }) => {
    const filteredAppData = descriptions.filter(({ id }) => id === appId);

    return filteredAppData.map(
        ({ fullDescriptionUa, fullDescriptionEng, fullDescriptionRu }, i) => {
            return (
                <section className="description" key={i}>
                    <h3 className="description__title">
                        {language === "UA" && "Опис додатка"}
                        {language === "ENG" && "Application description"}
                        {language === "RU" && "Описание приложения"}
                    </h3>

                    <p className="description__paragraph">
                        {language === "UA" && fullDescriptionUa}
                        {language === "ENG" && fullDescriptionEng}
                        {language === "RU" && fullDescriptionRu}
                    </p>
                </section>
            );
        }
    );
};

AppsDescription.propTypes = {
    language: PT.string.isRequired,
    descriptions: PT.array.isRequired,
    appId: PT.number.isRequired,
};

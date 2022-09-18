/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import PT from "prop-types";

import "./AppsStacklist.scss";

export const AppsStacklist = ({
    language,
    stackList = [],
    settingToFilter = [],
}) => {
    const filteredStackItems = stackList.filter(({ id }) =>
        settingToFilter.includes(id)
    );

    return (
        <section className="stacklist">
            <h4 className="stacklist__title">
                {language === "UA" && "Стек"}
                {language === "ENG" && "Stack"}
                {language === "RU" && "Стек"}
            </h4>

            <ul className="stacklist__list">
                {filteredStackItems.map(({ id, stackName }) => {
                    return (
                        <li className="stacklist__item" key={id}>
                            {stackName}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

AppsStacklist.propTypes = {
    language: PT.string.isRequired,
    stackList: PT.array.isRequired,
    settingToFilter: PT.array.isRequired,
};

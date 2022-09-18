/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import PT from "prop-types";

import { stackList } from "../../data/stackList";

import "./Stacklist.scss";

export const Stacklist = ({ language }) => {
    return (
        <>
            <h4 className="sinoptik-article__stack-title">
                {language === "UA" && "Стек"}
                {language === "ENG" && "Stack"}
                {language === "RU" && "Стек"}
            </h4>
            <ul className="sinoptik-article__stack-list">
                {stackList.map(({ id, stackName }) => {
                    return (
                        <li className="sinoptik-article__stack-item" key={id}>
                            {stackName}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

Stacklist.propTypes = {
    language: PT.string.isRequired,
};

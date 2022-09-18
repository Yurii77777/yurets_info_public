/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */

import { socialInfo } from "../../data/socialInfo";
import "./SocialLinks.scss";

export const SocialLinks = () => {
    const filteredSocialItems = socialInfo.filter(
        ({ id }) => id === 0 || id === 1
    );

    return (
        <div className="top-section__social-links">
            {filteredSocialItems.map(({ id, url, title }) => {
                return (
                    <a
                        key={id}
                        href={url}
                        className="top-section__social-link"
                        target="_blank"
                        rel="noreferrer"
                        title="Go to GitHub profile"
                    >
                        {title}
                    </a>
                );
            })}
        </div>
    );
};

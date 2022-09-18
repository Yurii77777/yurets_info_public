/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */
import border from "../../img/carousel-item-border.svg";
import { socialInfo } from "../../data/socialInfo";
import "./FooterContainer.scss";

export const FooterContainer = () => {
    return (
        <footer className="footer">
            <ul className="footer__social-list">
                {socialInfo.map(({ id, img, title, url }) => {
                    return (
                        <li key={id} className="footer__social-item">
                            <img
                                src={border}
                                alt={title}
                                className="footer__social-item-border"
                            />
                            <a
                                href={url}
                                className="footer__social-url"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={img}
                                    alt={title}
                                    className="footer__social-icon-img"
                                />
                                <span>{title}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

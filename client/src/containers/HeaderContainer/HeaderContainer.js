/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { Link } from "react-router-dom";

import "./HeaderContainer.scss";
import logo from "../../img/logo.webp";
import signInImg from "../../img/sign-in.svg";
import mobileMenu from "../../img/mobile-menu.svg";

import { useToggle } from "../../hooks/useToggle";

import cn from "classnames";

export const HeaderContainer = ({ language, setLanguage, Languages }) => {
    const [isTrue, setIsTrue] = useToggle(false);

    const topMenuList = [
        {
            id: 1,
            titleUa: "Інфо",
            titleEng: "Info",
            titleRu: "Инфо",
            url: "/info",
            title: "Navigation to info page",
        },
        {
            id: 2,
            titleUa: "Сервіси",
            titleEng: "Services",
            titleRu: "Сервисы",
            url: "/services",
            title: "Navigation to services page",
        },
        {
            id: 3,
            titleUa: "Додатки",
            titleEng: "SPA",
            titleRu: "Приложения",
            url: "/spa",
            title: "Navigation to spa page",
        },
        {
            id: 4,
            titleUa: "Проекти",
            titleEng: "Projects",
            titleRu: "Проекты",
            url: "/projects",
            title: "Navigation to projects page",
        },
        {
            id: 5,
            titleUa: "Мануали",
            titleEng: "Manuals",
            titleRu: "Мануалы",
            url: "/manuals",
            title: "Navigation to manuals page",
        },
        {
            id: 6,
            titleUa: "Реєстрація",
            titleEng: "Registration",
            titleRu: "Регистрация",
            url: "/registration",
            title: "Navigation to registration page",
        },
        {
            id: 7,
            titleUa: "Вхід",
            titleEng: "LogIn",
            titleRu: "Вход",
            url: "/login",
            title: "Navigation to login page",
        },
    ];

    return (
        <header className="header">
            {/* <div className="header__bg-style"></div> */}

            <Link
                to="/"
                title="Navigate to Home Page"
                className="header__logo-container"
            >
                <img
                    src={logo}
                    alt="Yurets Portal Logo (triangle)"
                    className="header__logo-img"
                />

                <div className="header__logo-title">
                    <p>Yurets</p>
                    <p>blog</p>
                </div>
            </Link>

            <Languages language={language} setLanguage={setLanguage} />

            <nav
                className={
                    isTrue
                        ? cn("header__navigation show-mobile-version")
                        : cn("header__navigation")
                }
            >
                <ul className="header__nav-list">
                    {topMenuList.map(
                        ({ id, titleUa, titleEng, titleRu, url, title }) => {
                            return (
                                <li className="header__nav-item" key={id}>
                                    <Link
                                        className="header__link"
                                        to={url}
                                        title={title}
                                    >
                                        {language === "UA" && titleUa}
                                        {language === "ENG" && titleEng}
                                        {language === "RU" && titleRu}
                                    </Link>
                                </li>
                            );
                        }
                    )}
                </ul>
            </nav>

            <div className="header__mobile-menu-container">
                <img
                    src={signInImg}
                    alt="Sign in to you profile"
                    className="header__sign-in-img"
                />

                {isTrue ? (
                    <div
                        className="header__hide-mobile-menu"
                        onClick={setIsTrue}
                    >
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    <img
                        src={mobileMenu}
                        alt="Show menu"
                        className="header__mobile-menu-img"
                        onClick={setIsTrue}
                    />
                )}
            </div>
        </header>
    );
};

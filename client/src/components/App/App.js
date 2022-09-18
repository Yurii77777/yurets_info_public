/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { Route, Switch } from "react-router-dom";

import { useState } from "react";

import { HeaderContainer } from "../../containers/HeaderContainer/HeaderContainer";
import { FooterContainer } from "../../containers/FooterContainer/FooterContainer";
import { TopSection } from "../../containers/TopSection/TopSection";
import { SocialLinks } from "../../containers/SocialLinks/SocialLinks";
import { Updates } from "../../containers/Updates/Updates";
import { Languages } from "../Languages/Languages";
import { ServicesPage } from "../../pages/servicesPage/ServicesPage";
import { DumpingDetect } from "../../modules/dumpingDetect/DumpingDetect";
import { Dopomoshnychok } from "../../modules/Dopomoshnychok/Dopomoshnychok";
import { SPA } from "../../pages/SPA/SPA";
import { Manuals } from "../../pages/manuals/Manuals";
import { Carousel } from "../../containers/Carousel/Carousel";
import { NewestManual } from "../../containers/NewestManual/NewestManual";
import { LatestProject } from "../../containers/LatestProject/LatestProject";
import { Sinoptik } from "../../modules/sinoptik/Sinoptik";
import { FullArticle } from "../../containers/FullArticle/FullArticle";

import "./App.scss";

export const App = () => {
    // Доступні мови - 'UA' (за замовчуванням), 'RU', 'ENG'
    // Available languages are 'UA' (by default), 'RU', 'ENG'.
    const [language, setLanguage] = useState("UA");

    return (
        <div className="wrapper">
            <HeaderContainer
                language={language}
                setLanguage={setLanguage}
                Languages={Languages}
            />

            <SocialLinks />

            <Switch>
                <Route path="/" exact>
                    <TopSection language={language} />
                    <Carousel language={language} />
                    <NewestManual language={language} />
                    <Updates language={language} />
                    <LatestProject language={language} />
                </Route>

                <Route path="/info" exact>
                    <h1>Info</h1>
                </Route>

                <Route path="/services" exact>
                    <ServicesPage language={language} />
                </Route>

                <Route path="/spa" exact>
                    <SPA language={language} />
                </Route>

                <Route path="/manuals" exact>
                    <Manuals language={language} />
                </Route>

                <Route path="/spa/sinoptik" exact>
                    <Sinoptik language={language} />
                </Route>

                <Route path="/services/dumping-detector" exact>
                    <DumpingDetect language={language} />
                </Route>

                <Route path="/projects/dopomoshnychok" exact>
                    <Dopomoshnychok language={language} />
                </Route>

                <Route path="/manuals/react+electron-js" exact>
                    <FullArticle
                        language={language}
                        articleName="/react+electron-js"
                    />
                </Route>

                <Route path="/manuals/nodejs&SSL" exact>
                    <FullArticle
                        language={language}
                        articleName="/nodejs&SSL"
                    />
                </Route>
            </Switch>

            <FooterContainer />
        </div>
    );
};

/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import PT from "prop-types";

import "./Description.scss";

export const Description = ({ language }) => {
    return (
        <>
            <h3 className="sinoptik-article__description-title">
                {language === "UA" && "Опис додатка"}
                {language === "ENG" && "Application description"}
                {language === "RU" && "Описание приложения"}
            </h3>
            <p className="sinoptik-article__description-paragraph">
                {language === "UA" &&
                    "v.2.1.0 \n - округлив і 'причесав' температуру в прогнозі; \n - замінив дати в прогнозі на дні тижня; \n \n v.2.0.0 \n - секції програми винесено в окремі компоненти; \n - реалізований функціонал автоматичної детекції геолокації користувача; \n\n v.1.0.0 \n Невеликий односторінковий веб-додаток, котрий показує поточну погоду та прогноз на 16 днів в Софіївській Борщагівці. Дані оновлюються автоматично кожну годину. Під капотом - REST API, 2 GET-запита з інтервалом в одну годину."}
                {language === "ENG" &&
                    "v.2.1.0 \n - rounded and groom the temperature in the forecast; \n - replaced the dates in the forecast for the day of the week; \n \n v.2.0.0 \n - program sections are separated into separate components; \n - implemented the functionality of automatic detection of the user's geolocation; \n\n v.1.0.0 \n A small SPA that renders the current weather and forecast for 16 days in Sofiyivska Borshchagivka. The data is updated automatically every hour. Under the cat - REST API, 2 GET requests with an interval of one hour."}
                {language === "RU" &&
                    "v.2.1.0 \n - округлил и 'причесал' температуру в прогнозе; \n - заменил даты в прогнозе на дни недели; \n \n v.2.0.0 \n - секции программы вынесены в отдельные компоненты; \n - реализован функционал автоматической детекции геолокации пользователя; \n\n v.1.0.0 \n Небольшое одностраничное веб-приложение, показывающее текущую погоду и прогноз на 16 дней в Софиевской Борщаговке. Данные обновляются автоматически каждый час. Под капотом - REST API, 2 GET-запроса с интервалом в один час."}
            </p>
        </>
    );
};

Description.propTypes = {
    language: PT.string.isRequired,
};

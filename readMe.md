# [UA] yurets.info - структура та організація коду

> > Проект не запуститься, оскільки тут відсутні конфіги!

Під капотом - MERN стек.

## Модулі / сервіси:

-   Детектор Демпінгу.
    [BACK]
    З інтервалом в одну годину запускається маленька функція, котра отримує поточну дату.
    Якщо поточна дата === даті, виставленій для сканування (зараз стоїть Пн.), запускається браузер з бібліотеки puppeteer.
    Скануються всі вказані сайти. Результат записується в MongoDB.
    Позиції, котрі попали в демпінг надсилаються в Телеграм Боті підписникам.
    [FRONT]
    React, один Get-запит на Back => Express => MongoDB => оброблений результат.
    Аналітика, додаткові можливості для користувачів.

-   Телеграм Бот "Допомошничок".
    Основна задача - інтеграція з пізноманітними сервісами yurets.info.
    Наразі Бот повністю інтегрований в сервіс Детектор Демпінгу.
    Оформляє, оновлює та видаляє підписки, записуючи результат в MongoDB.
    Користувачам зі статусом 'admin' надсилає системні помилки під час сканування.

-   Sinoptik - React SPA.
    Показує поточну погоду та прогноз на 16-ть днів по геолокоції користувача.

# [ENG] yurets.info - code structure and organization

> > The project will not start because there are no configs!

## Modules / services:

-   Damping detector.
    [BACK]
    At one-hour intervals, a small function gets the current date.
    If the current date === the date set for scanning (currently Mon.), the browser from the puppeteer library is launched.
    All specified sites are scanned. The result is written to MongoDB.
    Items that have been dumped are sent to Telegram Bot subscribers.
    [FRONT]
    React, one Get request to Back => Express => MongoDB => processed result.
    Analytics, additional features for users.

-   Telegram Bot "Dopomoshnychok".
    The main task is integration with various yurets.info services.
    Currently, the Bot is fully integrated into the Dumping Detector service.
    Creates, updates, and deletes subscriptions, writing the result to MongoDB.
    Sends system errors during scanning to users with 'admin' status.

-   Sinoptik - React SPA.
    Shows the current weather and forecast for 16 days based on the user's geolocation.

### Stack list

NodeJS, ExpressJS, MongoDB, telegraf.js (Telegram API), React, MUI, SCSS, GeoLocation API, Figma, Rest API

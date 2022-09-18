/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

const path = require("path");
const http = require("http");
const https = require("https");
const fs = require("fs");

const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const dumpingDetectorRouter = require("./routes/dd.routes");

const dumpingDetectorCore = require("./modules/dumpingDetector/core/core");
const telegramBotFarm = require("./utils/telegramBotFarm");

const hostName = config.get("baseUrl");
const httpPort = 3000;
const httpsPort = 443;
const httpsOptions = {
    cert: fs.readFileSync("./ssl/certificate.crt"),
    ca: fs.readFileSync("./ssl/ca_bundle.crt"),
    key: fs.readFileSync("./ssl/private.key"),
};

const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

app.use(express.json({ extended: true }));
app.use("/api/dumping-detector", dumpingDetectorRouter);

if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
        if (req.protocol === "http") {
            res.redirect(301, `https://${req.headers.host}${req.url}`);
        }
        next();
    });

    app.use("/", express.static(path.join(__dirname, "client", "build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = config.get("port") || 5000;

const start = async () => {
    try {
        await mongoose.connect(config.get("mongoUrl"), {});
        app.listen(PORT, () =>
            console.log(`App has been started on port ${PORT} `)
        );

        dumpingDetectorCore();
    } catch (error) {
        console.log("Server error", error.message);
        process.exit(1);
    }
};

start();
telegramBotFarm({ dopomoshnychok: true });

httpServer.listen(httpPort, hostName);
httpsServer.listen(httpsPort, hostName);

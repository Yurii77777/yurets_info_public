const Product = require("../models/Product");

const { Router } = require("express");

const router = Router();

// /api/dumping-detector/getall
router.get("/getall", async (req, res) => {
    try {
        let result = [];
        let dataObject = {};

        const searchingResult = await Product.find({})
            .sort({ _id: -1 })
            .limit(1);
        const isValue = !!searchingResult.length;

        !isValue && res.send(result);

        if (isValue) {
            const lastUpdateDate = searchingResult[0].lastUpdateDate;
            const productId = searchingResult[0].productId;
            dataObject["lastUpdateDate"] = lastUpdateDate;

            const latestUpdates = await Product.find({
                lastUpdateDate: lastUpdateDate,
            });

            dataObject["data"] = latestUpdates;

            const lookForPreviousData = await Product.find({
                productId: productId,
            })
                .sort({ _id: -1 })
                .limit(2);

            const isPreviousData = lookForPreviousData.length === 2;
            !isPreviousData && (dataObject["previousData"] = []);

            if (isPreviousData) {
                const prevDataUpdateDate =
                    lookForPreviousData[1].lastUpdateDate;

                const previousData = await Product.find({
                    lastUpdateDate: prevDataUpdateDate,
                });
                dataObject["previousData"] = previousData;
            }

            result.push(dataObject);
            res.send(result);
        }
    } catch (error) {
        res.status(500).json({
            message: "Запит не виконано, спробуйте повторити пізніше ...",
        });
    }
});

module.exports = router;

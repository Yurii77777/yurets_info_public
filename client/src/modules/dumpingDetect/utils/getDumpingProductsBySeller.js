/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

export const getDumpingProductsBySeller = (options = {}) => {
    const { productsData = [], productsDataForRender = [] } = options;

    const result = productsDataForRender.map(
        ({ sellerName, sellerProducts }) => {
            let dataObject = {};

            dataObject["sellerName"] = sellerName;
            dataObject["sellerGoods"] = [];

            let availableProductCounter = 0;

            for (let i = 0; i < sellerProducts.length; i++) {
                const productItem = sellerProducts[i];
                const {
                    inStock,
                    productId,
                    currentPrice,
                    productName,
                    productUrl,
                } = productItem;

                if (inStock) {
                    availableProductCounter += 1;

                    const foundProduct = productsData.filter(
                        ({ id }) => id === productId
                    );
                    const { rrp } = foundProduct[0];

                    if (currentPrice < rrp) {
                        let productItem = {};

                        productItem["productId"] = productId;
                        productItem["currentPrice"] = currentPrice;
                        productItem["productRrp"] = rrp;
                        productItem["productName"] = productName;
                        productItem["productUrl"] = productUrl;
                        productItem["dumpimgPercent"] = Math.floor(
                            (1 - currentPrice / rrp) * 100
                        );

                        const { sellerGoods } = dataObject;
                        sellerGoods.push(productItem);
                    }
                }
            }

            const { sellerGoods } = dataObject;
            const sellerGoodsQty = sellerGoods.length;

            const dumpingPdocutsPercent =
                (sellerGoodsQty / availableProductCounter) * 100;
            dataObject["dumpingPdocutsPercent"] = Math.round(
                dumpingPdocutsPercent
            );

            return dataObject;
        }
    );

    return result;
};

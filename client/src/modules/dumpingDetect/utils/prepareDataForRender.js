/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { getUniqSellers } from "./getUniqSellers";
import { makeProductsCatalog } from "./makeProductsCatalog";

export const prepareDataForRender = (data = [], catalog = []) => {
    let result = [];

    // Make pure product's catalog
    const products = makeProductsCatalog(catalog);

    if (products.length) {
        const { data: receivedData, previousData } = data[0];
        const uniqSellers = getUniqSellers(receivedData);

        // Make seller data object
        for (let i = 0; i < uniqSellers.length; i++) {
            const uniqSellerName = uniqSellers[i];
            let sellerData = {};
            sellerData["sellerName"] = uniqSellerName;
            sellerData["sellerProducts"] = [];

            const sellerProducts = receivedData.filter(
                ({ sellerName }) => sellerName === uniqSellerName
            );

            const sellerProductsPreviousData = previousData.filter(
                ({ sellerName }) => sellerName === uniqSellerName
            );
            const isPreviousData = !!sellerProductsPreviousData.length;

            for (let j = 0; j < products.length; j++) {
                const { id, productName, productVendor } = products[j];
                let productData = {};

                const foundProduct = sellerProducts.filter(({ productId }) => productId === id);
                const isProductData = !!foundProduct.length;

                productData["productId"] = id;
                productData["productName"] = productName;
                productData["productVendor"] = productVendor;

                if (!isProductData) {
                    productData["lastPrice"] = 0;
                    productData["currentPrice"] = 0;
                    productData["productUrl"] = '';
                    productData["inStock"] = false;
                }
                
                if (isProductData) {
                    const { currentPrice, productUrl, inStock } =  foundProduct[0];
                    
                    !isPreviousData && (productData["lastPrice"] = 0);
                    productData["inStock"] = inStock;

                    if (isPreviousData) {
                        const foundProductPreviousData = sellerProductsPreviousData.filter(({ productId }) => productId === id );
                        const isPreviousProductData = !!foundProductPreviousData.length;

                        !isPreviousProductData && (productData["lastPrice"] = 0);

                        if (isPreviousProductData) {
                            const { currentPrice: previousPrice } = foundProductPreviousData[0];
                            productData["lastPrice"] = previousPrice;
                        }
                    }

                    productData["currentPrice"] = currentPrice;
                    productData["productUrl"] = productUrl;
                }

                let { sellerProducts: sellerProductsInSellerData } =
                            sellerData;
                sellerProductsInSellerData.push(productData);
            }

            result.push(sellerData);
        }
    }

    return result;
};

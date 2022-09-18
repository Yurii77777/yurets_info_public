/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const getProductsData = (catalog = []) => {
    let result = [];

    const getProducts = (catalog) => {
        for (let i = 0; i < catalog.length; i++) {
            const vendorName = catalog[i];

            for (let key in vendorName) {
                let categories = vendorName[key];

                if (categories.length) {
                    for (let j = 0; j < categories.length; j++) {
                        const category = categories[j];
                        for (let key in category) {
                            const products = category[key];

                            if (products.length) {
                                for (let k = 0; k < products.length; k++) {
                                    const { id, productName, rrp } =
                                        products[k];

                                    let productItem = {};

                                    productItem["id"] = id;
                                    productItem["productName"] = productName;
                                    productItem["rrp"] = rrp;

                                    result.push(productItem);
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    getProducts(catalog);

    return result;
};

module.exports = getProductsData;

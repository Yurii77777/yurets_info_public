/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

export const makeProductsCatalog = (catalog) => {
    let result = [];

    for (let i = 0; i < catalog.length; i++) {
        const vendor = catalog[i];

        for (let key in vendor) {
            const vendorTitle =  key;

            if (Array.isArray(vendor[key])) {
                const categories = vendor[key];

                if (categories.length) {
                    for (let j = 0; j < categories.length; j++) {
                        const category = categories[j];

                        for (let key in category) {
                            if (Array.isArray(category[key])) {
                                const categoryProducts = category[key];

                                for (
                                    let k = 0;
                                    k < categoryProducts.length;
                                    k++
                                ) {
                                    let productItem = categoryProducts[k];
                                    productItem["productVendor"] = vendorTitle;
                                    result.push(productItem);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return result;
};

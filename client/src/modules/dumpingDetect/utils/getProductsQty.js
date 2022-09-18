/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

/**
 * Function calculates products qty in the catalog
 * @param {Array} props
 * @returns Number - total products qty
 */
export const getProductsQty = (props) => {
    let productsQty = 0;

    //TODO: Обмозковать как запустить рекурсию - идеальное место для нее
    for (let i = 0; i < props.length; i++) {
        const vendor = props[i];

        for (let key in vendor) {
            if (Array.isArray(vendor[key])) {
                const categories = vendor[key];

                if (categories.length) {
                    for (let j = 0; j < categories.length; j++) {
                        const category = categories[j];

                        for (let key in category) {
                            Array.isArray(category[key]) &&
                                (productsQty += category[key].length);
                        }
                    }
                }
            }
        }
    }

    return productsQty;
};

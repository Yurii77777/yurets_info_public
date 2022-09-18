/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import PT from 'prop-types';

import { ShortInfoProductsList } from '../ShortInfoProductsList/ShortInfoProductsList.js';

export const ShortInfoProductsContainer = ({ language, sellers }) => {
    return sellers.map(({ sellerName, dumpingPdocutsPercent, sellerGoods }, i) => 
        <ShortInfoProductsList
            language={language}  
            sellerName={sellerName}
            dumpingPdocutsPercent={dumpingPdocutsPercent}
            sellerGoods={sellerGoods}
            key={i}
        />)
}

ShortInfoProductsContainer.propTypes = {
    language: PT.string.isRequired,
    sellers: PT.array.isRequired
};

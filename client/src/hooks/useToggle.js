/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */

import { useState, useCallback } from "react";

/**
 * Перемикач true/false
 * показати/приховати моб. версію меню, показати/приховати список доступних мов...
 * @param {Boolean} initialState
 * @returns
 */
export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState((state) => !state), []);

    return [state, toggle];
};

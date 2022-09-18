/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, и только хорошо! А можешь? - Делай лучше!"
 */

import { useState, useEffect } from "react";

const defaultSelect = (data) => data;

export const useFetch = (options = {}) => {
    const {
        url: initialUrl,
        onSelect = defaultSelect,
        isEnabled = true,
    } = options;

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        if (!isEnabled) return;

        handleGetRequest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialUrl, isEnabled]);

    const handleGetRequest = async (url) => {
        setIsLoading(true);

        try {
            if (url || initialUrl) {
                const response = await fetch(url || initialUrl);
                const result = await response.json();

                console.log("[result]", result);

                const fetchedData = onSelect(result);
                setData(fetchedData);
            }
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, get: handleGetRequest };
};

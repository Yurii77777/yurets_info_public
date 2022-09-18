/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import PT from "prop-types";

import { useFetch } from "../../hooks/useFetch";

import CustomizedTabs from "./components/TabsMUI/TabsMUI";

import { Loader } from "../../components/Loader/Loader";
import { TopInfo } from "./components/TopInfo/TopInfo";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { ProductsData } from "./components/ProductsData/ProductsData";
import { ShortInfo } from "./components/ShortInfo/ShortInfo";
import { AppsDescription } from "../../components/AppsDescription/AppsDescription";
import { AppsStacklist } from "../../components/AppsStacklist/AppsStacklist";

import { catalog } from "./data/catalog";
import { getVendors } from "./utils/getVendors";
import { getProductsQty } from "./utils/getProductsQty";
import { getProductsData } from "./utils/getProductsData";
import { getUpdateDate } from "./utils/getUpdateDate";
import { prepareDataForRender } from "./utils/prepareDataForRender";
import { articlesDescription } from "../../data/articlesDescription";
import { stackList } from "../../data/stackList";

import "./DumpingDetect.scss";

//TODO: Відсутні позиції в наявності у контрагента, котрі повинні у нього бути
export const DumpingDetect = ({ language }) => {
    let productsDataForRender = [];
    const vendors = getVendors(catalog);
    const productsQty = getProductsQty(catalog);
    const productsData = getProductsData(catalog);
    let sellersQty = 0;

    const { data: sellersData = [], isLoading } = useFetch({
        url: "/api/dumping-detector/getall",
    });

    const lastUpdateDate = getUpdateDate(sellersData);

    if (sellersData.length) {
        productsDataForRender = prepareDataForRender(sellersData, catalog);
        sellersQty = productsDataForRender.length;
    }

    return (
        <article className="module-article dd-article">
            <h1 className="module-article__title secondary-title">
                DUMPING DETECTOR v.1.0.0
            </h1>

            <TopInfo
                language={language}
                vendors={vendors}
                lastUpdateDate={lastUpdateDate}
                productsQty={productsQty}
                sellersQty={sellersQty}
            />

            <section className="module-article__products">
                {isLoading ? (
                    <Loader />
                ) : (
                    <CustomizedTabs
                        tab1Value={
                            <ShortInfo
                                language={language}
                                productsData={productsData}
                                productsDataForRender={productsDataForRender}
                            />
                        }
                        tab2Value={
                            <>
                                <ProductsList
                                    language={language}
                                    productsData={productsData}
                                />
                                <ProductsData
                                    language={language}
                                    productsDataForRender={
                                        productsDataForRender
                                    }
                                    productsData={productsData}
                                />
                            </>
                        }
                    />
                )}
            </section>

            <AppsDescription
                language={language}
                descriptions={articlesDescription}
                appId={0}
            />

            <AppsStacklist
                language={language}
                stackList={stackList}
                settingToFilter={[5, 6, 7, 8]}
            />
        </article>
    );
};

DumpingDetect.propTypes = {
    language: PT.string.isRequired,
};

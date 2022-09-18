import PT from "prop-types";

export const ShortInfoSellerGoods = ({ sellerGoods, isShowFullData }) => {
    let shortData = [];
    const isTooBigData = sellerGoods.length > 5;
    isTooBigData && (shortData = sellerGoods.slice(0, 5));

    if (isTooBigData && !isShowFullData) {
        return shortData.map(
            (
                {
                    productName,
                    productUrl,
                    productRrp,
                    currentPrice,
                    dumpimgPercent,
                },
                i
            ) => {
                return (
                    <li className="dd-shrot-info__item" key={i}>
                        <a
                            href={productUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={
                                dumpimgPercent < 20
                                    ? "dd-shrot-info__item-link"
                                    : "dd-shrot-info__item-link dumping"
                            }
                        >
                            <span>{i + 1}</span>
                            <span>{productName}</span>
                            <span>{productRrp}</span>
                            <span>{currentPrice}</span>
                            <span>{dumpimgPercent}%</span>
                        </a>
                    </li>
                );
            }
        )
    } else if (isTooBigData && isShowFullData) {
        return sellerGoods.map(
            (
                {
                    productName,
                    productUrl,
                    productRrp,
                    currentPrice,
                    dumpimgPercent,
                },
                i
            ) => {
                return (
                    <li className="dd-shrot-info__item" key={i}>
                        <a
                            href={productUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={
                                dumpimgPercent < 20
                                    ? "dd-shrot-info__item-link"
                                    : "dd-shrot-info__item-link dumping"
                            }
                        >
                            <span>{i + 1}</span>
                            <span>{productName}</span>
                            <span>{productRrp}</span>
                            <span>{currentPrice}</span>
                            <span>{dumpimgPercent}%</span>
                        </a>
                    </li>
                );
            }
        );
    } else {
        return sellerGoods.map(
            (
                {
                    productName,
                    productUrl,
                    productRrp,
                    currentPrice,
                    dumpimgPercent,
                },
                i
            ) => {
                return (
                    <li className="dd-shrot-info__item" key={i}>
                        <a
                            href={productUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={
                                dumpimgPercent < 20
                                    ? "dd-shrot-info__item-link"
                                    : "dd-shrot-info__item-link dumping"
                            }
                        >
                            <span>{i + 1}</span>
                            <span>{productName}</span>
                            <span>{productRrp}</span>
                            <span>{currentPrice}</span>
                            <span>{dumpimgPercent}%</span>
                        </a>
                    </li>
                );
            }
        );
    }
};

ShortInfoSellerGoods.propTypes = {
    sellerGoods: PT.array.isRequired,
    // isShowFullData: PT.bool.isRequired
};

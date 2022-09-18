/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

const productsDS = {
    sellerId: 12,
    sellerName: "DS",
    sellerUrl: "https://www.domofony.com.ua/",
    sellerProducts: [
        {
            productId: 0,
            productName: "ML-16HR (b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-ml-16hr.html",
        },
        {
            productId: 1,
            productName: "ML-16HR (s)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-ml-16hr.html",
        },
        {
            productId: 2,
            productName: "ML-16HD (b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-ml-16hd.html",
        },
        {
            productId: 3,
            productName: "ML-16HD (s)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-ml-16hd.html",
        },
        {
            productId: 4,
            productName: "ML-15HD (b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-ml-15hd.html",
        },
        {
            productId: 5,
            productName: "ML-15HD (s)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-ml-15hd.html",
        },
        {
            productId: 6,
            productName: "ML-15HD (copper)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-ml-15hd.html",
        },
        {
            productId: 7,
            productName: "ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-20hd.html",
        },
        {
            productId: 8,
            productName: "ML-20HD (gld/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-20hd.html",
        },
        {
            productId: 9,
            productName: "ML-20CRHD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-20crhd.html",
        },
        {
            productId: 10,
            productName: "ML-20CRHD (gld/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-20crhd.html",
        },
        {
            productId: 11,
            productName: "ML-20IP (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-20ip.html",
        },
        {
            productId: 12,
            productName: "ML-20IP (gld/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-20ip.html",
        },
        {
            productId: 148,
            productName: "ML-20IP (gld/w)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-20ip.html",
        },
        {
            productId: 13,
            productName: "ML-20TLHD (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-20tlhd.html",
        },
        {
            productId: 14,
            productName: "ML-17HD (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ml-17hd.html",
        },
        {
            productId: 15,
            productName: "MA-01HD (s)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ma-01hd.html",
        },
        {
            productId: 16,
            productName: "MA-01CRHD (s)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ma-01crhd.html",
        },
        {
            productId: 19,
            productName: "MA-02CRHD (s)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ma-02crhd.html",
        },
        {
            productId: 20,
            productName: "MA-03CRHD (s)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ma-03.html",
        },
        {
            productId: 22,
            productName: "MA-04CRHD (s)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/vyzyvnaja-panel-slinex-ma-04crhd.html",
        },
        {
            productId: 24,
            productName: "SQ-04 (w)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/domofon-slinex-sq-04.html",
        },
        {
            productId: 25,
            productName: "SQ-04 (b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/domofon-slinex-sq-04.html",
        },
        {
            productId: 26,
            productName: "SQ-04M (w)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/domofon-slinex-sq-04m.html",
        },
        {
            productId: 27,
            productName: "SQ-04M (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/domofon-slinex-sq-04m.html",
        },
        {
            productId: 28,
            productName: "SM-07MN (w)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/domofon-slinex-sm-07mn.html",
        },
        {
            productId: 29,
            productName: "SM-07MN (gr)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/domofon-slinex-sm-07mn.html",
        },
        {
            productId: 30,
            productName: "SM-07MHD (w)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/videodomofon-slinex-sm-07mhd.html",
        },
        {
            productId: 31,
            productName: "SM-07MHD (gr)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/videodomofon-slinex-sm-07mhd.html",
        },
        {
            productId: 32,
            productName: "SQ-07MTHD (w)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sq-07mthd.html",
        },
        {
            productId: 33,
            productName: "SQ-07MTHD (b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sq-07mthd.html",
        },
        {
            productId: 34,
            productName: "Sonik 7 (w)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sonik-7.html",
        },
        {
            productId: 35,
            productName: "Sonik 7 (b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sonik-7.html",
        },
        {
            productId: 36,
            productName: "Sonik 7 Cloud (w)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sonik-7-cloud.html",
        },
        {
            productId: 37,
            productName: "Sonik 7 Cloud (b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sonik-7-cloud.html",
        },
        {
            productId: 38,
            productName: "Sonik 10 (w)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sonik-10.html",
        },
        {
            productId: 39,
            productName: "Sonik 10 (b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sonik-10.html",
        },
        {
            productId: 40,
            productName: "SL-07IPHD (s/w)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sl-07iphd.html",
        },
        {
            productId: 41,
            productName: "SL-07IPHD (s/b)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-sl-07iphd.html",
        },
        {
            productId: 42,
            productName: "SL-10IPTHD (s/w)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/domofon-slinex-sl-10ipthd.html",
        },
        {
            productId: 43,
            productName: "SL-10IPTHD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/domofon-slinex-sl-10ipthd.html",
        },
        {
            productId: 44,
            productName: "SL-10IPTHD (g/w)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/domofon-slinex-sl-10ipthd.html",
        },
        {
            productId: 45,
            productName: "RD-30 v2 (w)",
            productVendor: "Slinex",
            productUrl: "https://www.domofony.com.ua/slinex-rd-30.html",
        },
        {
            productId: 47,
            productName: "SQ-04(w) + ML-16НR (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sq-04-white-ml-16hr-black.html",
        },
        {
            productId: 51,
            productName: "SQ-04M(w) + ML-16НR (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sq-04m-white-ml-16hr-black.html",
        },
        {
            productId: 55,
            productName: "SM-07MHD(w) + ML-16НD (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-16hd.html",
        },
        {
            productId: 56,
            productName: "SM-07MHD(gr) + ML-16НD (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-16hd.html",
        },
        {
            productId: 57,
            productName: "SM-07MHD(w) + ML-15HD (gr)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-15hd.html",
        },
        {
            productId: 58,
            productName: "SM-07MHD(w) + ML-15HD (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-15hd.html",
        },
        {
            productId: 59,
            productName: "SM-07MHD(gr) + ML-15HD (gr)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-15hd.html",
        },
        {
            productId: 60,
            productName: "SM-07MHD(gr) + ML-15HD (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-15hd.html",
        },
        {
            productId: 61,
            productName: "SM-07MHD(w) + ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-20hd.html",
        },
        {
            productId: 62,
            productName: "SM-07MHD(w) + ML-20HD (b/gld)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-20hd.html",
        },
        {
            productId: 63,
            productName: "SM-07MHD(gr) + ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-20hd.html",
        },
        {
            productId: 64,
            productName: "SM-07MHD(gr) + ML-20HD (b/gld)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-20hd.html",
        },
        {
            productId: 65,
            productName: "SQ-07MTHD (w) + ML-15НD (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sq-07mthd-ml-15hd.html",
        },
        {
            productId: 66,
            productName: "SQ-07MTHD (b) + ML-15НD (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sq-07mthd-ml-15hd.html",
        },
        {
            productId: 71,
            productName: "Sonik 7 (w) + ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sonik-7-slinex-ml-20hd.html",
        },
        {
            productId: 72,
            productName: "Sonik 7 (w) + ML-20HD (b/gld)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sonik-7-slinex-ml-20hd.html",
        },
        {
            productId: 73,
            productName: "Sonik 7 (b) + ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sonik-7-slinex-ml-20hd.html",
        },
        {
            productId: 74,
            productName: "Sonik 7 (b) + ML-20HD (b/gld)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sonik-7-slinex-ml-20hd.html",
        },
        {
            productId: 79,
            productName: "SM-07MN (w) + ML-16HR (b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sm-07m-white-ml-16hr-black.html",
        },
        {
            productId: 90,
            productName: "SQ-07MTHD (w) + ML-15НD (s)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sq-07mthd-ml-15hd.html",
        },
        {
            productId: 91,
            productName: "SQ-07MTHD (w) + ML-15НD (copper)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sq-07mthd-ml-15hd.html",
        },
        {
            productId: 92,
            productName: "SQ-07MTHD (b) + ML-15НD (s)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sq-07mthd-ml-15hd.html",
        },
        {
            productId: 93,
            productName: "SQ-07MTHD (b) + ML-15НD (copper)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sq-07mthd-ml-15hd.html",
        },
        {
            productId: 100,
            productName: "SQ-07MTHD (b) + ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sq-07mthd-slinex-ml-20hd.html",
        },
        {
            productId: 101,
            productName: "SQ-07MTHD (b) + ML-20HD (b/gld)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sq-07mthd-slinex-ml-20hd.html",
        },
        {
            productId: 102,
            productName: "SQ-07MTHD (w) + ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sq-07mthd-slinex-ml-20hd.html",
        },
        {
            productId: 103,
            productName: "SQ-07MTHD (w) + ML-20HD (b/gld)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sq-07mthd-slinex-ml-20hd.html",
        },
        {
            productId: 106,
            productName: "SM-07MHD (w) + ML-15HD (copper)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-15hd.html",
        },
        {
            productId: 107,
            productName: "SM-07MHD (gr) + ML-15HD (copper)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-slinex-sm-07mhd-slinex-ml-15hd.html",
        },
        {
            productId: 140,
            productName: "SL-10IPTHD (s/w) + ML-20HD (b/gld)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sl-10ipt-ml-20hd.html",
        },
        {
            productId: 141,
            productName: "SL-10IPTHD (g/w) + ML-20HD (b/gld)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sl-10ipt-ml-20hd.html",
        },
        {
            productId: 142,
            productName: "SL-10IPTHD (g/w) + ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sl-10ipt-ml-20hd.html",
        },
        {
            productId: 143,
            productName: "SL-10IPTHD (s/w) + ML-20HD (s/b)",
            productVendor: "Slinex",
            productUrl:
                "https://www.domofony.com.ua/komplekt-sl-10ipt-ml-20hd.html",
        },
    ],
};

module.exports = productsDS;

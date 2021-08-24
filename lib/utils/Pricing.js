"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatePrice = void 0;
const logger_util_1 = require("../utils/logger.util");
const CalculatePrice = (Pricingprms) => {
    var cartObj = JSON.parse(JSON.stringify(require(Pricingprms.cartFile)));
    var pricingObj = JSON.parse(JSON.stringify(require(Pricingprms.pricingFile)));
    var TotalPrice = 0;
    cartObj.forEach((cart) => {
        var BasePrice = 0;
        var NettPrice = 0;
        var pricingOptions = pricingObj.filter(x => x["product-type"] == cart["product-type"]);
        if (pricingOptions != null && pricingOptions.length > 0) {
            var priceFound = false;
            pricingOptions.forEach((basePrice) => {
                if (!priceFound) {
                    var Pass = true;
                    for (var key in basePrice.options) {
                        if (cart.options.hasOwnProperty(key) &&
                            basePrice.options[key].findIndex(x => x == cart.options[key]) > -1) { }
                        else {
                            Pass = false;
                        }
                    }
                    if (Pass) {
                        BasePrice = basePrice["base-price"];
                        priceFound = true;
                    }
                }
            });
            logger_util_1.showInfo('Cart item - product type: ' + cart["product-type"] + ' with options ' + cart.options);
            logger_util_1.showInfo('Base Price determined:' + BasePrice);
            var markUp = parseFloat((cart["artist-markup"] / 100).toString());
            NettPrice = (BasePrice + Math.round(BasePrice * markUp)) * cart.quantity;
            logger_util_1.showInfo('MarkUp determined :' + markUp);
            logger_util_1.showInfo('Nett Price is:' + NettPrice);
        }
        TotalPrice = TotalPrice + NettPrice;
    });
    logger_util_1.showSuccess('TotalPrice(cents) of the shopping cart is:' + TotalPrice);
    TotalPrice = TotalPrice / 100;
    logger_util_1.showSuccess('TotalPrice(dollars) of the shopping cart is:' + TotalPrice);
    return TotalPrice;
};
exports.CalculatePrice = CalculatePrice;

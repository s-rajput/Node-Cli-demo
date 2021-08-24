"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const questions_1 = require("./questions");
const logger_util_1 = require("./utils/logger.util");
const Pricing_1 = require("./utils/Pricing");
const clear = require('clear');
async function index() {
    clear();
    logger_util_1.showTitleAndBanner();
    const providerPricingPrms = await questions_1.userNameQuestion();
    Pricing_1.CalculatePrice(providerPricingPrms);
}
exports.index = index;
index();

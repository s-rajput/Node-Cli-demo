
import { CalculatePrice } from '../utils/Pricing';
import { PricingParameters } from '../models/cart';

var expect = require("chai").expect;

var PricingPrms: PricingParameters = {
    pricingFile: '../../assets/files/base-prices/prices-1.json',
    cartFile: ''
}
describe('Calculator Tests', function () {


    it.only('Cart file-4560 calcution', function () {

        PricingPrms.cartFile = '../../assets/files/cart/cart-4560.json';

        var ExpectedResult = 45.60;
        var Validity = CalculatePrice(PricingPrms);
        expect(Validity).to.equal(ExpectedResult);
    });


    it.only('Cart file-9363 calcution', function () {

        PricingPrms.cartFile = '../../assets/files/cart/cart-9363.json';

        var ExpectedResult = 93.63;
        var Validity = CalculatePrice(PricingPrms);
        expect(Validity).to.equal(ExpectedResult);
    });


    it.only('Cart file-9500 calcution', function () {

        PricingPrms.cartFile = '../../assets/files/cart/cart-9500.json';

        var ExpectedResult = 95;
        var Validity = CalculatePrice(PricingPrms);
        expect(Validity).to.equal(ExpectedResult);
    });


    it.only('Cart file-11356 calcution', function () {

        PricingPrms.cartFile = '../../assets/files/cart/cart-11356.json';

        var ExpectedResult = 113.56;
        var Validity = CalculatePrice(PricingPrms);
        expect(Validity).to.equal(ExpectedResult);
    });



});

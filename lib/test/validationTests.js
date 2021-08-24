"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("../utils/validator");
var expect = require("chai").expect;
var InValid_Schema_Cart_File_Missing_ProductType = '../../assets/files/cart/Invalid-cart-missing-producttype.json';
var Valid_Schema_Cart_File = '../../assets/files/cart/cart-4560.json';
describe('Validation Tests - Schema validity and Missing prices', function () {
    describe('Schema validitity', function () {
        it.only('validation should fail due to missing mandatory element - product type', function () {
            var ExpectedResult = false;
            var Validity = validator_1.validateCartFile(InValid_Schema_Cart_File_Missing_ProductType);
            expect(Validity).to.equal(ExpectedResult);
        });
        it.only('validation should pass schema validation', function () {
            var ExpectedResult = true;
            var Validity = validator_1.validateCartFile(Valid_Schema_Cart_File);
            expect(Validity).to.equal(ExpectedResult);
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCartFile = exports.validatePricingFile = void 0;
var Validator = require('jsonschema').Validator;
const logger_util_1 = require("./logger.util");
const GetFileContents = (filepath) => {
    try {
        return require(filepath);
    }
    catch (e) { }
    return '';
};
const validateJsonFile = (path, schema) => {
    var jsonString = GetFileContents(path);
    if (!jsonString) {
        logger_util_1.showError(`${path} does not exists, please enter valid file!`);
        return false;
    }
    var v = new Validator();
    v.addSchema(jsonString);
    const result = v.validate(jsonString, schema);
    result.valid ? logger_util_1.showInfo(`Great - schema validation pass`) : logger_util_1.showInfo(`Schema validation failed, please check your json file`);
    return result.valid;
};
const validatePricingFile = (path) => {
    var jsonSchema = require('../../assets/files/base-prices/base-prices.schema.json');
    return validateJsonFile(path, jsonSchema);
};
exports.validatePricingFile = validatePricingFile;
const validateCartFile = (path) => {
    var jsonSchema = require('../../assets/files/cart/cart.schema.json');
    return validateJsonFile(path, jsonSchema);
};
exports.validateCartFile = validateCartFile;

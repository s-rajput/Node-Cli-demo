var Validator = require('jsonschema').Validator;
import { showError, showInfo } from './logger.util';



const GetFileContents = (filepath: string): string => {

    try { return require(filepath); } catch (e) { }

    return '';
}

const validateJsonFile = (path: string, schema: string): boolean => {

    var jsonString = GetFileContents(path);

    if (!jsonString) {
        showError(`${path} does not exists, please enter valid file!`);
        return false;
    }
 
    var v = new Validator();
    v.addSchema(jsonString);
    const result = v.validate(jsonString, schema);
    result.valid ? showInfo(`Great - schema validation pass`) : showInfo(`Schema validation failed, please check your json file`);
    return result.valid;
};

export const validatePricingFile = (path: string): boolean => {

    var jsonSchema = require('../../assets/files/base-prices/base-prices.schema.json');

    return validateJsonFile(path, jsonSchema);
}

export const validateCartFile = (path: string): boolean => {

    var jsonSchema = require('../../assets/files/cart/cart.schema.json');
    return validateJsonFile(path, jsonSchema);
}


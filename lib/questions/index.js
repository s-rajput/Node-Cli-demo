"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userNameQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const validator_1 = require("../utils/validator");
const argv = require('minimist')(process.argv.slice(2));
function userNameQuestion() {
    return inquirer_1.default.prompt([
        {
            name: 'cartFile',
            type: 'input',
            message: 'Please enter your json cart file- ',
            default: argv._[0] || null,
            validate: function (value) {
                if (value.length) {
                    return validator_1.validateCartFile(value);
                }
                else {
                    return 'Please enter a valid file path';
                }
            }
        },
        {
            name: 'pricingFile',
            type: 'input',
            message: 'Please enter your json pricing file- ',
            default: argv._[1] || null,
            validate: function (value) {
                if (value.length) {
                    return validator_1.validatePricingFile(value);
                }
                else {
                    return 'Please enter a valid file path';
                }
            }
        },
    ]);
}
exports.userNameQuestion = userNameQuestion;

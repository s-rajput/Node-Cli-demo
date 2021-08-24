import inquirer from 'inquirer';

import { validatePricingFile, validateCartFile } from '../utils/validator';

const argv = require('minimist')(process.argv.slice(2));

export function userNameQuestion(): Promise<any> {
    return inquirer.prompt(
        [
            {
                name: 'cartFile',
                type: 'input',
                message: 'Please enter your json cart file- ',
                default: argv._[0] || null,
                validate: function (value) {
                    if (value.length) {
                        return validateCartFile(value);
                    } else {
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
                        return validatePricingFile(value);
                    } else {
                        return 'Please enter a valid file path';
                    }
                }
            },

        ]);
}
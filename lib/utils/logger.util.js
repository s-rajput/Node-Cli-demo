"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showInfo = exports.showSuccess = exports.showError = exports.showTitleAndBanner = void 0;
const tslib_1 = require("tslib");
const kleur_1 = require("kleur");
const figlet = tslib_1.__importStar(require("figlet"));
const console_message_1 = require("../models/console-message");
const newLine = '\n';
const showTitleAndBanner = () => {
    console.log(kleur_1.cyan(figlet.textSync(console_message_1.ConsoleMessage.TITLE, { horizontalLayout: 'full' })));
    console.info(kleur_1.cyan(console_message_1.ConsoleMessage.BANNER));
};
exports.showTitleAndBanner = showTitleAndBanner;
const showError = (message) => {
    console.error(newLine + kleur_1.red(console_message_1.ConsoleMessage.ERROR) + message);
};
exports.showError = showError;
const showSuccess = (message) => {
    console.log(newLine + kleur_1.green(console_message_1.ConsoleMessage.SUCCESS) + message + newLine);
};
exports.showSuccess = showSuccess;
const showInfo = (message) => {
    console.info(newLine + kleur_1.cyan(console_message_1.ConsoleMessage.INFO) + message + newLine);
};
exports.showInfo = showInfo;

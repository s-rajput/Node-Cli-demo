import { red, green, cyan } from 'kleur';
import * as figlet from 'figlet';

import { ConsoleMessage } from '../models/console-message';

const newLine = '\n';

export const showTitleAndBanner = (): void => {
    console.log(cyan(figlet.textSync(ConsoleMessage.TITLE, { horizontalLayout: 'full' })));
    console.info(cyan(ConsoleMessage.BANNER));
}

export const showError = (message: string | Error): void => {
    console.error(newLine + red(ConsoleMessage.ERROR) + message);
}

export const showSuccess = (message: string): void => {
    console.log(newLine + green(ConsoleMessage.SUCCESS) + message + newLine);
}

export const showInfo = (message: string): void => {
    console.info(newLine + cyan(ConsoleMessage.INFO) + message + newLine);
}


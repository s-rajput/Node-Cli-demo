import { PricingParameters } from './models/cart';
import { userNameQuestion } from './questions';
import { showTitleAndBanner } from './utils/logger.util';
import { CalculatePrice } from './utils/Pricing';

const clear = require('clear');


export async function index(): Promise<any> {

    //clear console to prepare the console window
    clear();

    showTitleAndBanner();

    const providerPricingPrms: PricingParameters = await userNameQuestion();

    CalculatePrice(providerPricingPrms);

}

index();
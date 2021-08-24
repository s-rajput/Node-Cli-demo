import { IBasePrices } from "../models/base-prices";
import { ICart, PricingParameters } from "../models/cart";
import { showInfo, showSuccess } from '../utils/logger.util';

export const CalculatePrice = (Pricingprms: PricingParameters): number => {

    var cartObj: ICart[] = JSON.parse(JSON.stringify(require(Pricingprms.cartFile)));

    var pricingObj: IBasePrices[] = JSON.parse(JSON.stringify(require(Pricingprms.pricingFile)));

    var TotalPrice = 0;

    cartObj.forEach((cart: ICart) => {

        //get price
        var BasePrice = 0;
        var NettPrice = 0;

        var pricingOptions = pricingObj.filter(x => x["product-type"] == cart["product-type"]);

        if (pricingOptions != null && pricingOptions.length > 0) {


            var priceFound = false;


            pricingOptions.forEach((basePrice: IBasePrices) => {

                if (!priceFound) {

                    var Pass = true;

                    for (var key in basePrice.options) {

                        if (cart.options.hasOwnProperty(key) &&
                            basePrice.options[key].findIndex(x => x == cart.options[key]) > -1) { }
                        else { Pass = false; }
                    }

                    if (Pass) {
                        BasePrice = basePrice["base-price"];
                        priceFound = true;
                    }
                }
            });

            showInfo('Cart item - product type: ' + cart["product-type"] + ' with options ' + cart.options);
            showInfo('Base Price determined:' + BasePrice);

            //Note that artist_markup is a percentage, so it will need to be divided by 100.
            var markUp = parseFloat((cart["artist-markup"] / 100).toString());

            NettPrice = (BasePrice + Math.round(BasePrice * markUp)) * cart.quantity;
            showInfo('MarkUp determined :' + markUp);
            showInfo('Nett Price is:' + NettPrice);
        }


        TotalPrice = TotalPrice + NettPrice;

    });

    showSuccess('TotalPrice(cents) of the shopping cart is:' + TotalPrice);
    TotalPrice = TotalPrice / 100;
    showSuccess('TotalPrice(dollars) of the shopping cart is:' + TotalPrice);

    return TotalPrice;

}
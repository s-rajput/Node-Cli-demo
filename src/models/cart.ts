export interface PricingParameters {
    cartFile: string;
    pricingFile: string;
}
export interface ICart {

    'product-type': string,
    'options': { [key: string]: string },
    'artist-markup': number,
    'quantity': number
}

export enum producttype {
    Hoodie = 'Hoodie'
}


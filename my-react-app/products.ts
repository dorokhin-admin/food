export const enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    RUB = 'RUB',
}//saddas

type Product = {
    id: number;
    imgSrc: string;
    promo: number;
    priceDiscontText: string;
    price: number
    priceText: string;
    name:string;
    country:string;
    quantity: number
    currency: Currency;
}

export const products: Product[] = [
    {
        id:1,
        imgSrc: 'src/IMAGES/blini.png',
        promo: 10,
        priceDiscontText: 'С картой',
        price: 50.50,
        priceText: 'Обычная',
        name:'Г/Ц Блинчики с мясом вес,',
        country:'Россия',
        quantity: 1,
        currency: Currency.RUB
    },
    {
        id:2,
        imgSrc: 'src/IMAGES/milk.png',
        promo: 10,
        priceDiscontText: 'С картой',
        price: 50.50,
        priceText: 'Обычная',
        name:'Г/Ц Блинчики с мясом вес,',
        country:'Россия',
        quantity: 1,
        currency: Currency.USD
    },
    {
        id:3,
        imgSrc: 'src/IMAGES/kolbasi.png',
        promo: 10,
        priceDiscontText: 'С картой',
        price: 50.50,
        priceText: 'Обычная',
        name:'Г/Ц Блинчики с мясом вес,',
        country:'Россия',
        quantity: 1,
        currency: Currency.USD
    },
    {
        id:4,
        imgSrc: 'src/IMAGES/kolbasi.png',
        promo: 10,
        priceDiscontText: 'С картой',
        price: 50.50,
        priceText: 'Обычная',
        name:'Г/Ц Блинчики с мясом вес,',
        country:'Россия',
        quantity: 1,
        currency: Currency.RUB
    }
]
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
        quantity: 1
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
        quantity: 1
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
        quantity: 1
    },
    {
        id:4,
        imgSrc: 'src/IMAGES/kolbasi.png',
        promo: 10,
        priceDiscont: 44.50,
        priceDiscontText: 'С картой',
        price: 50.50,
        priceText: 'Обычная',
        name:'Г/Ц Блинчики с мясом вес,',
        country:'Россия',
        quantity: 1
    }
]
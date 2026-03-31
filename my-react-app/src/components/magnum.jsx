import {useState, useEffect} from 'react'
import { Currency } from "../../products.ts";

const magnum = () => {
  const [products, setProducts] = useState([
    [
      {
        id: 1,
        imgSrc: "src/IMAGES/blini.png",
        promo: 10,
        priceDiscontText: "С картой",
        price: 50.5,
        priceText: "Обычная",
        name: "Г/Ц Блинчики с мясом вес,",
        country: "Россия",
        quantity: 1,
        currency: Currency.RUB,
      },
      {
        id: 2,
        imgSrc: "src/IMAGES/milk.png",
        promo: 10,
        priceDiscontText: "С картой",
        price: 50.5,
        priceText: "Обычная",
        name: "Г/Ц Блинчики с мясом вес,",
        country: "Россия",
        quantity: 1,
        currency: Currency.USD,
      },
      {
        id: 3,
        imgSrc: "src/IMAGES/kolbasi.png",
        promo: 10,
        priceDiscontText: "С картой",
        price: 50.5,
        priceText: "Обычная",
        name: "Г/Ц Блинчики с мясом вес,",
        country: "Россия",
        quantity: 1,
        currency: Currency.USD,
      },
      {
        id: 4,
        imgSrc: "src/IMAGES/kolbasi.png",
        promo: 10,
        priceDiscontText: "С картой",
        price: 50.5,
        priceText: "Обычная",
        name: "Г/Ц Блинчики с мясом вес,",
        country: "Россия",
        quantity: 1,
        currency: Currency.RUB,
      },
    ],
  ]);
}
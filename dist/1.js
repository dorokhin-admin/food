"use strict";
const Product1 = { id: 1, name: 'anume', price: 22 };
const Product2 = { id: 2, name: 'asdasd', price: 11, description: 'sadadsa' };
function getProductDescription(product) {
    if (product.description) {
        return product.description;
    }
    else {
        return 'otsutstvuet';
    }
}
getProductDescription(Product2);
getProductDescription(Product1);

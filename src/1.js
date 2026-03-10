var Product1 = { id: 1, name: 'anume', price: 22 };
var Product2 = { id: 2, name: 'asdasd', price: 11, description: 'sadadsa' };
var Product3 = { id: 3, name: 'asdasd', price: 11, description: 'sadadsa' };
function getProductDescription(product) {
    if (product.description) {
        return product.description;
    }
    else {
        return 'otsutstvuet';
    }
}
getProductDescription(Product2);
console.log(getProductDescription(Product1));
console.log('log');

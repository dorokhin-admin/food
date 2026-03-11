type Product = {
    id: number
    name: string
    price: number
    discount?: number
}

const myProducts: Product[] = [
    { id: 1, name: "Phone", price: 1000, discount: 10 },
    { id: 2, name: "Laptop", price: 2000 },
    { id: 3, name: "Tablet", price: 500, discount: 20 }
]

function getFinalPrice(product: Product): number{

         if(product.discount !== undefined){
            return product.price - product.price * product.discount / 100
        }else{
            return product.price
        }

}

console.log(getFinalPrice(myProducts[0]))
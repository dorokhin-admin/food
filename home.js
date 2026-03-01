
const counter = document.querySelector('[data-cart-counter]');
let count = Number(localStorage.getItem('counter')) || 0;//для подтягивания количества товаров в корзине в хедере

if(counter){
    counter.innerText = count;//для проверки количества товаров в корзине в хедере
}

const cart = [];
const cartTotalPrice = document.querySelector('.cart_total_price');


//изменение статуса кнопки в корзину/корзине
const addButtons = document.querySelectorAll('.product-card__add-to-cart');

addButtons.forEach(button  => {
    const card  = button.closest('.product__card')
    if (!card) return;

    const inCartAdded = card.querySelector('.product-card__added-to-cart');
        button.addEventListener('click', () => {
            button.classList.toggle('hidden');
            inCartAdded.classList.toggle('active');
//обновление счетчика корзины
            count += 1;
            localStorage.setItem('counter', count);
            counter.innerText =  count ;
        })


    //изменение статуса кнопки в корзину/корзине
    inCartAdded.addEventListener('click', () => {
            button.classList.toggle('hidden');
            inCartAdded.classList.toggle('active');
            count = count - 1;
        localStorage.setItem('counter', count);
        counter.innerText =  count ;
        })
})

//добавление продукта в корзину
const productLists = document.querySelectorAll('.products__list');

const addProductCart = () => {
    productLists.forEach(productList => {
        productList.addEventListener('click', (event) => {
            const button = event.target.classList.contains('product-card__add-to-cart')
                if(button){
                const product = event.target.closest('.product__card');

                const name  = product.querySelector('.product__card-discription').innerText;
                const img = product.querySelector('.product-card__img').src;
                const priceDiscont = Number(product.querySelector('.product__card-price-discont').innerText.replace('₽', ''));
                const priceDiscontText = product.querySelector('.product__card-price-discont-text').innerText;
                const priceRegular = Number(product.querySelector('.product__card-price-regular').innerText.replace('₽', ''));
                const priceRegularText = product.querySelector('.product__card-price-regular-text').innerText;
                const pricePromo = Number(product.querySelector('.product__card-promo').innerText.replace('₽', ''));
                const id = product.dataset.id;

                const existingItem = cart.find(item => item.id === id);
                if (existingItem) {
                    existingItem.quantity++;
                }else{
                    cart.push({
                        id: id,
                        img: img,
                        name : name ,
                        price: priceDiscont,
                        priceDiscontText: priceDiscontText,
                        priceRegular: priceRegular,
                        priceRegularText: priceRegularText,
                        pricePromo: pricePromo,
                        quantity: 1
                    })
                }
                updateCart()
            }
        });
    });
};

function updateCart(){
    const cartItemsContainer = document.querySelector('.cart_items');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;


    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');


        itemDiv.innerHTML = `
        <div class="cart-item">
            <div class="cart-item__image">
                <button class="cart-item__checkbox">
                <img src="IMAGES/Checkbox%20(2).png" alt="">
                </button>
                <img src="${item.img}" alt="" class="cart-image__img">
            </div>
            <div class="cart-item__info">
                <h3 class="cart-item__title">${item.name}</h3>
                <div class="cart-item__prices">
                    <div class="cart-item__price--card">
                        <div class="cart__price-value ">
                            <p class="cart-item__amount">${item.price} ₽</p>
                        </div>
                    </div>
                    <p class="cart__price-unit">за шт.</p>
                </div>
            </div>
            <div class="cart__quantity-wrapper">
                <div class="cart__quantity">
                    <button class="cart__quantity-btn--minus" data-id="${item.id}"><img src="IMAGES/minus.png" alt="minus"></button>
                    <p class="cart__quantity-number">${item.quantity}</p>
                    <button class="cart__quantity-btn--plus" data-id="${item.id}"><img src="IMAGES/plus.png" alt="plus" ></button>
                </div>
                <div class="cart__sum-price">
                    <p class="cart__sum-price-number">${itemTotal} ₽</p>
                </div>
            </div>
        </div>
        `;
        cartItemsContainer.appendChild(itemDiv)

        totalPrice += itemTotal;
    });
    cartTotalPrice.innerHTML = totalPrice;
}
addProductCart();
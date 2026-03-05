const parrentButton = document.querySelector(".cart_items");



let cart =[];

const products = [
    {
        id:1,
        imgSrc: 'IMAGES/blini.png',
        promo: -10,
        priceDiscont: 44.50,
        priceDiscontText: 'С картой',
        price: 50.50,
        priceText: 'Обычная',
        name:'Г/Ц Блинчики с мясом вес,',
        country:'Россия',
        quantity: 1
    },
    {
        id:2,
        imgSrc: 'IMAGES/milk.png',
        promo: -10,
        priceDiscont: 44.50,
        priceDiscontText: 'С картой',
        price: 50.50,
        priceText: 'Обычная',
        name:'Г/Ц Блинчики с мясом вес,',
        country:'Россия',
        quantity: 1
    },
    {
        id:3,
        imgSrc: 'IMAGES/kolbasi.png',
        promo: -10,
        priceDiscont: 44.50,
        priceDiscontText: 'С картой',
        price: 50.50,
        priceText: 'Обычная',
        name:'Г/Ц Блинчики с мясом вес,',
        country:'Россия',
        quantity: 1
    }
]



products.forEach(product => {
    const productCard = document.createElement('div')
    productCard.innerHTML = `
          <article class="product__card" data-id="${product.id}">
            <div class="product-card__image">
                <img class='product-card__img' src="${product.imgSrc}" alt="product">
                <p class="product__card-promo" data-promo="${product.promo}">-${product.promo}<span>%</span></p>
            </div>
            <button class="product-card__favorite">
                <img src="IMAGES/Button.png" alt="favorite">
            </button>
            <div class="product__card-price">
                <div class="">
                    <p class="product__card-price-discont" data-price="${product.priceDiscont}">${product.priceDiscont}<span>₽</span></p>
                    <p class="product__card-price-discont-text">${product.priceDiscontText}</p>
                </div>
                <div class="">
                    <p class="product__card-price-regular" data-price="50.50">${product.price}<span>₽</span></p>
                    <p class="product__card-price-regular-text">${product.priceText}</p>
                </div>
            </div>
            <p class="product__card-discription">${product.name}</p>
            <p class="product__card-discription">${product.country}</p>
            <div class="product__card-rating">
                <img class="product__star" src="IMAGES/star.png" alt="star" >
                <img class="product__star" src="IMAGES/star.png" alt="star" >
                <img class="product__star" src="IMAGES/star.png" alt="star" >
                <img class="product__star" src="IMAGES/star.png" alt="star" >
                <img class="product__star" src="IMAGES/star.png" alt="star" >
            </div>
            <button class="product-card__add-to-cart">
                В корзину
            </button>
            <button class="product-card__added-to-cart">
                В корзине
            </button>
          </article>
    `;
    const productslist = document.querySelector(".products__list");
    productslist.appendChild(productCard);
})

document.addEventListener('click', (e) => {
    if(e.target.closest('.product-card__add-to-cart')){
        const cardWrapper = e.target.closest('.product__card')//достаем родителя кнопки
        const productId = Number(cardWrapper.dataset.id);//достаем айди карточки
        const product = products.find(product => product.id === productId)//находим и выводим карточку на которую клик
        const productinCart = cart.find(product => product.id === productId)//находим и выводим карточку на которую клик

        if(productinCart){
                productinCart.quantity++;
            }else{
                cart.push({...product, quantity: 1});
            }
        renderCart();
    }

        if(e.target.closest('.cart__quantity-btn--plus')){
            const cardWrapper = e.target.closest('.cart-item')
            const productId = Number(cardWrapper.dataset.id);
            const productInCart = cart.find(p => p.id === productId)
            productInCart.quantity++;
            renderCart()
        }

        if(e.target.closest('.cart__quantity-btn--minus')) {
            const cardWrapper = e.target.closest('.cart-item')
            const productId = Number(cardWrapper.dataset.id)
            const productInCart = cart.find(p => p.id === productId)
            if (productInCart.quantity > 1) {
                productInCart.quantity--;
                renderCart()
            }
        }
    })


function renderCart() {
    parrentButton.innerHTML = '';
    cart.forEach(product => {
        const sumPrice = product.quantity * product.priceDiscont;

        const div = document.createElement('div')
        div.innerHTML = `
            <div class="cart-item" data-id="${product.id}">
                                <div class="cart-item__image">
                                    <button class="cart-item__checkbox"><img src="IMAGES/Checkbox%20(2).png" alt=""></button>
                                    <img src="${product.imgSrc}" alt="" class="cart-image__img">
                                </div>
                                <div class="cart-item__info">
                                    <h3 class="cart-item__title">${product.name}</h3>
                                    <div class="cart-item__prices">
                                        <div class="cart-item__price--card">
                                            <div class="cart__price-value ">
                                                <p class="cart-item__amount">${product.price}</p>
                                                <p class="cart__price-currency">₽</p>
                                            </div>
                                        </div>
                                        <p class="cart__price-unit">за шт.</p>
                                    </div>
                                </div>
                                <div class="cart__quantity-wrapper">
                                    <div class="cart__quantity">
                                        <button class="cart__quantity-btn--minus"><img src="IMAGES/minus.png" alt="minus"></button>
                                        <p class="cart__quantity-number">${product.quantity}</p>
                                        <button class="cart__quantity-btn--plus"><img src="IMAGES/plus.png" alt="plus" ></button>
                                    </div>
                                    <div class="cart__sum-price">
                                        <p class="cart__sum-price-number">${sumPrice}</p>
                                    </div>
                                </div>`;
        parrentButton.appendChild(div);
    })
}
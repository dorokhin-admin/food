const parrentButton = document.querySelector(".cart_items");

let cart =[];

const products = [
    {
        id:1,
        imgSrc: 'IMAGES/blini.png',
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
        imgSrc: 'IMAGES/milk.png',
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
        imgSrc: 'IMAGES/kolbasi.png',
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
        imgSrc: 'IMAGES/kolbasi.png',
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


products.forEach(product => {
    const productCard = document.createElement('div')
    const discontPrice = product.price - (product.price * product.promo  / 100);
    productCard.innerHTML = `
          <article class="product__card" data-id="${product.id}">
            <div class="product-card__image">
                <img class='product-card__img' src="${product.imgSrc}" alt="product">
                <p class="product__card-promo" data-promo="${product.promo}">-${product.promo}%</p>
            </div>
            <button class="product-card__favorite">
                <img src="IMAGES/Button.png" alt="favorite">
            </button>
            <div class="product__card-price">
                <div class="">
                    <p class="product__card-price-discont" data-price="${product.priceDiscont}">${discontPrice} ₽</p>
                    <p class="product__card-price-discont-text">${product.priceDiscontText}</p>
                </div>
                <div class="">
                    <p class="product__card-price-regular" data-price="50.50">${product.price} ₽</p>
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
    const productslists = document.querySelectorAll(".products__list");
    productslists.forEach(productslist => {
        productslist.appendChild(productCard.cloneNode(true));
    })
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
                cart.push({...product});
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
            }else{
                const index = cart.findIndex( item => item.id === productId)
                if(index !== -1){
                    cart.splice(index, 1);
                    renderCart()
                }
            }
        }
    })


function renderCart() {
    parrentButton.innerHTML = '';
    cart.forEach(product => {
        const sumPrice = product.quantity * product.price;
        const discontSumPrice = (product.quantity * (product.price - (product.price * product.promo / 100))).toFixed(2);

        const div = document.createElement('div')

            div.innerHTML = `
             <div class="cart-item" data-id="${product.id}">
                <div class="cart-item__image">
                    <button class="cart-item__checkbox-select active"><img src="IMAGES/Checkbox%20(2).png" alt="" ></button>
                    <button class="cart-item__checkbox-empty hidden"><img src="IMAGES/Checkbox%20(3).png" alt="" ></button>
                    <img src="${product.imgSrc}" alt="" class="cart-image__img">
                </div>
                <div class="cart-item__info">
                    <h3 class="cart-item__title">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</h3>
                    <div class="cart-item__prices">
                        <div class="cart-item__price--card">
                            <div class="cart-item__price-value">
                                <p class="cart-item__amount">44,50 </p>
                                <p class="cart__price-currency">₽</p>
                            </div>
                            <p class="cart-item__price-label">С картой</p>
                        </div>
                        <div class="cartcart__usual-card">
                            <div class="cart-price__usual-card">
                                <p class="cart-item__amount--regular">50,50 </p>
                                <p class="cart__price-currency--regular">₽</p>
                                <p class="cart-item__unit">за шт.</p>
                            </div>
                            <p class="cart-item__price-label">Обычная</p>
                        </div>
                        <p class="cart-item__promo">-10%</p>
                    </div>
                </div>
                <div class="cart__quantity-wrapper">
                    <div class="cart__quantity">
                        <button class="cart__quantity-btn--minus"><img src="IMAGES/minus.png" alt="minus"></button>
                        <p class="cart__quantity-number">${product.quantity}</p>
                        <button class="cart__quantity-btn--plus"><img src="IMAGES/plus.png" alt="plus" ></button>
                    </div>
                    <div class="cart__sum-price">
                        <p class="cart__sum-price-number">${discontSumPrice} ₽</p>
                        <s class="cart__sum-price-under-number">${sumPrice} ₽</s>
                    </div>
                </div>
             </div>`
        parrentButton.appendChild(div);
    })
    updateMakingOrder(cart)
}


const blockCart = document.querySelector('.block-cart')
function getMakingOrderDiv() {

    let makingOrder = blockCart.querySelector('.making-order');
    if (!makingOrder) {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = `<div class="making-order">
                        <div class="making-order__bonus-toggle">
                            <button class="making-order__toggle "><div class="making-order__toggle-circle"></div></button>
                            <p class="making-order__writeoff">Списать 200 ₽ </p>
                        </div>
                        <p class="making-order__accumulated">На карте накоплено 200 ₽</p>
                        <div class="making-order__summary">
                            <div class="making-order__summary-left">
                                <p class="making-order__quantity" data-cart-counter></p>
                                <p class="making-order__discount-label">Скидка</p>
                            </div>
                            <div class="making-order__summary-right">
                                <p class="making-order__sum-items"></p>
                                <p class="making-order__discount"></p>
                            </div>
                        </div>
                        <div class="making-order__total">
                            <p class="making-order__total--result">Итог</p>
                            <p class="making-order__total--priсe"></p>
                        </div>
                        <div class="making-order__bonus">
<!--                            <img src="IMAGES/smile.png" alt="smile">-->
<!--                            <span class="making-order__bonus-text">Вы получаете <span class="product__bonus-text&#45;&#45;bold">100 бонусов</span></span>-->
                        </div>
                        <p class="making-order__min-limit">Минимальная сумма заказа 1000р</p>
                        <button class="making-order__button">Оформить заказ</button>
                </div>`

        blockCart.appendChild(wrapper)

        makingOrder = blockCart.querySelector('.making-order')
    }
    return makingOrder
}

function updateMakingOrder(cart) {
    const makingOrder = getMakingOrderDiv()

    if(cart.length === 0 && makingOrder) {
        makingOrder.remove();
        return;
    }

    if (cart.length === 0) return;

    let activeMakingOrder = makingOrder || getMakingOrderDiv();

    let sumResult = 0;
    let totalQuantity = 0;
    let sumPromo = 0
    let total = 0
    let bonus = 0


    cart.forEach(product => {

        const discontPrice = product.price - (product.price * product.promo  / 100);
        const price = product.promo !== 0
            ? discontPrice
            : product.price;

        sumResult += product.quantity * product.price;
        totalQuantity += product.quantity;
         sumPromo += product.quantity * (product.price * product.promo / 100);
         total += product.quantity * price;
    });



    activeMakingOrder.querySelector('[data-cart-counter]').innerText = `${totalQuantity} товара`
    activeMakingOrder.querySelector('.making-order__total--priсe').innerText = `${sumResult.toFixed(2)} ₽`;
    activeMakingOrder.querySelector('.making-order__sum-items').innerText = `${sumResult.toFixed(2)} ₽`;
    activeMakingOrder.querySelector('.making-order__discount').innerText = `- ${sumPromo.toFixed(2)} ₽`
    activeMakingOrder.querySelector('.making-order__total--priсe').innerText = `${total.toFixed(2)} ₽`

    const divBonus = activeMakingOrder.querySelector('.making-order__bonus');
    const minSum = activeMakingOrder.querySelector('.making-order__min-limit')
    const makingOrderButton = activeMakingOrder.querySelector('.making-order__button')


    if(total <= 1000) {
        minSum.style.display = 'block';
        makingOrderButton.style.backgroundColor = '#FCD5BA';
        makingOrderButton.style.color = '#FF6633';

        divBonus.innerHTML = '';
        return;
    }

    bonus = total * 0.1;
    if(!activeMakingOrder.querySelector('.product__bonus-text--bold')){
    divBonus.innerHTML = `
             <img src="IMAGES/smile.png" alt="smile">
             <span class="making-order__bonus-text">Вы получаете <span
                     class="product__bonus-text--bold"> </span></span>
             `}
    activeMakingOrder.querySelector('.product__bonus-text--bold').innerText = `${bonus.toFixed(0)} бонусов`

    minSum.style.display = 'none';

    makingOrderButton.style.backgroundColor = '#FF6633';
    makingOrderButton.style.color = '#FFFFFF';
    const toggle = document.querySelector('.making-order__toggle');

    let bonusApplied = false;

    toggle.addEventListener('click', () => {

        const makingOrder = getMakingOrderDiv();
        const totalElement = makingOrder.querySelector('.making-order__total--priсe');

        if(!totalElement) return;

        const active = toggle.classList.toggle('active');

        bonusApplied = active;

        let total = cart.reduce((sum, product) => {
            const price = product.price * (1 - (product.promo || 0) / 100);
            return sum + price * product.quantity;
        }, 0);

        if(total > 1000 && bonusApplied){
            total -= 200;
        }

        totalElement.innerText = `${total.toFixed(2)} ₽`;
    });
}



blockCart.addEventListener('click', e => {
    const cartItem = e.target.closest('.cart-item');
    if(!cartItem) return;

    if(e.target.closest('.cart-item__checkbox-select')){
        cartItem.querySelector('.cart-item__checkbox-empty').classList.toggle('hidden');
        cartItem.querySelector('.cart-item__checkbox-select').classList.toggle('hidden');
        cartItem.style.opacity = 0.5;
    }
    if(e.target.closest('.cart-item__checkbox-empty')){
        cartItem.querySelector('.cart-item__checkbox-empty').classList.toggle('hidden');
        cartItem.querySelector('.cart-item__checkbox-select').classList.toggle('hidden');
        cartItem.style.opacity = 1;
    }
})

const cartSelectAll = document.querySelector('.cart-select-all');
cartSelectAll.addEventListener('click', () => {
    const cartItems = blockCart.querySelectorAll('.cart-item');

    const hasUnselected = Array.from(cartItems).some(cartItem => {
        const cartItemSelect = cartItem.querySelector('.cart-item__checkbox-select');
        return cartItemSelect.classList.contains('hidden');
    })
console.log(hasUnselected)
    cartItems.forEach(cartItem => {
        const cartItemSelect = cartItem.querySelector('.cart-item__checkbox-select');
        const cartItemEmpty = cartItem.querySelector('.cart-item__checkbox-empty');

        if(hasUnselected) {
            cartItemSelect.classList.remove('hidden');
            cartItemEmpty.classList.add('hidden');
            cartItem.style.opacity = 1;
        }else{
            cartItemSelect.classList.add('hidden');
            cartItemEmpty.classList.remove('hidden');
            cartItem.style.opacity = 0.5;
        }
    })
})




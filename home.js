





const addButtons = document.querySelectorAll('.product-card__add-to-cart');
addButtons.forEach(button  => {
    const card  = button.closest('.product__card')
    const inCartAdded = card.querySelector('.product-card__added-to-cart');
        button.addEventListener('click', () => {
            button.classList.toggle('hidden');
            inCartAdded.classList.toggle('active');
    })
        inCartAdded.addEventListener('click', () => {
            button.classList.toggle('hidden');
            inCartAdded.classList.toggle('active');
        })
})

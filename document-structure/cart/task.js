const arrOfButtonProductAdd = Array.from(document.querySelectorAll('.product__add'));
const arrOfButtonQuantityProduct = Array.from(document.querySelectorAll('.product__quantity-controls'));
let newProduct = document.querySelector('.cart__products');

arrOfButtonProductAdd.forEach(element => {
    element.addEventListener('click', eventProduct);
});

arrOfButtonQuantityProduct.forEach(element => {
    element.addEventListener('click', countQuantityValue);
});

function eventProduct(event) {
    const target = event.target;
    let quantityProductsInBucket = target.closest('.product__quantity').querySelector('.product__quantity-value').textContent;
    const idCartProductNow = target.closest('.product').dataset.id;
    let isExistNewProductInBucket = false;
    let ArrayOfCartProducts = Array.from(document.querySelectorAll('.cart__product'));

    for (let i = 0; i < ArrayOfCartProducts.length; i++) {

        if (idCartProductNow == ArrayOfCartProducts[i].dataset.id) {
            isExistNewProductInBucket = true;
            ArrayOfCartProducts[i].querySelector('.cart__product-count').textContent = +(ArrayOfCartProducts[i].querySelector('.cart__product-count').textContent) + +quantityProductsInBucket;
        }
    }

    if (!isExistNewProductInBucket) {
        let src = target.closest('.product').querySelector('img').getAttribute('src');
        newProduct.innerHTML += `
            <div class="cart__product" data-id=${idCartProductNow}>
            <img class="cart__product-image" src=${src}>
            <div class="cart__product-count">${quantityProductsInBucket}</div>
            </div>`;
    }
}

function countQuantityValue() {
    let target = event.target;

    if (target.classList.contains('product__quantity-control_inc')) {
        this.querySelector('.product__quantity-value').textContent++;
    }

    if (target.classList.contains('product__quantity-control_dec')) {
        if (this.querySelector('.product__quantity-value').textContent > 1) {
            this.querySelector('.product__quantity-value').textContent--;
        }
    }
}

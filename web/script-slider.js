const priceValue = document.getElementById('priceValue');
const priceSlider = document.getElementById('priceSlider');
const products = document.querySelectorAll('.product[data-price]');

priceSlider.addEventListener('input', function() {
    products.forEach(product => {
        const productPrice = parseInt(product.getAttribute('data-price'));
        priceValue.textContent = priceSlider.value;

        if (productPrice >= parseInt(priceSlider.value)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none'; 
        }
    });
});

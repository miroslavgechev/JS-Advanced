function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let checkoutPrice = 0;
   let productList = [];
   let resultField = document.getElementsByTagName('textarea')[0];
   let hasCheckedOut = false;

   shoppingCart.addEventListener('click', checkCart);

   function checkCart(event) {

      if (event.target.nodeName !== 'BUTTON') {
         return
      }

      if (hasCheckedOut) {
         return
      }

      if (event.target.classList.contains('add-product')) {
         let product = event.target.parentElement.parentElement;

         let productName = product.querySelectorAll('.product-title')[0].textContent;
         let productPrice = product.querySelectorAll('.product-line-price')[0].textContent;

         if (!productList.includes(productName)) {
            productList.push(productName);
         }

         checkoutPrice += Number(productPrice);

         resultField.textContent += `Added ${productName} for ${productPrice} to the cart.\n`
      }

      if (event.target.classList.contains('checkout')) {
         resultField.textContent += `You bought ${productList.join(', ')} for ${checkoutPrice.toFixed(2)}.`
         hasCheckedOut = true;
      }
   }

}
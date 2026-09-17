let cartCount = 0;

let addButtons = document.querySelectorAll(".addBtn");
let cartNumber = document.querySelector("#cartCount");

let cartItems = document.querySelector("#cartItems");
let cartTotal = document.querySelector("#cartTotal");

let total = 0;


addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let productName = button.getAttribute("data-name");
        let productPrice = Number(button.getAttribute("data-price"));

        cartCount++;
        cartNumber.textContent = cartCount;

        total = total + productPrice;
        cartTotal.textContent = total;

        let item = document.createElement("div");

        item.className = "cart-item";

        let itemName = document.createElement("span");

        itemName.textContent = productName + " - $" + productPrice;

        let removeButton = document.createElement("button");

        removeButton.textContent = "Remove";

        removeButton.className = "removeBtn";

        removeButton.addEventListener("click", function() {

            cartCount--;

            cartNumber.textContent = cartCount;

            total = total - productPrice;

            cartTotal.textContent = total;

            item.remove();

        });

        item.appendChild(itemName);

        item.appendChild(removeButton);

        cartItems.appendChild(item);

        button.textContent = "Added ✓";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});

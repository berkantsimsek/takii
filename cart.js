document.addEventListener("DOMContentLoaded", function () {
    let totalPrice = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let price = parseFloat(this.getAttribute("data-price"));
            let productName = this.previousElementSibling.previousElementSibling.textContent;

            totalPrice += price;

            // Sepete ürün ekleme
            let cartItems = document.getElementById("cart-items");
            let newItem = document.createElement("li");
            newItem.innerHTML = `${productName} - ₺${price.toFixed(2)} 
                <button class="delete-item">X</button>`;

            cartItems.appendChild(newItem);

            // Toplam fiyatı güncelle
            document.getElementById("total-price").textContent = totalPrice.toFixed(2);

            // Silme işlemi
            newItem.querySelector(".delete-item").addEventListener("click", function () {
                totalPrice -= price;
                document.getElementById("total-price").textContent = totalPrice.toFixed(2);
                newItem.remove();
            });
        });
    });
});

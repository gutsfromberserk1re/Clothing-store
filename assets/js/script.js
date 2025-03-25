document.addEventListener("DOMContentLoaded", function () {
    fetch("data/products.yml")
        .then(response => response.text())
        .then(data => {
            const products = jsyaml.load(data);
            const productsContainer = document.querySelector(".products-grid");
            const orderDropdown = document.getElementById("product");

            products.forEach(product => {
                // Create product box
                let productDiv = document.createElement("div");
                productDiv.classList.add("product", "fade-in");

                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p><strong>$${product.price}</strong></p>
                    <a href="#" class="buy-button">Buy Now</a>
                `;

                productsContainer.appendChild(productDiv);

                // Add to order dropdown
                if (orderDropdown) {
                    let option = document.createElement("option");
                    option.value = product.name;
                    option.textContent = product.name;
                    orderDropdown.appendChild(option);
                }
            });

            // Trigger fade-in effect
            fadeInElements();
        });
});

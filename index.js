document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
  
    // Fetch products from the JSON file
    fetch('./data/data.json')
      .then(response => response.json())
      .then(products => {
          products.forEach(product => {
            console.log(product)
          const productCard = createProductCard(product);
          productContainer.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  
    function createProductCard(product) {
      const card = document.createElement("div");
      card.className = "product-card";
  
      // Create HTML content for the product card
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
      `;
  
      card.addEventListener("click", () => {
        // Pass the product details to the details page using URL parameters
        const queryString = new URLSearchParams({ productId: product.id }).toString();
        window.location.href = `/pages/cart.html?${queryString}`;
      });
  
      return card;
    }
  });
  
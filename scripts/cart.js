document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");
  
    fetch(`/data/data.json`)
      .then(response => response.json())
      .then(products => {
        const selectedProduct = products.find(product => product.id === Number(productId));
  
        if (selectedProduct) {
          const detailContainer = document.getElementById("product-details");
          detailContainer.innerHTML = 
          `
            <h1>${selectedProduct.name}</h1>
            <p>${selectedProduct.description}</p>
            <p>Price: $${selectedProduct.price.toFixed(2)}</p>
            <button class="snipcart-add-item"
  data-item-id=${selectedProduct.id}
  data-item-price=${selectedProduct.price}
  data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
  data-item-image="/assets/images/starry-night.jpg"
  data-item-name="Benz">
  Add to cart
</button>
            <!-- Add other details as needed -->
          `
        } else {
          console.error(`Product with ID ${productId} not found.`);
        }
      })
      .catch(error => console.error('Error fetching product details:', error))
  });
  
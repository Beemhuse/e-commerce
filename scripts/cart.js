document.addEventListener("DOMContentLoaded", function () {
  // Getting the url when the request is made
  const params = new URL(window.location);

  // Getting the value of the search property from the window object
  const search = params.search;

  // Using slice method to get the value of the id that made the request
  const id = params.href.slice(48);

  // Check to know the pathname of the href if the request is coming from products.html
  if (search.startsWith("?p")) {
    fetch(`/data/data.json`)
      .then((response) => response.json())
      .then((products) => {
        const selectedProduct = products.find(
          (product) => product.id === Number(id)
        );
        if (selectedProduct) {
          const detailContainer = document.getElementById("product-details");
          detailContainer.innerHTML = `
            <h1>${selectedProduct.name}</h1>
            <p>${selectedProduct.description}</p>
            <p>Price: $${selectedProduct.price.toFixed(2)}</p>
            <button class="snipcart-add-item"
  data-item-id=${selectedProduct.id}
  data-item-price=${selectedProduct.price}
  data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
  data-item-image=${selectedProduct.image}
  data-item-name=${selectedProduct.name}>
  Add to cart
  </button>
            <!-- Add other details as needed -->
          `;
        } else {
          console.error(`Product with ID ${productId} not found.`);
        }
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }

  // Check to know the pathname of the href if the request is coming from product2page.html
  else if (search.startsWith("?i")) {
    fetch("/data/data2.json")
      .then((response) => response.json())
      .then((products) => {
        const clickProduct = products.find(
          (product) => product.id === Number(id)
        );
        console.log(clickProduct);
        const cartContainer = document.getElementById("product-details");
        cartContainer.innerHTML = `
          <img src = ${clickProduct.image}></img>
          <p>
          <em>${clickProduct.name}</em>
          <span>${clickProduct.price}</span>
          </p>
          <button class="snipcart-add-item"
          data-item-image=${clickProduct.image}
          data-item-name=${clickProduct.name}
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-price=${clickProduct.price}>
          Add to cart
          </button>
          `;
      });
  }
});

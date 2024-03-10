document.addEventListener("DOMContentLoaded", function () {
  // Getting the url when the request is made
  const params = new URL(window.location);

  // Getting the value of the search property from the window object
  const search = params.search;

  // Check to know the pathname of the href if the request is coming from products.html
  if (search.startsWith("?p")) {
    // Using slice method to get the value of the id that made the request
    const id = params.href.slice(48, 50);

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
  } // Check to know the pathname of the href if the request is coming from product2page.html
  else if (search.startsWith("?I")) {
    // Get the click container from the localstorage
    const selectedCard = localStorage.getItem("selectedCard");

    // creating div element
    const div = document.createElement("div");

    // Appending the elements from the localstorage to the div element.
    div.innerHTML = selectedCard;

    // Appending the div element to the browser
    document.getElementById("product-details").appendChild(div);
  }
});

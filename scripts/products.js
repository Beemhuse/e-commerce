"use strict";

// Getting all the product-card containers
const productCards = document.querySelectorAll(".product-card");

//Iterating || looping through all the product-card containers
for (const productCard of productCards) {
  //Listening to a click event in each product-card container
  productCard.addEventListener("click", () => {
    // Getting the nested elements of the product-card container
    const targetElement = productCard.innerHTML;

    // Storing the nested elements of the product-card to localStorage
    localStorage.setItem("selectedCard", targetElement);

    //Getting the Id of the product-card container using data-id attribute
    let id = productCard.getAttribute("data-id");

    // Setting the Url query params string with th product id
    const queryString = new URLSearchParams({ IdProduct: id }).toString();

    // Redirecting the URL to the cart.html page
    window.location.href = `./cart.html?${queryString}`;
  });
}

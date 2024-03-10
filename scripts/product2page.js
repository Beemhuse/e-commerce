"use strict";

// Getting the main element container
const mainContainer = document.getElementById("main-container");

// Fetching the json file from data.json file
fetch("/data/data.json")
  .then((response) => response.json())
  .then((products) => {
    // Iterating || looping through the products form the response
    for (const product of products) {
      // Invoking the runFunctions() && appending the returned div element to main container element
      mainContainer.appendChild(runFunctions(product));
    }
  });

/***
 *  The runFuctions() contains the createElement() && event listener listening to the click on the div element && it also returns div element
 */
function runFunctions(product) {
  const divElement = createElement(product);

  divElement.addEventListener("click", () => {
    redirectUrl(product);
  });

  return divElement;
}

/* 
 createElement() creates the div element, add class to the div element , it also contains the  displayElementContents() && returns the div element
 */
function createElement(product) {
  const divElement = document.createElement("div");
  divElement.classList.add("product-card");

  displayElementContents(divElement, product);

  return divElement;
}

/**
 *
 * @param {div element container} divElement
 * @param {the individual object from the iterated products of the fetch API} product
 */
function displayElementContents(divElement, product) {
  divElement.innerHTML = `
  <img src= ${product.image} > </img>
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <span>$${product.price.toFixed(2)}</span>
  `;
}

/**
 *
 * @param {the individual object from the iterated products of the fetch API} product
 */
function redirectUrl(product) {
  const stringParams = new URLSearchParams({
    productId: product.id,
  }).toString();
  window.location.href = `/pages/cart.html?${stringParams}`;
}

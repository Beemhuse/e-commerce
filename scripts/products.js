"use strict";

function queryDOMTask() {
  const productContainer = document.querySelector(".product-container");
  const popularContainer = document.querySelector(".popular");
  const trendingContainer = document.querySelector(".trending");

  const section = document.createElement("section");
  const section2 = document.createElement("section");
  const section3 = document.createElement("section");

  section.classList.add("products");
  section2.classList.add("products");
  section3.classList.add("products");

  productContainer.appendChild(section);
  popularContainer.appendChild(section2);
  trendingContainer.appendChild(section3);

  return [section, section2, section3];
}

fetch("/data/data2.json")
  .then((response) => response.json())
  .then((products) => {
    const [section, section2, section3] = queryDOMTask();
    const div = document.querySelectorAll("div");

    productsLooping(0, products.length, section, products);
    productsLooping(0, 4, section2, products);
    productsLooping(4, 8, section3, products);
  });

function productsLooping(counter, condition, section, productObj) {
  for (let i = counter; i < condition; i++) {
    const divContainer = createElement(productObj[i]);
    section.appendChild(divContainer);
    DisplayElement(divContainer, productObj[i]);
  }
}

function createElement(product) {
  const divContainer = document.createElement("div");

  divContainer.addEventListener("click", () => {
    urlRedirect(product);
  });

  return divContainer;
}

function DisplayElement(divContainer, product) {
  divContainer.innerHTML = `
   <img src = ${product.image}></img>
   <p>
   <em>${product.name}</em>
   <span>${product.price}</span>
   </p>
  `;
}

function urlRedirect(product) {
  const productId = new URLSearchParams({ idProduct: product.id }).toString();
  window.location.href = `/pages/cart.html?${productId}`;
}

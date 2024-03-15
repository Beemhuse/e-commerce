document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
  
const baseurl = "https://api.andromedia.cc/auth/login/"
const endpoint1 = "auth/login/"

// async function postData(url = baseurl+endpoint1, data = {}) {
  
//   const data = {
//     password: "23976237609",
//     username: "bright"
  
//   }
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`,

      
//     },
   
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

async function getData(){
  const response = await fetch('./data/data.json');
const data =await response.json();
// console.log("promise resolved", data)

}

getData()


    fetch('./data/data.json')
      .then(response => response.json())
      .then(products => {
        console.log("fetch ==> ", products)
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
  
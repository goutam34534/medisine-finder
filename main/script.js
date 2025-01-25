let searchInput = document.querySelector("#searchInput");
let div = document.getElementById("products");

searchInput.addEventListener("input", function () {
  let userValue = searchInput.value.toLowerCase().trim();
  if (userValue) {
    let matching = products.filter((product) =>
      product.name.toLowerCase().includes(userValue)
    );
    showProduct(matching);
  } else {
    div.innerHTML = "";
  }
});

function showProduct(matching) {
  if (matching.length === 0) {
    div.innerHTML = `<p>No matching medicine found</p>`;
    return;
  }
  div.innerHTML = matching
    .map(
      (product) => ` 
      <div class="product-container">
        <div class="product">
          <img class="original-medicine-image" src="${product.image}" alt="${
        product.name
      }" />
          <div class="original-medicine-content">
            <p class="original-medicine-name">${product.name}</p>
            <p class="original-medicine-price">Price: ₹${product.price}</p>
            <p class="original-medicine-company-name">Manufacturer: ${
              product.company
            }</p>
           <a href="${
             product.buybtn
           }"><button class="buybtn">Buy now</button></a> 
            <button class="find-alternatives-btn" onclick="toggleAlternatives(this)">Find Alternatives</button>
          </div>
        </div>
        
        <div class="alternative-medicines" style="display: none;">
          <div class="alternative">
            <img src="${product.Alt_image1}" alt="${product.Alt_name1}" />
            <div class="content">
              <h3>${product.Alt_name1}</h3>
              <p>Price: ₹${product.Alt_price1}</p>
              <p>Manufacturer: ${product.company1}</p>
              <a href="${product.Alt_link1}" target="_main">Alternative</a>
            </div>
          </div>

          ${
            product.Alt_name2
              ? `<div class="alternative">
                  <img src="${product.Alt_image2}" alt="${product.Alt_name2}" />
                  <div class="content">
                    <h3>${product.Alt_name2}</h3>
                    <p>Price: ₹${product.Alt_price2}</p>
                    <p>Manufacturer: ${product.company2}</p>
                    <a href="${product.Alt_link2}" target="_main">Alternative</a>
                  </div>
                </div>`
              : ""
          }
        </div>
      </div>`
    )
    .join("");
}

function toggleAlternatives(button) {
  let alternativesDiv = button.parentElement.parentElement.nextElementSibling;
  if (alternativesDiv.style.display === "none") {
    alternativesDiv.style.display = "block";
    button.textContent = "Hide Alternatives";
  } else {
    alternativesDiv.style.display = "none";
    button.textContent = "Find Alternatives";
  }
}

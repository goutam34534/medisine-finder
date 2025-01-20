let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector("#searchButton");

searchButton.disabled = true;

searchInput.addEventListener("input", function () {
  searchButton.disabled = searchInput.value.trim() === "";
});

searchButton.addEventListener("click", function () {
  let userValue = searchInput.value.toLowerCase();
  let matching = products.filter((product) =>
    product.name.toLowerCase().includes(userValue)
  );
  showProduct(matching);
  searchInput.value = "";
  searchButton.disabled = true;
});

function showProduct(matching) {
  let div = document.getElementById("products");
  if (matching.length === 0) {
    div.innerHTML = `<p>No matching medicine found</p>`;
    return;
  }
  div.innerHTML = matching
    .map(
      (product) => ` <div class="product-container">
                        <div class="product">
                           <img class="original-medicine-image" src="${
                             product.image
                           }" alt="${product.name}" />
                             <div class="original-medicine-content">
                              <p class="original-medicine-name">${
                                product.name
                              }</p>
                                 <p class="original-medicine-price">Price: ₹${
                                   product.price
                                 }</p>
                                   <p class="original-medicine-company-name">Manufacturer: ${
                                     product.company
                                   }</P>
                              <a href="${
                                product.Alt_link1
                              }" target="_main">Orignal</a>
                             </div>
                          </div>

                           <div class="alternative-medicines">
                             <div class="alternative">
                                <img src="${product.Alt_image1}" alt="${
        product.Alt_name1
      }"/>
                                  <div class="content">
                                     <h3>${product.Alt_name1}</h3>
                                       <p>Price: Rs. ₹${product.Alt_price1}</p>
                                          <p>Manufacturer: ${
                                            product.company1
                                          }</p>
                                          <a href="${
                                            product.Alt_link1
                                          }" target="_main">Alternative</a>
                                    </div>
                               </div>
                             </div>

                            ${
                              product.Alt_name2
                                ? `<div class="alternative-medicines">
                                  <div class="alternative">
                                    <img
                                      src="${product.Alt_image2}"
                                      alt="${product.Alt_name2}"
                                    />
                                    <div class="content">
                                      <h3>${product.Alt_name2}</h3>
                                      <p>Price: Rs. ₹${product.Alt_price2}</p>
                                      <p>Manufacturer: ${product.company2}</p>
                                      <a
                                        href="${product.Alt_link2}"
                                        target="_main"
                                      >
                                        Alternative
                                      </a>
                                    </div>
                                  </div>
                                </div>`
                                : ``
                            }
            
                      </div>`
    )
    .join("");
}

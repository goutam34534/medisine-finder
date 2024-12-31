let products = [
  {
    name: "Daraprin",
    price: 250,
    company: "Indica Laboratories Pvt Ltd",
    image: "https://dwaey.com/medrg/upload/1723992724.png",
    page: "./main/html-pages/daraprin.html",
  },
  {
    name: "Zytiga",
    price: 2,
    company: "Mylan Pharma",
    image: "./main/images/zytiga.jpg",
    page: "./main/html-pages/zytiga.html",
  },
  {
    name: "Glivec",
    price: 10,
    company: "Natco Pharma",
    image: "./main/images/balwan.jpg",
    page: "./main/html-pages/glivec.html",
  },
  {
    name: "Paracetamol",
    price: 30,
    company: "GlaxoSmithKline",
    image: "./main/images/paracetamol.png",
    page: "./main/html-pages/paracetamol.html",
  },
  {
    name: "Combiflam",
    price: 25,
    company: "GlaxoSmithKline",
    image: "./main/images/conbiflom.png",
    page: "./main/html-pages/combiflam.html",
  },
  {
    name: "ORS",
    price: 11,
    company: "FDC Ltd",
    image: "./main/images/ors.png",
    page: "./main/html-pages/ors.html",
  },
  {
    name: "Vicks Vaporub",
    price: 11,
    company: "Procter & Gamble",
    image: "./main/images/vikus.png",
    page: "./main/html-pages/vicks.html",
  },
  {
    name: "Digene",
    price: 11,
    company: "Abbott",
    image: "./main/images/digene.png",
    page: "./main/html-pages/digene.html",
  },
  {
    name: "Strepsils",
    price: 11,
    company: "Reckitt Benckiser",
    image: "./main/images/strepsils.png",
    page: "./main/html-pages/strepsils.html",
  },
  {
    name: "Benadryl",
    price: 11,
    company: "Johnson & Johnson",
    image: "./main/images/bandrily.png",
    page: "./main/html-pages/benadryl.html",
  },
  {
    name: "Augmentin 1000 Duo Tablet",
    price: 11,
    company: "Alkem Laboratories ",
    image: "./main/images/augmentin.png",
    page: "./main/html-pages/augmentin.html",
  },
  {
    name: "Crestor",
    price: 11,
    company: "Astrazeneca",
    image: "./main/images/crestor.png",
    page: "./main/html-pages/crestor.html",
  },
  {
    name: "Lantus",
    price: 11,
    company: "Sanofi India Ltd",
    image: "./main/images/lantus.png",
    page: "./main/html-pages/lantus.html",
  },
  {
    name: "Tamiflu",
    price: 11,
    company: "Roche Products India Pvt Ltd",
    image: "./main/images/tamiflu.png",
    page: "./main/html-pages/tamiflu.html",
  },
  {
    name: "Eliquis",
    price: 11,
    company: "Roche Products India Pvt Ltd",
    image: "./main/images/eliauis.png",
    page: "./main/html-pages/eliquis.html",
  },
];

function filterProduct(event) {
  let userValue = event.target.value.toLowerCase();
  let matching = products.filter((product) =>
    product.name.toLowerCase().includes(userValue)
  );
  showProduct(matching);
}

function showProduct(matching) {
  let div = document.getElementById("products");
  if (matching.length === 0) {
    div.innerHTML = `<p>No matching medicine found</p>`;
    return;
  }

  let productHTML = matching
    .map(
      (product) => `
          <div class="product">
            <img class="medicine-image" src="${product.image}" alt="${product.name}" />
            <p class="medicine-name"><strong>${product.name}</strong></p>
            <p class="price">Price: ₹${product.price}</p>
            <p  class="price">Manufacturer:${product.company}</P>
            <button onclick="window.location.href='${product.page}'" class="find-alternative">
              Find Alternative
            </button>
          </div>
        `
    )
    .join("");

  div.innerHTML = productHTML;
}

// Initialize with all products
showProduct(products);

/* =========================
   PERUKISTÁN UI SYSTEM
========================= */

const UI = (() => {

  /* 🛒 RENDER PRODUCTOS */
  const renderProducts = (products) => {

    const container = document.querySelector(".products");
    if(!container) return;

    container.innerHTML = "";

    products.forEach(product => {

      const card = document.createElement("div");
      card.className = "card product-card glass";

      card.innerHTML = `
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <div class="price">$${product.price}</div>
        <a href="product.html?id=${product.id}" class="btn btn-primary">Ver</a>
      `;

      container.appendChild(card);

    });

  };


  /* 🔍 SEARCH INPUT */
  const setupSearch = () => {
    const input = document.querySelector(".search input");
    if(!input) return;

    input.addEventListener("input", (e) => {
      const results = Store.search(e.target.value);
      renderProducts(results);
    });
  };


  /* 📂 FILTROS */
  const setupFilters = () => {

    const filters = document.querySelectorAll(".filter");

    filters.forEach(filter => {
      filter.addEventListener("click", () => {

        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");

        const category = filter.textContent.toLowerCase();

        const map = {
          "todos": "all",
          "ranks": "ranks",
          "kits": "kits",
          "cosméticos": "cosmetics"
        };

        const result = Store.filterByCategory(map[category]);
        renderProducts(result);

      });
    });

  };


  /* 📦 PRODUCT PAGE */
  const renderProductDetail = () => {

    const container = document.querySelector(".product-detail");
    if(!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const product = Store.getById(id);
    if(!product) return;

    container.innerHTML = `
      <h2 class="gradient-text">${product.name}</h2>
      <p>${product.description}</p>

      <div class="price-box">
        <div class="price-big">$${product.price}</div>
        <a href="contact.html" class="btn btn-primary">Comprar</a>
      </div>
    `;
  };


  /* 🚀 INIT */
  const init = () => {

    renderProducts(Store.getAll());
    setupSearch();
    setupFilters();
    renderProductDetail();

  };

  return { init };

})();

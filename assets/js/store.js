/* =========================
   PERUKISTÁN STORE ENGINE
========================= */

const Store = (() => {

  /* 🔥 DATA (luego lo pasamos a JSON externo) */
  const products = [
    {
      id: 1,
      name: "VIP",
      price: 5,
      category: "ranks",
      description: "Ventajas básicas"
    },
    {
      id: 2,
      name: "ELITE",
      price: 10,
      category: "ranks",
      description: "Acceso premium"
    },
    {
      id: 3,
      name: "LEGEND",
      price: 20,
      category: "ranks",
      description: "Dominio total"
    },
    {
      id: 4,
      name: "KIT PVP",
      price: 3,
      category: "kits",
      description: "Equipo para combate"
    },
    {
      id: 5,
      name: "PARTÍCULAS",
      price: 4,
      category: "cosmetics",
      description: "Efectos visuales"
    }
  ];

  /* 🔍 FILTRAR */
  const filterByCategory = (category) => {
    if(category === "all") return products;
    return products.filter(p => p.category === category);
  };

  /* 🔎 BUSCAR */
  const search = (query) => {
    return products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  /* 📦 GET ALL */
  const getAll = () => products;

  /* 🎯 GET BY ID */
  const getById = (id) => {
    return products.find(p => p.id == id);
  };

  return {
    getAll,
    filterByCategory,
    search,
    getById
  };

})();

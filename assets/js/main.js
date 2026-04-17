/* =========================
   PERUKISTÁN MAIN JS
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🔥 NAVBAR SCROLL EFFECT
  ========================= */
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
      nav.style.background = "rgba(10,10,10,0.6)";
      nav.style.backdropFilter = "blur(30px)";
    }else{
      nav.style.background = "rgba(20,20,20,0.35)";
    }
  });


  /* =========================
     ⚡ SCROLL ANIMATION
  ========================= */
  const elements = document.querySelectorAll(".card, .block, .category");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });


  /* =========================
     🧠 FAQ INTERACTIVO
  ========================= */
  document.querySelectorAll(".faq").forEach(faq=>{
    faq.addEventListener("click",()=>{
      faq.classList.toggle("active");
    });
  });


  /* =========================
     🔍 FILTRO SIMPLE STORE
  ========================= */
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".card");

  filters.forEach(filter=>{
    filter.addEventListener("click", ()=>{

      filters.forEach(f=>f.classList.remove("active"));
      filter.classList.add("active");

      const category = filter.textContent.toLowerCase();

      cards.forEach(card=>{
        if(category === "todos"){
          card.style.display = "block";
        }else{
          if(card.textContent.toLowerCase().includes(category)){
            card.style.display = "block";
          }else{
            card.style.display = "none";
          }
        }
      });

    });
  });


  /* =========================
     🎯 EFECTO HOVER 3D
  ========================= */
  document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });

  });


});

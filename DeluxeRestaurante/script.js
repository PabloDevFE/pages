const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".reservation-form");
const feedback = document.querySelector(".form-feedback");
const revealElements = document.querySelectorAll("[data-reveal]");
const dateInput = document.querySelector("#data");

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if (header && navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

revealElements.forEach((element) => {
  const delay = element.getAttribute("data-reveal-delay");
  if (delay) {
    element.style.setProperty("--reveal-delay", `${delay}ms`);
  }
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px",
  },
);

if ("IntersectionObserver" in window) {
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

if (dateInput) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;
}

if (form && feedback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get("nome");
    const experiencia = formData.get("experiencia");

    feedback.textContent = `${nome}, recebemos seu pedido para ${experiencia}. Nossa equipe retornara em breve para confirmar a reserva.`;
    form.reset();
  });
}

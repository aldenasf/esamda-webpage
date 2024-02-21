// Navbar Hamburger
document.addEventListener("DOMContentLoaded", () => {
  const navbarHamburger = document.querySelector("[data-navbar-hamburger-btn]");
  console.log(navbarHamburger);
  const navbarContent = document.querySelector("[data-navbar-content]");

  navbarHamburger.addEventListener("click", (el) => {
    navbarContent.classList.toggle("opacity-100");
    navbarContent.classList.toggle("opacity-0");
    navbarContent.classList.toggle("pointer-events-none");

    console.log(navbarContent);
  });
});

// Navbar Dropdown Menu
document.addEventListener("DOMContentLoaded", () => {
  const navbarDropdownBtn = document.querySelectorAll("[data-dropdown]");

  navbarDropdownBtn.forEach((el) => {
    const target = el.querySelector("ul");

    el.querySelector("a").addEventListener("click", () => {
      target.classList.toggle("hidden");
      target.classList.toggle("flex");
    });
  });
});

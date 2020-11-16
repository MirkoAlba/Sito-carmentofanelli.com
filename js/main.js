const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const footer = document.querySelector(".main-footer");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    footer.classList.add("scrolled");
  } else {
    footer.classList.remove("scrolled");
  }
});

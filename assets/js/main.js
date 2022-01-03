const navbarButton = document.querySelector(".navbar-toggler");
const headerMenu = document.querySelector(".navbar");

function openMenu() {
  navbarButton.querySelector("span").classList.toggle("fa-bars");
  navbarButton.querySelector("span").classList.toggle("fa-close");
}
navbarButton.addEventListener("click", openMenu);

$(".my-carousel").owlCarousel({
  items: 1,
  autoplaySpeed: 1000,
  loop: true,
  autoplay: true,
  dots: true,
});

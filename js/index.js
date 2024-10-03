export function scrollNavbar() {
  const navbar = document.querySelector("#navBar");
  const navList = document.querySelector("#navList");
  const navIcon = document.querySelector("#navIcon");
  const logo = document.querySelector("#logo");

  const updateNavbar = () => {
    navbar.style.transition = "0.6s";
    navList.style.transition = "color 0.6s";
    navIcon.style.transition = "color 0.6s";

    if (window.scrollY > 50) {
      navbar.classList.add("bg-white");
      navList.classList.remove("text-white");
      navbar.classList.remove("py-[20px]");
      navbar.classList.add("py-[5px]");
      navList.classList.add("text-black");
      navIcon.classList.remove("text-white");
      navIcon.classList.add("text-black");
      logo.src = "./photo/logo/logo1.png";
    } else {
      navbar.classList.remove("bg-white");
      navbar.classList.remove("py-[5px]");
      navbar.classList.add("py-[20px]");
      navList.classList.remove("text-black");
      navList.classList.add("text-white");
      navIcon.classList.remove("text-black");
      navIcon.classList.add("text-white");
      logo.src = "./photo/logo/logo1.2.png";
    }
  };
  updateNavbar();
  document.addEventListener("scroll", updateNavbar);
}

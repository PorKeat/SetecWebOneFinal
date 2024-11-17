export const NavBar = (
  home,
  about,
  contact,
  kfc,
  burgerKing,
  mcDonald,
  wendy,
  hungryJack
) => {
  return `      <nav id="navBar" class="w-full fixed top-0 z-50 py-[20px]">
        <section class="w-[90%] h-[60px] mx-auto flex items-center">
          <div class="flex-1">
            <ul
              id="navList"
              class="flex gap-10 text-white font-medium text-[18px]"
            >
              <li>
                <a
                  href=${home}
                  class="cursor-pointer relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100 hover:before:bg-gradient-to-r hover:before:bg-[#C5291C]"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownDelayButton"
                  data-dropdown-toggle="dropdownDelay"
                  data-dropdown-delay="500"
                  class="inline-flex items-center relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100 hover:before:bg-gradient-to-r hover:before:bg-[#C5291C]"
                  type="button"
                >
                  Brand
                  <i class="fa-solid fa-caret-down ml-2"></i>
                </button>
                <div
                  id="dropdownDelay"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-sm text-black"
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li>
                      <a href=${kfc} class="block px-4 py-2 hover:bg-gray-200"
                        >KFC</a
                      >
                    </li>
                    <li>
                      <a href=${burgerKing} class="block px-4 py-2 hover:bg-gray-200"
                        >Burger-King</a
                      >
                    </li>
                    <li>
                      <a href=${mcDonald} class="block px-4 py-2 hover:bg-gray-200"
                        >McDonald</a
                      >
                    </li>
                    <li>
                      <a href=${wendy} class="block px-4 py-2 hover:bg-gray-200"
                        >Wendy</a
                      >
                    </li>
                    <li>
                      <a href=${hungryJack} class="block px-4 py-2 hover:bg-gray-200"
                        >Hungry-Jack's</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href=${about}
                  id="aboutUs"
                  class="cursor-pointer relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100 hover:before:bg-gradient-to-r hover:before:bg-[#C5291C]"
                  >About</a
                >
              </li>
              <li>
                <a
                  href=${contact}
                  id="contactUs"
                  class="cursor-pointer relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100 hover:before:bg-gradient-to-r hover:before:bg-[#C5291C]"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          <div>
            <img
              id="logo"
              src="./photo/logo/logo1.2.png"
              class="h-[40px] cursor-pointer"
              alt="logo"
            />
          </div>
          <div
            id="navIcon"
            class="text-[18px] flex-1 flex justify-end gap-5 text-white"
          >
            <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
            <i class="fa-solid fa-user cursor-pointer"></i>
            <i class="fa-solid fa-bag-shopping cursor-pointer"></i>
          </div>
        </section>
      </nav>`;
};

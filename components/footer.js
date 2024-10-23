export const Footer = (
  logo,
  kfc,
  burgerKing,
  mcDonald,
  wendy,
  hungryJack,
  facebook,
  twitter,
  youtube
) => {
  return `      <section class="relative flex flex-col text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#202123"
            fill-opacity="1"
            d="M0,256L80,266.7C160,277,320,299,480,288C640,277,800,235,960,229.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            class="absolute top-0 left-0 w-full z-10"
          ></path>
        </svg>
        <div class="bg-[#202123] h-[300px] w-full relative z-0 px-20 py-10">
          <div class="flex justify-between">
            <div class="text-[14px] text-gray-400">
              <img
                src=${logo}
                class="h-[60px] mb-5"
                alt=""
              />
              <div class="flex items-center gap-2 mb-2 cursor-default">
                <i class="fa-solid fa-phone text-[#C5291C]"></i>
                <p>(+855) 012 740 222</p>
              </div>
              <div class="flex items-center gap-2 cursor-default">
                <i class="fa-solid fa-location-dot text-[#C5291C]"></i>
                <p>20 Cooper Square, New York, NY 10003, USA</p>
              </div>
            </div>
            <div>
              <ul class="text-[14px] text-gray-400 flex flex-col gap-2">
                <li
                  class="text-white text-[16px] font-semibold mb-3 cursor-default"
                >
                  Brands
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                   <a href=${kfc}> KFC</a>
                  
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    <a href=${burgerKing}> Burger-King</a>
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    <a href=${mcDonald}> McDonald</a>
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    <a href=${wendy}> Wendy</a>
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    <a href=${hungryJack}> Hungry-Jack's</a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-[14px] text-gray-400 flex flex-col gap-2">
                <li
                  class="text-white text-[16px] font-semibold mb-3 cursor-default"
                >
                  Useful Links
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  Payment & Tax
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  Term of Service
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  My Account
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  Return Policy
                </li>
                <li
                  class="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  Discount
                </li>
              </ul>
            </div>
            <div class="flex flex-col">
              <h4
                class="text-white text-[16px] font-semibold mb-5 cursor-default"
              >
                Newsletter
              </h4>
              <div class="flex gap-2 flex-col">
                <p class="text-[14px] text-gray-400 mb-2 cursor-default">
                  Get now free 20% discount for all products on your first
                  order.
                </p>
                <div class="flex items-center flex flex-row-reverse mb-4">
                  <input
                    type="text"
                    class="border-none bg-gray-700 rounded-full w-full px-5 py-3 relative"
                    placeholder="Your email here....."
                  />
                  <i
                    class="fa-solid fa-paper-plane absolute mr-2 py-3 px-3 bg-[#C5291C] hover:bg-white hover:text-[#C5291C] rounded-full transition-all transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
                  ></i>
                </div>
              </div>
              <ul class="flex gap-5">
                <li>
                  <a
                    href=${facebook}
                    class="bg-gray-700 rounded-full flex items-center justify-center w-10 h-10 hover:bg-[#C5291C] transition-all transform duration-500 ease-in-out hover:scale-110"
                  >
                    <i class="fa-brands fa-facebook-f text-white"></i>
                  </a>
                </li>

                <li>
                  <a
                    href=${twitter}
                    class="bg-gray-700 rounded-full flex items-center justify-center w-10 h-10 hover:bg-[#C5291C] transition-all transform duration-500 ease-in-out hover:scale-110"
                    ><i class="fa-brands fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a
                    href=${youtube}
                    class="bg-gray-700 rounded-full flex items-center justify-center w-10 h-10 hover:bg-[#C5291C] transition-all transform duration-500 ease-in-out hover:scale-110"
                  >
                    <i class="fa-brands fa-youtube text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>`;
};

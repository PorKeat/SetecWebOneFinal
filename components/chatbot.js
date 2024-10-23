export const ChatBot = () => {
  return `
   <style>
      @keyframes dotPulse {
        0%,
        44% {
          transform: translateY(0);
        }
        28% {
          opacity: 0.4;
          transform: translateY(-4px);
        }
        44% {
          opacity: 0.2;
        }
      }
      .message-input:valid ~ .chat-controls #send-message {
        display: block;
      }

      #file-cancel {
        display: none;
      }

      @media (min-width: 641px) {
        #preview-image:hover ~ #file-cancel {
          display: block;
        }

        #preview-image:hover {
          display: none;
        }
      }
      #file-upload.hidden {
        display: none;
      }

      em-emoji-picker {
        position: absolute;
        left: 50%;
        top: -337px;
        width: 100%;
        max-width: 350px;
        max-height: 330px;
        visibility: hidden;
        transform: translateX(-50%);
      }
      body.show-emoji-picker em-emoji-picker {
        visibility: visible;
      }
      .chat-form .message-input {
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
      }
      .chat-form .message-input:hover {
        scrollbar-color: #ccccf5 transparent;
      }
    </style>
        <section>
        <button
          id="chatbot-toggler"
          class="fixed sm:bottom-[30px] sm:right-[35px] border-none h-[50px] w-[50px] cursor-pointer rounded-[50%] bg-[#C5291C] flex items-center justify-center transition-all duration-100 ease right-[20px] bottom-[20px] z-20"
        >
          <i
            id="chatbot-icon"
            class="fa-regular fa-message text-white absolute"
          ></i>
          <i
            id="close-icon"
            class="fa-solid fa-xmark text-white absolute opacity-0"
          ></i>
        </button>

        <div
          class="chatbot-popup fixed sm:right-[35px] sm:h-auto sm:bottom-[90px] sm:w-[420px] bg-white overflow-hidden sm:rounded-2xl shadow-[0px_0px_128px_0px_rgba(0,0,0,0.1),0px_32px_64px_-48px_rgba(0,0,0,0.5)] transition-all durations-100 ease origin-bottom-right opacity-0 scale-[0.1] right-0 bottom-0 h-[91%] rounded-none w-full"
        >
          <div
            class="chat-header flex items-center justify-between bg-[#C5291C] sm:py-[15px] sm:px-[22px] py-[12px] px-[15px]"
          >
            <div class="header-info flex items-center gap-[10px]">
              <i
                class="fa-brands fa-bots text-center text-[25px] w-[40px] h-[40px] place-content-center rounded-[50%] bg-white p-[6px] text-[#C5291C] shrink-0"
              ></i>
              <h2 class="logo-text text-white text-[1.31rem] font-semibold">
                ChatBot
              </h2>
            </div>
            <button
              id="close-chatbot"
              class="border-none text-white h-[40px] w-[40px] rounded-[50%] duration-200 ease hover:bg-red-300 text-[1.2rem] mr-[-10px] place-content-center flex items-center cursor-pointer"
            >
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>

          <div
            class="chat-body py-[25px] px-[22px] flex gap-[20px] h-[360px] flex-col overflow-y-auto mb-[82px] -z-10"
            style="scrollbar-width: thin; scrollbar-color: #ccccf5 transparent"
          >
            <div class="message bot-message flex gap-[11px] items-center">
              <i
                class="fa-brands fa-bots text-center text-[25px] w-[40px] h-[40px] self-end place-content-center rounded-[50%] bg-[#C5291C] p-[6px] text-white shrink-0 mb-[4px]"
              ></i>
              <div
                class="message-text py-[12px] px-[16px] max-w-[75%] text-[0.9rem] bg-slate-100 rounded-[13px_13px_13px_3px]"
              >
                Hey there 💕 <br />
                How can I help you today?
              </div>
            </div>
          </div>

          <div
            class="chat-footer absolute bottom-0 w-full bg-white p-[10px_15px_15px] sm:p-[15px_22px_20px]"
          >
            <form
              action="#"
              class="chat-form flex items-center bg-white rounded-[32px] outline outline-[1px] outline-[#CCCCE5] focus-within:outline focus-within:outline-[2px] focus-within:outline-[#C5291C] relative"
            >
              <textarea
                placeholder="Message..."
                required
                class="message-input border-none outline-none h-[47px] w-full text-[0.9rem] resize-none p-[13px_0_12px_18px] rounded-[inherit] max-h-[180px] whitespace-pre-line focus:border-none focus:ring-0"
              ></textarea>
              <div
                class="chat-controls flex items-center gap-[3px] self-end h-[47px] pr-[6px]"
              >
                <button
                  id="emoji-picker"
                  type="button"
                  class="h-[35px] w-[35px] border-none text-[1.15rem] cursor-pointer text-[#C5291C] rounded-[50%] hover:bg-slate-100 duration-200 ease"
                >
                  <i class="fa-regular fa-face-frown"></i>
                </button>
                <div class="file-upload-wrapper relative w-[35px] h-[35px]">
                  <input
                    type="file"
                    accept="image/*"
                    id="file-input"
                    class="hidden"
                  />
                  <button
                    type="button"
                    id="file-upload"
                    class="absolute h-[35px] w-[35px] border-none text-[1.15rem] cursor-pointer text-[#C5291C] rounded-full hover:bg-slate-100 duration-200 ease"
                  >
                    <i class="fa-solid fa-paperclip"></i>
                  </button>
                  <img
                    src=""
                    id="preview-image"
                    class="absolute w-full h-full object-cover rounded-full hidden"
                  />
                  <button
                    id="file-cancel"
                    class="absolute h-[35px] w-[35px] text-[1.15rem] cursor-pointer text-[#C5291C] rounded-full bg-slate-100 duration-200 ease hidden"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <button
                  type="submit"
                  class="h-[35px] w-[35px] border-none text-[1.15rem] cursor-pointer text-white rounded-full hover:bg-red-700 bg-[#C5291C] duration-200 ease hidden"
                  id="send-message"
                >
                  <i class="fa-solid fa-arrow-up"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>`;
};

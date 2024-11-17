import { ChatBot } from "../components/chatbot.js";

document.addEventListener("DOMContentLoaded", () => {
  const activePage = window.location.pathname;
  console.log(activePage);
  const navLinks = document.querySelectorAll("#navList a");
  const brandButton = document.getElementById("dropdownDelayButton");

  if (activePage === "/" || activePage === "/index.html") {
    navLinks.forEach((link) => {
      if (
        link.href.includes("/index.html") ||
        link.href === window.location.origin + "/"
      ) {
        link.classList.add(
          "transition-all",
          "before:duration-500",
          "before:h-1",
          "before:rounded-full",
          "before:w-full",
          "before:opacity-100",
          "before:bg-[#C5291C]"
        );
      } else {
        link.classList.remove(
          "transition-all",
          "before:duration-500",
          "before:h-1",
          "before:rounded-full",
          "before:w-full",
          "before:opacity-100",
          "before:bg-[#C5291C]"
        );
      }
    });
  }
  navLinks.forEach((link) => {
    if (activePage.includes("/detail")) {
      link.classList.remove("before:bg-[#C5291C]");
      link.classList.add(
        "hover:before:w-full",
        "hover:before:opacity-100",
        "hover:before:bg-[#C5291C]"
      );
    } else if (activePage.includes("/kfc.html")) {
      brandButton.classList.add(
        "transition-all",
        "before:duration-500",
        "before:h-1",
        "before:rounded-full",
        "before:w-full",
        "before:opacity-100",
        "before:bg-[#C5291C]"
      );
    } else if (link.href.includes(activePage)) {
      link.classList.add(
        "transition-all",
        "before:duration-500",
        "before:h-1",
        "before:rounded-full",
        "before:w-full",
        "before:opacity-100",
        "before:bg-[#C5291C]"
      );
    }
  });

  // TODO Render Chatbot
  let renderChatBot = document.querySelector("#renderChatBot");
  renderChatBot.innerHTML = ChatBot();
  chatBot();
});

// TODO Scroll Click Back

let scrollUpIcon = document.getElementById("scrollIcon");
let isScrolling;

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollUpIcon.classList.add("opacity-0");
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      scrollUpIcon.classList.remove("opacity-0");
    }, 200);
  } else {
    scrollUpIcon.classList.add("opacity-0");
  }
});

scrollUpIcon.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// TODO scollNavbar
export function scrollNavbar({ first, second }) {
  const navbar = document.querySelector("#navBar");
  const navList = document.querySelector("#navList");
  const navIcon = document.querySelector("#navIcon");
  const logo = document.querySelector("#logo");
  const activePage = window.location.pathname;

  const updateNavbar = () => {
    navbar.style.transition = "0.6s";
    navList.style.transition = "color 0.1s";
    navIcon.style.transition = "color 0.1s";
    const checkList = ["/detail", "/aboutUs"];

    const isSpecialPage = checkList.some((page) => activePage.includes(page));

    if (window.scrollY > 50) {
      navbar.classList.add("bg-white");
      navList.classList.remove("text-white");
      navbar.classList.remove("py-[20px]");
      navbar.classList.add("py-[5px]");
      navList.classList.add("text-black");
      navIcon.classList.remove("text-white");
      navIcon.classList.add("text-black");
      logo.src = first;
    } else {
      navbar.classList.remove("bg-white");
      navbar.classList.remove("py-[5px]");
      navbar.classList.add("py-[20px]");
      navList.classList.remove("text-black");
      navList.classList.add("text-white");
      if (isSpecialPage) {
        navIcon.classList.add("text-black");
        navIcon.classList.remove("text-white");
        navList.classList.remove("text-white");
        navList.classList.add("text-black");
        logo.src = first;
      } else {
        navIcon.classList.remove("text-black");
        navIcon.classList.add("text-white");
        navList.classList.remove("text-black");
        logo.src = second;
      }
    }
  };
  updateNavbar();
  document.addEventListener("scroll", updateNavbar);
}

// TODO switchTabs
export function showMenu(evt, brand) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  const tablinks = document.querySelectorAll(".tablinks");

  tabcontent.forEach((item) => {
    item.classList.add("hidden");
    item.classList.add("translate-y-[25px]");
  });
  document.getElementById(brand).classList.remove("hidden");

  tablinks.forEach((item) => {
    item.classList.remove("border-[#C5291C]", "font-bold");
    item.classList.add("border-transparent");
  });
  evt.currentTarget.classList.add("border-[#C5291C]", "font-bold");
  evt.currentTarget.classList.remove("border-transparent");
}

// TODO set kfc as defualt
window.onload = () =>
  showMenu({ currentTarget: document.querySelector(".tablinks") }, "kfc");

// TODO clickHeart
export function toggleHeart(icon) {
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
}

// ! Delcare fucntion to Global Function
window.showMenu = showMenu;
window.toggleHeart = toggleHeart;

// TODO ChatBot
const chatBot = () => {
  const messageInput = document.querySelector(".message-input");
  const chatBody = document.querySelector(".chat-body");
  const sendMessageButton = document.querySelector("#send-message");
  const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
  const fileInput = document.getElementById("file-input");
  const fileUploadButton = document.getElementById("file-upload");
  const fileCancelButton = document.getElementById("file-cancel");
  const previewImage = document.getElementById("preview-image");
  const chatbotToggler = document.getElementById("chatbot-toggler");
  const chatbotPopup = document.querySelector(".chatbot-popup");
  const closeChatbot = document.getElementById("close-chatbot");

  const API_KEY = "AIzaSyBBftvnIi15VSCwoz39tUhCuZELpLNSVr0";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  const userData = {
    message: null,
    file: {
      data: null,
      mime_type: null,
    },
  };

  const chatHistory = [];
  const initialInputHeight = messageInput.scrollHeight;

  const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
  };

  const generateBotResponse = async (incomingMessageDiv) => {
    const messageElement = incomingMessageDiv.querySelector(".message-text");
    chatHistory.push({
      role: "user",
      parts: [
        { text: userData.message },
        ...(userData.file.data ? [{ inline_data: userData.file }] : []),
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: chatHistory,
      }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message);

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      messageElement.innerHTML = apiResponseText;
      chatHistory.push({
        role: "model",
        parts: [{ text: apiResponseText }],
      });
    } catch (error) {
      const regex = /what\s*is\s*love\??/i;

      const check = regex.test(userData.message);
      messageElement.innerHTML = check
        ? "How can I know about love if I'm still single?😭"
        : error;
      messageElement.style.color = check ? "#000000" : "#ff0000";
    } finally {
      userData.file = {};
      incomingMessageDiv.classList.remove("thinking");
      chatBody.scrollTo({
        top: chatBody.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleOutgoingMessage = (x) => {
    x.preventDefault();

    userData.message = messageInput.value.trim();
    messageInput.value = "";

    const messageContent = `
        <div class="message user-message flex flex-col items-end">
          <div
            class="message-text py-[12px] px-[16px] max-w-[75%] text-[0.9rem] rounded-[13px_13px_3px_13px] bg-red-600 text-white"
          >
             ${userData.message}
          </div>
                  ${
                    userData.file.data
                      ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="w-[50%] mt-[5px] rounded-[13px_3px_13px_13px]" />`
                      : ""
                  }
        </div>`;
    const outgoingMessageDiv = createMessageElement(
      messageContent,
      "user-message"
    );
    outgoingMessageDiv.querySelector(".message-text").textContent =
      userData.message;
    chatBody.appendChild(outgoingMessageDiv);
    chatBody.scrollTo({
      top: chatBody.scrollHeight,
      behavior: "smooth",
    });

    previewImage.src = "";
    previewImage.classList.add("hidden");
    document.body.classList.remove("show-emoji-picker");

    setTimeout(() => {
      const messageContent = `
    <div class="message bot-message thinking flex gap-[11px] items-center">
          <i
            class="fa-brands fa-bots text-center text-[25px] w-[40px] h-[40px] self-end place-content-center rounded-[50%] bg-red-600 p-[6px] text-white shrink-0 mb-[4px]"
          ></i>
          <div
            class="message-text max-w-[75%] text-[0.9rem] bg-slate-100 rounded-[13px_13px_13px_3px] py-[2px] px-[16px]"
          >
            <div class="thinking-indicator flex gap-[4px] py-[15px]">
              <div
                class="dot h-[7px] w-[7px] bg-red-400 rounded-[50%] opacity-[0.7]"
                style="animation: dotPulse 1.8s ease-in-out infinite 0.2s"
              ></div>
              <div
                class="dot h-[7px] w-[7px] bg-red-400 rounded-[50%] opacity-[0.7]"
                style="animation: dotPulse 1.8s ease-in-out infinite 0.3s"
              ></div>
              <div
                class="dot h-[7px] w-[7px] bg-red-400 rounded-[50%] opacity-[0.7]"
                style="animation: dotPulse 1.8s ease-in-out infinite 0.4s"
              ></div>
            </div>
          </div>
        </div>`;
      const incomingMessageDiv = createMessageElement(
        messageContent,
        "bot-message",
        "thinking"
      );
      chatBody.appendChild(incomingMessageDiv);
      chatBody.scrollTo({
        top: chatBody.scrollHeight,
        behavior: "smooth",
      });
      generateBotResponse(incomingMessageDiv);
    }, 600);
  };

  messageInput.addEventListener("keydown", (x) => {
    const userMessage = x.target.value.trim();
    if (x.key === "Enter" && userMessage) {
      handleOutgoingMessage(x);
    }
  });

  messageInput.addEventListener("input", () => {
    messageInput.style.height = `${initialInputHeight}px`;
    messageInput.style.height = `${messageInput.scrollHeight}px`;
    document.querySelector(".chat-form").style.borderRadius =
      messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const imgTag = fileUploadWrapper.querySelector("img");
      imgTag.src = event.target.result;
      imgTag.classList.remove("hidden");

      const base64String = event.target.result.split(",")[1];

      userData.file = {
        data: base64String,
        mime_type: file.type,
      };

      fileInput.value = "";
    };

    reader.readAsDataURL(file);
  });

  fileCancelButton.addEventListener("click", () => {
    previewImage.src = "";
    previewImage.classList.add("hidden");
    fileUploadButton.classList.remove("hidden");
    fileCancelButton.classList.add("hidden");
    fileInput.value = "";
  });

  const picker = new EmojiMart.Picker({
    theme: "light",
    skinTonePosition: "none",
    previewPosition: "none",
    onEmojiSelect: (emoji) => {
      const { selectionStart: start, selectionEnd: end } = messageInput;
      messageInput.setRangeText(emoji.native, start, end, "end");
      messageInput.focus();
    },
    onClickOutside: (x) => {
      const emojiButton = document.getElementById("emoji-picker");

      if (emojiButton.contains(x.target)) {
        document.body.classList.toggle("show-emoji-picker");
      } else {
        document.body.classList.remove("show-emoji-picker");
      }
    },
  });

  document.querySelector(".chat-form").appendChild(picker);

  sendMessageButton.addEventListener("click", (x) => handleOutgoingMessage(x));
  document
    .querySelector("#file-upload")
    .addEventListener("click", () => fileInput.click());

  const toggleChatbot = () => {
    const messageIcon = document.getElementById("chatbot-icon");
    const closeIcon = document.getElementById("close-icon");
    const isMobile = window.innerWidth <= 640;

    if (chatbotPopup.classList.contains("opacity-0")) {
      chatbotPopup.classList.remove("opacity-0", "scale-[0.1]");
      chatbotPopup.classList.add("opacity-100", "scale-100", "z-30");
      messageIcon.classList.add("opacity-0");
      closeIcon.classList.remove("opacity-0");
      chatbotToggler.classList.add("rotate-[-90deg]");

      if (isMobile) {
        previewImage.addEventListener("click", () => {
          previewImage.src = "";
          previewImage.classList.add("hidden");
        });
      }
    } else {
      chatbotPopup.classList.remove("opacity-100", "scale-100", "z-30");
      chatbotPopup.classList.add("opacity-0", "scale-[0.1]");
      messageIcon.classList.remove("opacity-0");
      closeIcon.classList.add("opacity-0");
      chatbotToggler.classList.remove("rotate-[-90deg]");
    }
  };

  chatbotToggler.addEventListener("click", toggleChatbot);
  closeChatbot.addEventListener("click", toggleChatbot);
};

function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAABQAQCdASoDAAIAAgA2JQBOgC6gAP73M8eLuxHGTv3eIAAA";
  }
  testWebP(function (support) {
    let className = support === true ? "webp" : "";
    document.documentElement.classList.add(className);
  });
}
isWebp();

// header burger
const header = document.querySelector(".header");
const logoWrapper = document.querySelector(".header__logo_wrapper");
const burgerBtn = document.querySelector(".header__burger");
const mainWrapper = document.querySelector("main");
let headerHeight = header.offsetHeight;
mainWrapper.style.paddingTop = logoWrapper.offsetHeight + "px"; // Из-за того что шапка фиксированя, приходится дать пажинг для блоков через js
function activeHeader(isActive) {
  // Функия которая определяет если шапка активна и делает манипуляций в ней
  if (isActive) {
    header.style.maxHeight = headerHeight + "px";
  } else {
    header.style.maxHeight = logoWrapper.offsetHeight + "px";
  }
}
activeHeader(header.classList.contains("_active"));
burgerBtn.addEventListener("click", function () {
  header.classList.toggle("_active");
  activeHeader(header.classList.contains("_active"));
});

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
const logoWrapper = document.querySelector(".header__logo-wrapper");
const burgerBtn = document.querySelector(".header__burger");
let headerHeight = header.offsetHeight;

const activeHeader = (isActive) => {
  if (isActive) {
    header.style.maxHeight = headerHeight + "px";
  } else {
    header.style.maxHeight = logoWrapper.offsetHeight + "px";
  }
};
activeHeader(header.classList.contains("_active"));
burgerBtn.addEventListener("click", function () {
  header.classList.toggle("_active");
  activeHeader(header.classList.contains("_active"));
});

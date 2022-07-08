function isWebp() {
  function testWebP(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      "data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAABQAQCdASoDAAIAAgA2JQBOgC6gAP73M8eLuxHGTv3eIAAA"
  }
  testWebP(function (support) {
    let className = support === true ? "webp" : ""
    document.documentElement.classList.add(className)
  })
}
isWebp()

// header burger
const header = document.querySelector(".header")
const logoWrapper = document.querySelector(".header__logo-wrapper")
const burgerBtn = document.querySelector(".header__burger")
const mainWrapper = document.querySelector("main")
let headerHeight = header.offsetHeight
mainWrapper.style.paddingTop = logoWrapper.offsetHeight + "px" // Из-за того что шапка фиксированя, приходится дать пажинг для блоков через js
function activeHeader(isActive) {
  // Функия которая определяет если шапка активна и делает манипуляций в ней
  if (isActive) {
    header.style.maxHeight = headerHeight + "px"
  } else {
    header.style.maxHeight = logoWrapper.offsetHeight + "px"
  }
}
activeHeader(header.classList.contains("_active"))
burgerBtn.addEventListener("click", function () {
  header.classList.toggle("_active")
  activeHeader(header.classList.contains("_active"))
})

function scrollMoveXY() {
  // положения скрола  на странице
  var x =
    window.pageXOffset ||
    window.scrollX ||
    (document.documentElement && document.documentElement.scrollLeft) ||
    (document.body && document.body.scrollLeft) ||
    0
  var y =
    window.pageYOffset ||
    window.scrollY ||
    (document.documentElement && document.documentElement.scrollTop) ||
    (document.body && document.body.scrollTop) ||
    0
  return { x: x, y: y }
}

window.addEventListener("scroll", function () {
  let position = scrollMoveXY().y
  if (position !== 0) {
    header.classList.add("_onscroll")
  } else {
    header.classList.remove("_onscroll")
  }
})

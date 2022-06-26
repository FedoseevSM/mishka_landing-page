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

/*--------Карта----------*/
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init)
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7,
  })
}
/*------------------*/

/*--------Слайдер----------*/
new Swiper(".reviewsSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
/*------------------*/

/*--------Модальное окно----------*/
!(function (e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n
        return Boolean(o[n])
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t
          t = t.parentNode
        }
        return null
      })
})(window.Element.prototype)

document.addEventListener("DOMContentLoaded", function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close")

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener("click", function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault()

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        )

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add("active")
      overlay.classList.add("active")
    }) // end click
  }) // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal")

      parentModal.classList.remove("active")
      overlay.classList.remove("active")
    })
  }) // end foreach

  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode

      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active")
        document.querySelector(".overlay").classList.remove("active")
      }
    },
    false
  )

  overlay.addEventListener("click", function () {
    document.querySelector(".modal.active").classList.remove("active")
    this.classList.remove("active")
  })
}) // end ready
/*------------------*/

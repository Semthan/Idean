document.addEventListener("DOMContentLoaded", function () {

  const navbar = document.getElementById('nav')
  var lastScrollTop = 0

  window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      navbar.classList.add("hide_navbar")
    } else if (st < lastScrollTop) {
      // upscroll code
      navbar.classList.remove("hide_navbar")
      navbar.classList.remove('inverted-sG9xS')
      navbar.classList.add('show_navbar')
    }
    if (st == 0) {
      navbar.classList.add('inverted-sG9xS')
      navbar.classList.remove('show_navbar')
    }
    lastScrollTop = st;
  })
})
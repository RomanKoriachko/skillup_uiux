// Navigation

let aboutLessonsBtn = document.querySelector(".about-lessons-btn");
let aboutUsBtn = document.querySelector(".about-us-btn");
let contactsBtn = document.querySelector(".contacts-btn");
let registrationBtns = document.querySelectorAll(".registration-btn");

let header = document.querySelector(".header");

let aspectSection = document.querySelector(".aspect-section");
let countSection = document.querySelector(".count-section");
let footer = document.querySelector(".footer");
let formSection = document.querySelector(".form-section");

for (let i = 0; i < registrationBtns.length; i++) {
  registrationBtns[i].addEventListener("click", function () {
    window.scrollTo({
      top:
        formSection.getBoundingClientRect().top +
        window.pageYOffset -
        header.clientHeight,
      behavior: "smooth",
    });
  });
}

aboutLessonsBtn.addEventListener("click", function () {
  window.scrollTo({
    top:
      aspectSection.getBoundingClientRect().top +
      window.pageYOffset -
      header.clientHeight,
    behavior: "smooth",
  });
});
aboutUsBtn.addEventListener("click", function () {
  window.scrollTo({
    top:
      countSection.getBoundingClientRect().top +
      window.pageYOffset -
      header.clientHeight,
    behavior: "smooth",
  });
});
contactsBtn.addEventListener("click", function () {
  window.scrollTo({
    top:
      footer.getBoundingClientRect().top +
      window.pageYOffset -
      header.clientHeight,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (
    window.pageYOffset >=
      aspectSection.getBoundingClientRect().top +
        window.pageYOffset -
        header.clientHeight -
        1 &&
    aspectSection.getBoundingClientRect().bottom >= 0
  ) {
    aboutLessonsBtn.classList.add("active");
    aboutUsBtn.classList.remove("active");
    contactsBtn.classList.remove("active");
  } else {
    aboutLessonsBtn.classList.remove("active");
  }

  if (
    window.pageYOffset >=
      countSection.getBoundingClientRect().top +
        window.pageYOffset -
        header.clientHeight -
        1 &&
    countSection.getBoundingClientRect().bottom >= 0
  ) {
    aboutLessonsBtn.classList.remove("active");
    aboutUsBtn.classList.add("active");
    contactsBtn.classList.remove("active");
  } else {
    aboutUsBtn.classList.remove("active");
  }

  if (
    pageYOffset + window.innerHeight ===
    document.documentElement.scrollHeight
  ) {
    aboutLessonsBtn.classList.remove("active");
    aboutUsBtn.classList.remove("active");
    contactsBtn.classList.add("active");
  } else {
    countSection.classList.remove("active");
  }
});

// Dropdown Menu

let dropdownMenu = document.querySelectorAll(".benefits-section-item-wrapper");
let dropdownItem = document.querySelectorAll(".benefits-section-subitem");
let dropdownButton = document.querySelectorAll(".benefits-section-item-btn");

for (let i = 0; i < dropdownMenu.length; i++) {
  dropdownMenu[i].addEventListener("click", function () {
    dropdownItem[i].classList.toggle("active");
    dropdownButton[i].classList.toggle("active-btn");
  });
}

// Sliders

$(document).ready(function () {
  $(".slider").slick({});
});

$(document).ready(function () {
  $(".suitable-slider").slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".suitable-slider-mobile").slick({
    dots: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".plan-section-slider").slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".plan-section-mobile-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".companies-slider").slick({
    arrows: false,
    infinite: true,
    centerMode: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
$(document).ready(function () {
  $(".companies-tablet-slider").slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});

// slider cover

let slider = document.querySelector(".slider");
let cover = document.querySelector(".slider-cover");

window.addEventListener("scroll", function () {
  let scrollHight = window.pageYOffset;
  let screenHeigth = window.screen.height;
  let screenWidth = window.screen.width;
  let sliderHight = slider.getBoundingClientRect().top + window.pageYOffset;
  if (
    scrollHight >= sliderHight - screenHeigth / 2 &&
    scrollHight <= sliderHight + screenHeigth / 4 &&
    screenWidth >= 576
  ) {
    cover.classList.add("hide");
    cover.classList.remove("show");
  } else {
    cover.classList.add("show");
    cover.classList.remove("hide");
  }
});

let menubtn = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .fles .navbar')

menubtn.onclick =()=>{
  menubtn.classList.toggle('fa-times')
  navbar.classList.toggle('active')
} 
var swiper = new Swiper(".courseslid", {
  spaceBetween:20,
  grabCursor:true,
  loop:true,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});
var swiper = new Swiper(".teacherslid", {
  spaceBetween:20,
  grabCursor:true,
  loop:true,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});


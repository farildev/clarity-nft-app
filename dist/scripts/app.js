$('.banner__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '20',
    centerMode: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint:1200,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint:992,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          dots: false,
        },
      },  
      {
        breakpoint:480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
        },
      },
      {
        breakpoint:360,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
        },
      },
    ]
  });
  $('.seller__carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    centerPadding: '20px',
    arrows: true,
    nextArrow: $('.arrow__right'),
    prevArrow: $('.arrow__left'),
    dots: false,
    responsive: [
      {
        breakpoint:1280,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint:992,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      }, 
       
      {
        breakpoint:480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
        },
      },
      {
        breakpoint:360,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
        },
      },
    ]
  });
  $('.category__carousel').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    centerPadding: '20',
    centerMode: true,
    arrows: false,
    dots: false,
    nextArrow: $('#left'),
    prevArrow: $('#right'),
    responsive: [
      {
        breakpoint:1200,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint:992,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },  
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      }, 
      {
        breakpoint:480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
        },
      },
      {
        breakpoint:360,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
        },
      },
    ]
  });


  window.addEventListener('scroll',function(){
    let windowPosition = window.scrollY >50;
    let header = document.getElementById('header');
    header.classList.toggle('header-active',windowPosition)
  });
  
  const arrivalBox = document.querySelectorAll('.arrival__box');
  const categoryLink = document.querySelectorAll('.arrival__link');
  for(let i = 0; i<categoryLink.length; i++){
    categoryLink[i].addEventListener('click', function(e){
      for(let n=0; n<categoryLink.length; n++){
        categoryLink[n].classList.remove('active');
      }
      categoryLink[i].classList.add('active');
  
      const dataFilter = this.getAttribute('data-filter');
      for(k=0; k<arrivalBox.length; k++){
        arrivalBox[k].classList.add('active');
        arrivalBox[k].classList.remove('hide');
          if(arrivalBox[k].getAttribute('data-category') == dataFilter || dataFilter == "All"){
            arrivalBox[k].classList.remove('active');
            arrivalBox[k].classList.add('hide');
          }
      }
      e.preventDefault();
    });
  }


const sidemenu = document.querySelector('.sidemenu__section');
const hamburgerIcon = document.querySelector('.bx-menu');
const closeIcon = document.querySelector('.close__icon');

hamburgerIcon.addEventListener('click', function(e){
  sidemenu.classList.add('menu-active');
  sidemenu.style.overflow = "scroll";
  document.body.style.overflow = "hidden";
  e.preventDefault();
});
closeIcon.addEventListener('click', function(e){
  sidemenu.classList.remove('menu-active');
  document.body.style.overflow = "auto";
  e.stopPropagation();
});

const sideMenuLink = document.querySelectorAll('.sidemenu__link');
const sideDropdown = document.querySelectorAll('.sidemenu__dropdown');
for(let c=0; c < sideMenuLink.length; c++){
  sideMenuLink[c].addEventListener('click', function(e){
    for(let d=0; d<sideMenuLink.length; d++){
      sideMenuLink[d].classList.remove('sidemenu--active');
      for(let a = 0; a<sideDropdown.length; a++){
        sideDropdown[a].classList.add('sidemenu--active');
      }
    }
    sideMenuLink[c].classList.add('sidemenu--active');
    e.preventDefault();
  });
};


const userIcon = document.querySelector('.user__icon');
const loginPopup = document.querySelector('.login__popup');

userIcon.addEventListener('click', function(e){
  loginPopup.classList.toggle('login__popup--active');
  e.preventDefault();
})

const shopIcon = document.querySelector('.shop__icon');
const shoppingSidebar = document.querySelector('.shopping__sidebar');
const closeBtn = document.querySelector('.close__btn');
shopIcon.addEventListener('click', function(e){
  shoppingSidebar.classList.add('menu--active');
  shoppingSidebar.style.overflow = "scroll";
  document.body.style.overflow = "hidden";
  e.preventDefault();
})
closeBtn.addEventListener('click', function(){
  shoppingSidebar.classList.remove('menu--active');
  document.body.style.overflow = "auto";
})

//Product counter
let counter=0;
let incrementBtn = document.querySelectorAll('.counter__increment');
let decrementBtn = document.querySelectorAll('.counter__decrement');
let counterBody = document.querySelectorAll('.counter__body');
let shoppingBox = document.querySelectorAll('.shopping__box');


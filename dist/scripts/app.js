window.addEventListener('scroll',function(){
  let windowPosition = window.scrollY >50;
  let header = document.getElementById('header');
  header.classList.toggle('header-active',windowPosition)
});

const arrivalBox = document.querySelectorAll('.arrival__box');
const categoryLink = document.querySelectorAll('.arrival__link');
categoryLink.forEach(categoryEl => {
  categoryEl.addEventListener('click', (e) => {
    e.preventDefault();
    categoryEl.classList.add('active');
    console.log(categoryEl);
  })
})

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
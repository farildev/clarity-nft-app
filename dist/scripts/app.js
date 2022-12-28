window.addEventListener('scroll',function(){
  let windowPosition = window.scrollY >0;
  let header = document.getElementById('header');
  header.classList.toggle('header-active',windowPosition)
});

const categoryLink = document.querySelectorAll('.arrival__link');
categoryLink.forEach(element => {
  element.addEventListener('click', function(e){
    categoryLink.forEach(remove => {
      remove.classList.remove('active')
      element.classList.add('active');
      e.preventDefault();
    })
  })
})




$('.banner__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '0',
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
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint:992,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
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

  

  // $('.category__carousel').slick({
  //   infinite: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   autoplay: true,
  //   centerPadding: '20px',
  //   arrows: false,
  //   dots: false,
  //   responsive: [
  //     {
  //       breakpoint:1280,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint:992,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1,
  //       },
  //     },  
  //     {
  //       breakpoint:480,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1,
  //         centerMode: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint:360,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1,
  //         centerMode: true,
  //         dots: false,
  //       },
  //     },
  //   ]
  // });
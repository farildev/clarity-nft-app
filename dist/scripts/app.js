$('.banner__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    centerPadding: '20px',
    centerMode: true,
    arrows: false,
    dots: true,
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
  $('.seller__carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    centerPadding: '20px',
    arrows: false,
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
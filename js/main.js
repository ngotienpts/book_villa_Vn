document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // header
  var header = document.querySelector('#header');

  // submenu
  var subMenu = document.querySelector('.sub-menu-wrapper');

  // navbar arrow 
  var arrow = document.querySelector('.navbar-arrow');

  // height fixed
  var heightFixed = document.querySelector('.height-fixed');

  // đếm số lượng 
  var resortCounts = document.querySelectorAll('.resortCount');
  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }

      // 
      if(header){
        var extendsMenu = header.querySelectorAll('.header-extend-icon');
        extendsMenu.forEach(function(a){
          if(subMenu){
            subMenu.style.top = header.clientHeight + 'px';
            a.onclick = function(){
              subMenu.classList.toggle('open');
              if(widthDoc.clientWidth <= 980){
                widthDoc.classList.toggle('hide');
              }
            }
          }
        });
        
        
        if(heightFixed){
          heightFixed.style.height = header.clientHeight + 'px';
        }

      }


      // arrow
      if(arrow){
        var navbarList = document.querySelector('.navbar-mb__list');
        arrow.onclick = function(){
          navbarList.scrollLeft += 100;
        }
      }
      
      if(widthDoc){
        var expNoEditFull = document.querySelectorAll('.expNoEdit.full');
        expNoEditFull.forEach(function(a){
          a.style.width = widthDoc.clientWidth + 'px';
          a.style.marginLeft = '-' + a.offsetLeft + 'px';
        })
      }

      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {});
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // slider căn được đặt nhiều nhất
    sliderMostInterestedApartmanet: function(){
      var swiper1 = new Swiper(".mySwiperPartment", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 8,
        navigation: {
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
        },
        hideOnClick:true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
        },
      });
    },
     // slider biệt thự nghỉ dưỡng
     sliderResort: function(){
      resortCounts.forEach(function(resortCount){
        var count = Math.floor(resortCount.children.length /2);
        var swiper3 = new Swiper(".mySwiperResort", {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: 'rows',
          },
          navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
          },
          spaceBetween: 10,
          hideOnClick:true,
          breakpoints: {
            768: {
              slidesPerView: 2,
              grid: {
                rows: (Math.floor(resortCount.children.length /count)),
                fill: 'rows',
              },
            },
            1024: {
              slidesPerView: 3,
              grid: {
                rows: (Math.floor(resortCount.children.length /count)),
                fill: 'rows',
              },
            },
          },
        });
      })
    },
    // slider thư viện ảnh & video
    sliderPicture: function(){
      var swiper4 = new Swiper(".mySwiperPiture", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 8,
        navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        },
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        hideOnClick:true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
        },
      });
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slider thư viện ảnh & video
      this.sliderPicture();
      // slider căn được đặt nhiều nhất
      this.sliderMostInterestedApartmanet();
      // slider biệt thự nghỉ dưỡng
      this.sliderResort();
    },
  };

  app.start();
});

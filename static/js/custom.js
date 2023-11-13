(function($) {
  
  "use strict";

  // Preloader
    function stylePreloader() {
      $('body').addClass('preloader-deactive');
    }
  // Background Image Js
    const bgSelector = $("[data-bg-img]");
    bgSelector.each(function (index, elem) {
      let element = $(elem),
        bgSource = element.data('bg-img');
      element.css('background-image', 'url(' + bgSource + ')');
    });

  // Background Color Js
    const Bgcolorcl = $("[data-bg-color]");
    Bgcolorcl.each(function (index, elem) {
      let element = $(elem),
        Bgcolor = element.data('bg-color');
      element.css('background-color', Bgcolor);
    });

  // Offcanvas Nav Js
    var $offcanvasNav = $("#offcanvasNav a");
    $offcanvasNav.on("click", function () {
      var link = $(this);
      var closestUl = link.closest("ul");
      var activeLinks = closestUl.find(".active");
      var closestLi = link.closest("li");
      var linkStatus = closestLi.hasClass("active");
      var count = 0;

      closestUl.find("ul").slideUp(function () {
        if (++count == closestUl.find("ul").length)
          activeLinks.removeClass("active");
      });

      if (!linkStatus) {
        closestLi.children("ul").slideDown();
        closestLi.addClass("active");
      }
    });

  // Offcanvas Nav Two Js
    var $offcanvasMenu2 = $("#offcanvas-menu2 li a");
    $offcanvasMenu2.on("click", function (e) {
      // e.preventDefault();
      $(this).closest("li").toggleClass("active");
      $(this).closest("li").siblings().removeClass("active");
      $(this).closest("li").siblings().children(".category-sub-menu").slideUp();
      $(this)
        .closest("li")
        .siblings()
        .children(".category-sub-menu")
        .children("li")
        .toggleClass("active");
      $(this)
        .closest("li")
        .siblings()
        .children(".category-sub-menu")
        .children("li")
        .removeClass("active");
      $(this).parent().children(".category-sub-menu").slideToggle();
    });

  // Menu Activeion Js
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if((curpage === "" || curpage === "/" || curpage === "admin") && hash === "")
      {
      } else {
        $(".header-navigation-area li").each(function()
      {
        $(this).removeClass("active");
      });
      if(hash != "")
        $(".header-navigation-area li a[href='"+hash+"']").parents("li").addClass("active");
      else
      $(".header-navigation-area li a[href='"+curpage+"']").parents("li").addClass("active");
    }
    
  // Swiper Default Slider Js
    var mainlSlider = new Swiper('.default-slider-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 500,
      spaceBetween: 0,
      effect: 'fade',
      autoHeight: true, //enable auto height
      fadeEffect: {
          crossFade: true,
      },
      navigation: {
        nextEl: '.default-slider-container .swiper-prev',
        prevEl: '.default-slider-container .swiper-next',
      },
      pagination: {
          el: '.home-swiper-pagination',
          clickable: true,
          type: 'bullets',
      },
    });

  // Product Single Thumb Slider Js
    var ProductNav = new Swiper('.single-product-nav-slider', {
      spaceBetween: 20,
      slidesPerView: 4,
      mousewheel: {
        invert: true,
      },
      navigation: {
        nextEl: '.product-single-swiper-wrap .swiper-btn-next',
        prevEl: '.product-single-swiper-wrap .swiper-btn-prev',
      },
    });
    var ProductThumb = new Swiper('.single-product-thumb-slider', {
      effect: 'fade',
      mousewheelControl: true,
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: ProductNav,
      }
    });

  // Product Slider Col1 Js
    var productSliderCol1 = new Swiper('.product-slider-col1-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 600,
      autoHeight: true, //enable auto height
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        1200: {
          slidesPerView : 1,
        },
        992: {
          slidesPerView : 1,
        },
        768: {
          slidesPerView : 2,
        },
        0: {
          slidesPerView : 1,
        },
      }
    });

  // Product Slider Col1 Js
    var productSliderCol1St2 = new Swiper('.product-slider-col1-style2-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 600,
      autoHeight: true, //enable auto height
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        1200: {
          slidesPerView : 1,
        },
        992: {
          slidesPerView : 1,
        },
        768: {
          slidesPerView : 2,
        },
        0: {
          slidesPerView : 1,
        },
      }
    });

  // Product Slider Col3 Js
    var productSliderCol3 = new Swiper('.product-slider-col3-container', {
      slidesPerView : 3,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 600,
      navigation: {
        nextEl: '.swiper-navigation2 .swiper-btn-next',
        prevEl: '.swiper-navigation2 .swiper-btn-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView : 3,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        992: {
          slidesPerView : 3,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        576: {
          slidesPerView : 2,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        0: {
          slidesPerView : 1,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
      }
    });

  // Product Slider Col3 Js
    var productSliderCol3St2 = new Swiper('.product-slider-col3-style2-container', {
      slidesPerView : 3,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 600,
      navigation: {
        nextEl: '.swiper-navigation2 .swiper-btn-next',
        prevEl: '.swiper-navigation2 .swiper-btn-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView : 3,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        992: {
          slidesPerView : 2,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        576: {
          slidesPerView : 2,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        0: {
          slidesPerView : 1,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
      }
    });

  // Product Slider Col4 Js
    var productSliderCol4 = new Swiper('.product-slider-col4-container', {
      slidesPerView : 4,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 600,
      navigation: {
        nextEl: '.swiper-navigation1 .swiper-btn-next',
        prevEl: '.swiper-navigation1 .swiper-btn-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView : 4,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        992: {
          slidesPerView : 3,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        576: {
          slidesPerView : 2,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
        0: {
          slidesPerView : 1,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
          },
        },
      }
    });

  // Product Slider Weekly Js
    var productSliderWeekly = new Swiper('.product-slider-weekly-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 1000,
      navigation: {
        nextEl: '.swiper-navigation7 .swiper-btn-next',
        prevEl: '.swiper-navigation7 .swiper-btn-prev',
      },
    });

  // Product Slider Grid2 Js
    var productSliderGrid2Item3 = new Swiper('.product-slider-grid2-item3-container', {
      slidesPerView: 2,
      grid: {
        rows: 3,
      },
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 1300,
      navigation: {
        nextEl: '.swiper-navigation6 .swiper-btn-next',
        prevEl: '.swiper-navigation6 .swiper-btn-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          grid: {
            rows: 3,
          },
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 3,
          },
          autoplay: {
            delay: 5000,
          },
        },
        576: {
          slidesPerView: 1,
          grid: {
            rows: 3,
          },
          autoplay: {
            delay: 5000,
          },
        },
        0: {
          slidesPerView: 1,
          grid: {
            rows: 3,
          },
          autoplay: {
            delay: 5000,
          },
        },
      }
    });

  // Product Slider Grid2 Js
    var productSliderGrid1Item3 = new Swiper('.product-slider-grid1-item3-container', {
      slidesPerView: 1,
      grid: {
        rows: 3,
      },
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 1300,
    });

  // Product Slider Grid2 Js
    var productSliderGrid2 = new Swiper('.product-slider-grid2-container', {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
      },
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 1300,
      navigation: {
        nextEl: '.swiper-navigation3 .swiper-btn-next',
        prevEl: '.swiper-navigation3 .swiper-btn-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
          autoplay: {
            delay: 5000,
          },
        },
        576: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
          autoplay: {
            delay: 5000,
          },
        },
        0: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
          autoplay: {
            delay: 5000,
          },
        },
      }
    });

  // Product Slider Grid3 Js
    var productSliderGrid3 = new Swiper('.product-slider-grid3-container', {
      slidesPerView: 3,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
      },
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 1300,
      navigation: {
        nextEl: '.swiper-navigation4 .swiper-btn-next',
        prevEl: '.swiper-navigation4 .swiper-btn-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
          autoplay: {
            delay: 5000,
          },
        },
        576: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
          autoplay: {
            delay: 5000,
          },
        },
        0: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
          autoplay: {
            delay: 5000,
          },
        },
      }
    });

  // Product Slider Grid3 Js
    var TestimonialSlider = new Swiper('.testimonial-slider-container', {
      slidesPerView: 1,
      slidesPerGroup :1,
      spaceBetween: 30,
      pagination: {
        el: '.testimonial-slider-container .swiper-pagination',
        clickable: true
      },
    });

  // Product Slider Grid3 Js
    var PostGallerySlider = new Swiper('.post-gallery-slider-container', {
      slidesPerView: 1,
      slidesPerGroup :1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.post-gallery-slider-container .swiper-next',
        prevEl: '.post-gallery-slider-container .swiper-prev',
      },
      mousewheel: {
        invert: true,
      },
    });

  // Brand Logo Slider Js
    var BrandLogoSlider = new Swiper('.brand-logo-slider-container', {
      slidesPerView : 6,
      slidesPerGroup: 1,
      spaceBetween: 0,
      speed: 500,
      navigation: {
        nextEl: '.swiper-navigation5 .swiper-btn-next',
        prevEl: '.swiper-navigation5 .swiper-btn-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView : 6,
          spaceBetween : 0,
        },
        992: {
          slidesPerView : 4,
          spaceBetween : 0,
        },
        576: {
          slidesPerView : 3,
          spaceBetween : 0,
        },
        480: {
          slidesPerView : 2,
          spaceBetween : 0,
        },
        0: {
          slidesPerView : 1,
          spaceBetween : 0,
        },
      }
    });

  // Vertical Menu Js
    const $btnMenu = $(".menu-btn");
    const $vmenuContent = $(".vmenu-content");
    $btnMenu.on("click", function (event) {
      $vmenuContent.slideToggle(500);
    });

    $vmenuContent.each(function () {
      var $ul = $(this),
        $lis = $ul.find(".menu-item:gt(10)"),
        isExpanded = $ul.hasClass("expanded");
      $lis[isExpanded ? "show" : "hide"]();

      if ($lis.length > 0) {
        $ul.append(
          $(
            '<li class="expand">' +
              (isExpanded
                ? '<a class="minus" href="javascript:void(0);"><span><i class="fa fa-minus"></i>Show Less</span></a>'
                : '<a href="javascript:void(0);"><span><i class="fa fa-plus"></i>Show More</span></a>') +
              "</li>"
          ).on("click", function (event) {
            var isExpanded = $ul.hasClass("expanded");
            event.preventDefault();
            $(this).html(
              isExpanded
                ? '<a href="javascript:void(0);"><span><i class="fa fa-plus"></i>Show More</span></a>'
                : '<a class="minus" href="javascript:void(0);"><span><i class="fa fa-minus"></i>Show Less</span></a>'
            );
            $ul.toggleClass("expanded");
            $lis.toggle(300);
          })
        );
      }
    });

  // Fancybox Js
    $('.image-popup').fancybox();
    $('.video-popup').fancybox();

  // Tool Tip Js
    tippy('.ht-tooltip', {
      inertia: true,
      animation: 'shift-away',
      arrow: true
    });

  // Close Banner Js
    $(".close-banner").click(function () {
      $(this).parents(".banner-nav") .slideUp(300);
    });

  // Product Quantity JS
    var proQty = $(".pro-qty");
    proQty.append('<div class="inc qty-btn">+</div>');
    proQty.append('<div class= "dec qty-btn">-</div>');
    $('.qty-btn').on('click', function (e) {
      e.preventDefault();
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find('input').val(newVal);
    });

  // Custom Quantity
    var progressBar = $('.progress-quanlity-bar');
    $(progressBar).each(function() {
      var product_id = jQuery (this).data('pid');
      var product_qty = jQuery (this).data('pqty');
      var product_sold = jQuery (this).data('psold');
      var total = product_sold + product_qty;
      jQuery('.progress-quanlity-width-'+product_id).find('.width').width(Math.floor(product_qty/total*100) + "%");
    });

  // Countdown Js 
    $(".ht-countdown").each(function(index, element) {
      var $element = $(element),
      $date = $element.data('date');
      $element.countdown($date, function(event) {
        var $this = $(this).html(event.strftime(''
        +
        '<div class="countdown-item"><span class="countdown-item__time">%D</span><span class="countdown-item__label">days</span></div>' +
        '<div class="countdown-item"><span class="countdown-item__time">%H</span><span class="countdown-item__label">Hours</span></div>' +
        '<div class="countdown-item"><span class="countdown-item__time">%M</span><span class="countdown-item__label">Mins</span></div>' +
        '<div class="countdown-item"><span class="countdown-item__time">%S</span><span class="countdown-item__label">Secs</span></div>'));
      });
    });

  // Ajax Contact Form JS
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function(e) {
      e.preventDefault();
      var formData = form.serialize();
      $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData
      }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('alert alert-danger');
        $(formMessages).addClass('alert alert-success fade show');

        // Set the message text.
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(response);

        // Clear the form.
        $('#contact-form input,#contact-form textarea').val('');
      }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('alert alert-success');
        $(formMessages).addClass('alert alert-danger fade show');

        // Set the message text.
        if (data.responseText === '') {
          formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
          formMessages.append(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occurred and your message could not be sent.');
        }
      });
    });

  // scrollToTop Js
    function scrollToTop() {
      var $scrollUp = $('#scroll-to-top'),
        $lastScrollTop = 0,
        $window = $(window);
        $window.on('scroll', function () {
        var st = $(this).scrollTop();
          if (st > $lastScrollTop) {
              $scrollUp.removeClass('show');
          } else {
            if ($window.scrollTop() > 120) {
              $scrollUp.addClass('show');
            } else {
              $scrollUp.removeClass('show');
            }
          }
          $lastScrollTop = st;
      });
      $scrollUp.on('click', function (evt) {
        $('html, body').animate({scrollTop: 0}, 50);
        evt.preventDefault();
      });
    }
    scrollToTop();
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  var varWindow = $(window);
  varWindow.on('load', function() {
    // stylePreloader
      stylePreloader();
  });

})(window.jQuery);
$(document).ready(function() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
      touchDevice = false;

  // on first load, call function to resize height of div to appropriate screen size
  adjustHeight();

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    touchDevice = true;

  if (touchDevice) {
    // iOS re-orientation fix
    var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
    if (viewportmeta) {
      viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
      document.body.addEventListener('gesturestart', function() {
        viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
      }, false);
    }

    // hides gallery slider buttons (swipe enabled)
    $('.sliderButton').addClass('hidden');

    $('#intro').css('background-size', '105%');

    // on orientation change it fixes height of div and resizes bg image (position up/down)
    function doOnOrientationChange() {
      adjustHeight();

      switch (window.orientation) {
        case -90:
        case 90:
          $('#intro').css('background-size', '50%');
          break;
        default:
          if (width < 600) {
            $('#intro').css('background-size', '105%');
          } else {
            $('#intro').css('background-size', 'auto'); // if iPad default position
          }
          break;
      }
    }
    window.addEventListener('orientationchange', doOnOrientationChange);

    // hides Safari address bar on iPhone
    window.addEventListener("load",function() {
      setTimeout(function() {
        window.scrollTo(0, 1);
      }, 300);
    })
  }

  // for Windows Phone mobile IE
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
      document.createTextNode(
        // for mobile IE we show retina image, a darker background (no blur), and fix width of SVG
        "#intro{background: url('./images/bg@2x.jpg') 50% 0 no-repeat}.noScroll #mainNav.expanded{background: rgba(0,0,0,.95)}.cover{width: 100%}}"
      )
    );
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
  }

  var previousScroll = 0, // previous scroll position
      menuOffset = 90, // height of menu (once scroll passed it, menu is hidden)
      detachPoint = 850, // point of detach (after scroll passed it, menu is fixed)
      hideShowOffset = 6; // scrolling value after which triggers hide/show menu

  // needs initial position of bg image
  var s = $(this).scrollTop();
  $('.bg-image').css('-webkit-transform', 'translate3d(0,' + (s/1.3) + 'px, 0');

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop(), // gets current scroll position
        pageHeight = document.body.offsetHeight, // gets height of page
        scrolledWindowHeight = window.innerHeight + window.scrollY, // calculates current scroll position (to find if user at the bottom of site)
        scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling


    // for bg image
    s = $(this).scrollTop();
    if (scrolledWindowHeight <= pageHeight)
      $('.bg-image').css('-webkit-transform', 'translate3d(0,' + (s/1.3) + 'px, 0');

    // timer for when to add class for hover effect on blog links
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      $('#fullWidthContainer, #fullWidthDemoContainer').addClass('notScrolling');
    }, 120));

    // if user is at the top/bottom of page don’t hide hover animation
    if ((currentScroll <= 0) || (scrolledWindowHeight >= pageHeight - 200)) {
      // do nothing
    } else {
      if (scrollDifference >= 35) {
        $('#fullWidthContainer, #fullWidthDemoContainer').removeClass('notScrolling');
      }
    }

    // on scroll hide/show menu
    if (!$('#mainNav').hasClass('expanded')) {
      // if scrolled past menu
      if (currentScroll > menuOffset) {
        // if scrolled past detach point add class to fix menu
        if (currentScroll > detachPoint) {
          if (!$('#mainNav').hasClass('detached'))
            $('#mainNav').addClass('detached');
        }

        // if scrolling faster than hideShowOffset hide/show menu
        if (scrollDifference >= hideShowOffset) {
          if (currentScroll > previousScroll) {
            // scrolling down; hide menu
            if (!$('#mainNav').hasClass('invisible'))
              $('#mainNav').addClass('invisible');
          } else {
            // scrolling up; show menu
            if ($('#mainNav').hasClass('invisible'))
              $('#mainNav').removeClass('invisible');
          }
        }
      } else {
        // only remove "detached" class if user is at the top of document (menu jump fix)
        if (currentScroll <= 0){
          $('#mainNav').removeClass();
        }
      }

      // if user is at the bottom of document show menu
      if ((scrolledWindowHeight) >= pageHeight) {
        $('#mainNav').removeClass('invisible');
      }

      // replace previous scroll position with new one
      previousScroll = currentScroll;
    }
  })

  // hides main menu popover if class "expanded"
  $('#mainNav').on('click touchstart', function(e) {
    showHideNav();
    e.preventDefault();
  })

  // clicking anywhere inside navigation or heading won’t close main menu popover
  $('#navigation section, #navigation .heading, #navigation .subheading, #navigation .menu_label').on('click touchstart', function(e){
      e.stopPropagation();
  })

  // checks if navigation is enabled
  function showHideNav() {
    if ($('#mainNav').hasClass('expanded')) {
      hideNav();
    } else {
      showNav();
    }
  }

  // better handling of scrollbars in Windows
  var windows = false;
  if (navigator.appVersion.indexOf("Win")!=-1) windows = true;

  // shows the main menu popover
  function showNav() {
    $('#mainNav').removeClass('invisible').addClass('expanded');
    window.setTimeout(function(){$('#container').addClass('blurred');}, 40);
    $('#navigation a').attr('tabindex', ''); // links inside navigation should be TAB selectable
    $('#fullWidthContainer').removeClass('notScrolling');

    // better handling of scrollbars in Windows
    if (windows) {
      $('body').width($('body').width());
      $('body').css('overflow', 'hidden');
    } else {
      window.setTimeout(function(){$('body').addClass('noScroll');}, 200); // Firefox hack. Hides scrollbar as soon as menu animation is done
    }
  }

  // hides the main menu popover
  function hideNav() {
    $('#container').removeClass('blurred');
    $('#mainNav').addClass('transition');
    window.setTimeout(function(){$('body').removeClass('noScroll').removeAttr('style');}, 50); // allow animations to start before removing class (Firefox)
    window.setTimeout(function(){$('#mainNav').removeClass('transition').removeClass('expanded');}, 200);
    $('.menuIcon').blur(); // removes tab focus
    $('#fullWidthContainer').addClass('notScrolling');
  }

  // on site link click show loader
  $('.siteLinks a').on('click touchstart', function() {
    $(this).addClass('spinnerSmall');
  })



  var adjustedScreenBefore = false;

  // when window resized, adjust height of photo div
  function adjustHeight() {
    if (adjustedScreenBefore) {
      // do nothing. We adjusted params already
    } else {
      var width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
          height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

      // adjusts top padding of text depending on window width
      if (width < 768) {
        padding = height / 1.9;
        height = height + 30; // for iPhone extra height because we’re hiding address bar
      } else if (width > 767 && width < 1024) {
        padding = height / 2.2;
      } else if (width > 1024 && width < 1450) {
        padding = height / 2.85;
      } else if (width > 1450 && width < 1920) {
        padding = height / 2.4;
      } else {
        padding = height / 2.2;
      }

      // if (height < 480) {
      //   padding = height / 2.2;
      //   height = height + 30; // for iPhone extra height because we’re hiding address bar
      // } else if (height > 480 && height < 767) {
      //   padding = height / 2.3;
      // } else if (height > 767 && height < 900) {
      //   padding = height / 2.8;
      // } else if (height > 900 && height < 1080) {
      //   padding: height / 2.4;
      // } else if (height > 1080 && height < 1300) {
      //   padding: height / 2.2;
      // } else {
      //   padding = height / 2;
      // }

      $("#intro, #post section").css("height", height);
      $("#intro div, #post .cover").css("padding-top", padding);
      $(".bg-image").css('top', padding - 430);

      // $("#intro, #post section").css("height", height);

      // var introHeight = ((height - $("#intro div").height()) / 2) + 10;
      // $('#intro div').css("padding-top", introHeight);

      // var coverHeight = (height - $("#post .cover").height()) / 2);
      // $('#post .cover').css("padding-top", coverHeight);


      // if screen height is smaller than menu height, hide headings of menu (less info)
      if (height > 670 && height < 750) {
        $('#navigation').addClass('reduceNavHeight').removeClass('reduceMoreNavHeight');
      } else if (height > 620 && height < 670) {
        $('#navigation').addClass('reduceMoreNavHeight').removeClass('smallestNavHeight');
      } else if (height < 620) {
        $('#navigation').addClass('smallestNavHeight');
      } else {
        $('#navigation').removeClass();
      }
      adjustedScreenBefore = true;
    }
  }

  // on window resize, call function to resize photo div
  $(window).resize(function() {
    adjustedScreenBefore = false; // remove flag
    adjustHeight();
  })



  var container,
      scrolling = false;

  // on blog section click, opens section, removes all others, increases size of illustration, and makes it full screen
  $('#fullWidthContainer section').on('click touchend', function(e) {
    container = $(this);

    if (e.metaKey || e.ctrlKey || e.shiftKey) {
      // do nothing (user opened link in new tab/window)
    } else {
      openBlogSection();
    }
  })

  // if scrolling, don't animate the opening of blog section (touch issues)
  $('#fullWidthContainer section').on('touchmove', function(e){
    scrolling = true;
  });
  // if finished scrolling, animate the opening of blog section
  $('#fullWidthContainer section').on('touchend', function(e){
    scrolling = false;
  });



  // animates the opening of blog section
  function openBlogSection() {
    if (scrolling != true) {
      var positionScreen = container.offset().top - $(window).scrollTop(); // finds the position of section relative to screen
      container.addClass('magnify');
      $('#fullWidthContainer').addClass('clickedBlogLink');
      $('body').addClass('noScroll');
      $('.magnify').css('transform', 'translateY(-'+ positionScreen + 'px)');
      window.setTimeout(function(){$('.spinner').removeClass('hidden');}, 500);
    }
  }



  // hides the opened blog section (checks if on blog page)
  $(document).on("page:restore", function() {
    var currentPage = window.location.pathname;
    if ((currentPage === '/blog.html') || (currentPage === '/blog/') || (currentPage == '/blog')) {
      $('.magnify').removeAttr('style');
      $('.spinner').addClass('hidden');
      $('body').removeClass('noScroll');
      $('#fullWidthContainer').removeClass('clickedBlogLink');
      container.removeClass('magnify');
    }

    $('.animateOnFirstLoad').removeClass('animateOnFirstLoad');
  })

  // disable right click on photos
  $('#slider img').bind('contextmenu', function(e) {
    return false;
  })



  // adds class to current visible slide so only that slide will be blurred
  $('.next').click(function() {
    $('.swipe-wrap div').removeClass('slideVisible');
    $('.swipe-wrap div').eq(mySwipe.getPos()).addClass('slideVisible');
    $('.slideVisible').next().addClass('preload');
    preloadImage();
  })

  // adds class to current visible slide so only that slide will be blurred
  $('.previous').click(function() {
    $('.swipe-wrap div').removeClass('slideVisible');
    $('.swipe-wrap div').eq(mySwipe.getPos()).addClass('slideVisible');
    $('.slideVisible').prev().addClass('preload');
    preloadImage();
  })



  // preloads the next image
  function preloadImage() {
    var image = $('.preload img');
    image.attr("src", image.attr("data-src"));
    image.removeAttr("data-src");
    image.parent().removeClass('preload');
  }

  // animates the twitter share button
  $('.twitter_button').hover(function() {
    $(this).addClass('pulse');
  }, function() {
    $(this).removeClass('pulse');
  })

  // preload the next article if hovered
  $('#readMore').hover(function() {
    $(this).find('link').attr('rel', 'prerender');
  })



  // if window in focus only allow keyboard shortcuts
  var windowFocus = true;
  $(window).focus(function() {
    windowFocus = true;
  }).blur(function() {
    windowFocus = false;
  });

  // keyboard shortcuts
  $(document).keydown(function(e) {
    if (windowFocus) {
      // menu accessible via TAB as well
      if ($("#mainNav .menuIcon").is(":focus")) {
        // if ENTER/SPACE show/hide menu
        if (e.keyCode === 13 || e.keyCode === 32) {
          showHideNav();
          e.preventDefault();
        }
      }

      if (e.metaKey || e.ctrlKey || e.shiftKey) {
        // do nothing (user using function keys)
      } else {
        // if ESC show/hide menu
        if (e.keyCode === 27 || e.keyCode === 77) {
          // if ($('body a, body span').is(":focus")) {
          // } else {
            showHideNav();
            e.preventDefault();
          // }
        }
        // if left arrow show previous slide
        if (e.keyCode === 37) {
          if (typeof mySwipe != 'undefined')
            if (!$('body').hasClass('noScroll'))
              $(".previous").trigger("click");
        }

        // if right arrow show next slide
        if (e.keyCode === 39) {
          if (typeof mySwipe != 'undefined')
            if (!$('body').hasClass('noScroll'))
              $(".next").trigger("click");
        }

        // if H navigate to "Home"
        if (e.keyCode === 72) {
          window.location = $(".home").attr("href");
        }

        // if W navigate to "Work"
        if (e.keyCode === 87) {
          window.location = $(".work").attr("href");
        }

        // if B navigate to "Blog"
        if (e.keyCode === 66) {
          window.location = $(".blog").attr("href");
        }

        // if P navigate to "Photos"
        if (e.keyCode === 80) {
          window.location = $(".photos").attr("href");
        }

        // if L navigate to "Lab"
        if (e.keyCode === 76) {
          window.location = $(".lab").attr("href");
        }

        // if E navigate to "Email"
        if (e.keyCode === 69) {
          window.location = $(".email").attr("href");
        }
      }
    }
  })
})
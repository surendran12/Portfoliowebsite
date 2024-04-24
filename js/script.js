/* full page carousel */
$(document).ready(function () {
    $(".carousel").carousel({
      pause: "false"
    });
    $(".carousel").css({
      margin: 0,
      width: $(window).outerWidth(),
      height: $(window).outerHeight()
    });
    //$('.carousel-inner').css({'z-index': 0});
    $(".carousel .item").css({
      position: "fixed",
      width: "100%",
      height: "100%"
    });
    $(".carousel-inner div.itemimg").each(function () {
      varimgSrc = $(this).attr("src");
      $(this)
        .parent()
        .css({
          background: "url(" + imgSrc + ") center center no-repeat",
          "-webkit-background-size": "100% ",
          "-moz-background-size": "100%",
          "-o-background-size": "100%",
          "background-size": "100%",
          "-webkit-background-size": "cover",
          "-moz-background-size": "cover",
          "-o-background-size": "cover",
          "background-size": "cover"
        });
      $(this).remove();
    });
    $(window).on("resize", function () {
      $(".carousel").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      });
    });
  });


  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) { 
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
  
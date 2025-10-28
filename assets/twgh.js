$(window).ready(function() {

  $(".preloaderWindow .logo").addClass("show");
  $(".preloaderWindow .line").addClass("show");
  $(".preloaderWindow .text").addClass("show");

  $(window).resize();

  $('#fullpage').fullpage({
    autoScrolling: false,
    fitToSection: false,
    menu: '#menu',
    anchors: [
      'homePage', 
      'schedulePage', 
      'whatPage', 
      'applicationPage', 
      'donationPage', 
      'igPage',
      'sponsorsPage'
    ],
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      // if (index == 1 && direction == 'down') {
      //   $('.hamburger').addClass("active");
      // } else if (index == 2 && direction == 'up') {
      //   $('.hamburger').removeClass("active");
      // }
    }
  });

  var body = $("html, body");

  $('.scrollDown a').click(function() {
    $.fn.fullpage.moveSectionDown();
  });

  // mobile menu

  $(".hamburger").click(function() {
    $(".menuMobilePopup").show(0);
    $(".menuMobilePopup").animate({
      "opacity": 1
    }, 0);
    $(".menuMobilePopupWindow").delay(0).addClass("show");
  });

  $(".menuMobilePopup a").click(function() {
    $(".menuMobilePopupWindow").removeClass("show");
    $(".menuMobilePopup").delay(200).animate({
      "opacity": 0
    }, 200);
    $(".menuMobilePopup").delay(200).hide(0);
  });

  // quote slider

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.quoteSlider').slick('slickGoTo', slideno - 1);
  });


});

$(window).on('load', function() {

  $(".preloaderWindow .logo").removeClass("show");
  $(".preloaderWindow .line").removeClass("show");
  $(".preloaderWindow .text").removeClass("show");
  $(".preloaderWindow").addClass("hide");

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  // $(function () {
  //   $('[data-toggle="popover"]').popover()
  // })
  $(function(){
    $("[data-toggle=popover]").popover({
      html : true,
      trigger: 'click',
      content: function() {
        var content = $(this).attr("data-popover-content");
        return $(content).children(".popover-body").html();
      },
      title: function() {
        var title = $(this).attr("data-popover-content");
        return $(title).children(".popover-heading").html();
      },
    }).on("show.bs.popover", function(e){
      // hide all other popovers
      $("[data-toggle=popover]").not(e.target).popover("hide");
    });;
    
  });

  var imageClass = "#instafeed img";
  $(window).on("resize", function() {
    calImageSize(imageClass);
  });
  calImageSize(imageClass);

});

function calImageSize(imageSelector) {
  $(imageSelector).width(
    $(imageSelector).parent().width()
  );
  $(imageSelector).height($(imageSelector).width());
}

function popupCenter(url, title, w, h) {
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

  width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;  
  height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;  

  var left = ((width / 2) - (w / 2)) + dualScreenLeft;  
  var top = ((height / 2) - (h / 2)) + dualScreenTop;  
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);  

  if (window.focus) {  
    newWindow.focus();
  }
}
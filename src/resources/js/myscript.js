

/*----------------------------------------*/
/* Tab Into
/*----------------------------------------*/


$(function(){
  $('.btn-circle').on('click',function(){
    $('.btn-circle.btn-success').removeClass('btn-success').addClass('btn-default');
    $(this).addClass('btn-success').removeClass('btn-default').blur();
  });
 
  $('.next-step, .prev-step').on('click', function (e){
    var $activeTab = $('.tab-pane.active');
 
    $('.btn-circle.btn-success').removeClass('btn-success').addClass('btn-default');
 
    if ( $(e.target).hasClass('next-step') )
    {
       var nextTab = $activeTab.next('.tab-pane').attr('id');
       $('[href="#'+ nextTab +'"]').addClass('btn-success').removeClass('btn-default');
       $('[href="#'+ nextTab +'"]').tab('show');
    }
    else
    {
       var prevTab = $activeTab.prev('.tab-pane').attr('id');
       $('[href="#'+ prevTab +'"]').addClass('btn-success').removeClass('btn-default');
       $('[href="#'+ prevTab +'"]').tab('show');
    }
  });
 });


 
/*----------------------------
  Vertical-Menu Activation
    -----------------------------*/

  $('.categorie-title').on('click', function () {
        $('.vertical-menu-list').slideToggle();
  });

  $('.control-menu').on('click', function () {
    $('.menu-sub-hidden').slideToggle();
  });



  

  /*------------------------------
  Mobil Menu
  ------------------------------*/

  $(function() {
  $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
  });

  /*------------------------------
  Quantity Counter
  ------------------------------*/

  $('.pro-quantity').append('<a href="#" class="inc qty-btn">+</a>');
  $('.pro-quantity').append('<a href="#" class= "dec qty-btn">-</a>');
  $('.qty-btn').on('click', function (e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find('input').val(newVal);
  });


$(".chosen-select").chosen();

});
      

/*------------------------------
  Gallery
  ------------------------------*/
 
$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
    
    $(this).addClass('transition');
  }, function(){
        
    $(this).removeClass('transition');
  });


});



/*----------------------------------------*/
/* Product Activision
/*----------------------------------------*/
$(".product-active").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplay: false,
  autoplayTimeout: 5000,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  item: 5,
  responsive: {
    0: {
        items: 1
    },
    480: {
        items: 2
    },
    768: {
        items: 3
    },
    992: {
        items: 4
    },
    1200: {
        items: 5
    }
  }
});

/*----------------------------------------*/
/* scrollUp
/*----------------------------------------*/

$.scrollUp({
  scrollImg: true
});

/*----------------------------------------*/
/* Page Loader
/*----------------------------------------*/
// Animate loader off screen
function myfun(){
  var test = setTimeout(loadPage, 1000);
}
function loadPage(){
  document.getElementById("wrapper").style.display = "block";
  document.getElementById("loader").style.display = "none";
}

/*
Splitting({
	target: "[data-rows], [data-columns], [data-image]",
	by: "cells",
	image: true
});*/



// $(window).scroll(function(){
//   if($(this).scrollTop()>100){
//     $('.main-hader').addClass("sticky");
//   }else{
//     $('.main-hader').removeClass("sticky");
//   }
// });





$(document).ready(function(){
  $('.icon-carousel').owlCarousel({
    margin:10,
    nav:false,
    loop:false,
    autoWidth:true,
    autoHeight: true,
    items:4,
    dots:false,
    
    responsive:{
      0: {
        items: 1
      },
      480: {
          items: 2
      },
      768: {
          items: 3
      },
      992: {
          items: 4
      },
      1200: {
          items: 7,
      }
    }
  })
});


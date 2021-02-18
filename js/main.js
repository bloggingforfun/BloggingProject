const responsive = {
    0 : {
        items:1
    },
    320 : {
        items:1
    },
    560 : {
        items:2
    },
    960 : {
        items:3
    },
    1056 : {
        items:4
    }
}
$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');


    /**Click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
    //owl-caruosel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive : responsive
    });
    //Scrolling up from bottom command
    $('.move-up span').click(function(){
        $('html,body').animate({
        scrollTop:0
        },1000)
    //Scrolling down from top command
    })
    $('.move-down span').click(function(){
        $('html,body').animate({
        scrollMiddle:0
        },1000)
    })
    AOS.init();

});
$(document).ready(function(){
    $(".link1").click(function(){
        $(".who_am_i").addClass("active");
    });


    $(".contact_me").click(function(){
        $(".contactMe").addClass("active");
    });


    $(".portfolio").click(function(){
        $(".portfolio_link").addClass("active");
    });




    $(".back_to_main").click(function(){
        $(".who_am_i").removeClass("active");
        $(".contactMe").removeClass("active");
        $(".portfolio_link").removeClass("active");
    });


    $(".hover3d").hover3d({
        selector: ".hover3d-child",
        invert: true
    });



    let menuToggle = document.querySelector('.menuToggle');
    let nav = document.querySelector('nav');
    menuToggle.onclick = function(){
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    }

});
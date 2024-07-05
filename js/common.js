$(function(){

    

    $(".wrap-1 .toggle").click(function(){
        $(this).toggleClass("active");
        $(".wrap-1 .collapse").slideToggle();
    });

    
    if (screen.width < 768) {
        $(".wrap-1 .collapse a").click(function(){
            $(".wrap-1 .collapse").slideUp(); 
            $(".wrap-1 .toggle").removeClass("active");
        });
    }



    $(".wrap-7 .tabs a").click(function(e){
        e.preventDefault();
        $(".wrap-7 .tabs a").removeClass("active");
        $(this).addClass("active");

        if($(this).text()=="ALL"){
            $(".wrap-7 .all").fadeIn();
        }

        if($(this).text()=="HTML CSS & JS"){
            $(".wrap-7 .psd-html").fadeIn();
            $(".wrap-7 .js").fadeOut(0);
            $(".wrap-7 .bootstrap").fadeOut(0);
            $(".wrap-7 .fetch").fadeOut(0);
            $(".wrap-7 .sass").fadeOut(0);
        }
        else if($(this).text()=="HTML SASS & JS"){
            $(".wrap-7 .psd-html").fadeOut(0);
            $(".wrap-7 .bootstrap").fadeOut(0);
            $(".wrap-7 .js").fadeOut(0);
            $(".wrap-7 .fetch").fadeOut(0);
            $(".wrap-7 .sass").fadeIn();
         }
        else if($(this).text()=="FETCH API"){ 
            $(".wrap-7 .psd-html").fadeOut(0);
            $(".wrap-7 .bootstrap").fadeOut(0);
            $(".wrap-7 .sass").fadeOut(0);
            $(".wrap-7 .js").fadeOut(0);
            $(".wrap-7 .fetch").fadeIn();
        }
        else if($(this).text()=="JAVASCRIPT"){
            $(".wrap-7 .psd-html").fadeOut(0);
            $(".wrap-7 .sass").fadeOut(0);
            $(".wrap-7 .fetch").fadeOut(0);
            $(".wrap-7 .bootstrap").fadeOut(0);
            $(".wrap-7 .js").fadeIn();
         }
         else if($(this).text()=="BOOTSTRAP"){
            $(".wrap-7 .sass").fadeOut(0);
            $(".wrap-7 .js").fadeOut(0);
            $(".wrap-7 .psd-html").fadeOut(0);
            $(".wrap-7 .fetch").fadeOut(0);
            $(".wrap-7 .bootstrap").fadeIn();
         }
    });


});
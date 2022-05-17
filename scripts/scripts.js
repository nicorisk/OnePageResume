//Burger menu (ne fonctionne qu'en version mobile car pas besoin en version desktop)
$(document).ready( function() {
    $('.btn-nav').click( function() {
        $('#menu-nav').slideToggle(400).toggleClass('ouvert');
    });
});
//Effet Lazy load, les classes utilisées sont dans le début du Main (dans le fichier style.css)
$(document).ready(function(){
    $('.apparition, .apparitionTitre').addClass('invisible');


    $(window).scroll(function(){
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        $('.invisible').each(function(){
            if($(this).offset().top < scrollTop + windowHeight*0.75){
                $(this).removeClass('invisible');
            }
        });
    });
});
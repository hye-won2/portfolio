
$(document).ready(function() {
    $(window).scroll( function(){
			
        $('figure.imageblock,#tt-body-page figure.imageblock').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},700);
            }
            
        }); 
    });
});
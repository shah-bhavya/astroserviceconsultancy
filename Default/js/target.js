jQuery('.navigation a').on( 'click', function(event) {
	var target 	= jQuery( this );
    var element = target.attr('href');
    var scrollLink = $('.scroll');
    jQuery('.navigation a').removeClass('active')
    target.addClass('active');

    jQuery("body, html").animate({ 
      scrollTop: jQuery( element ).offset().top - 90	
    }, 1800);

});



//$(document).ready(function () {
//    $('.nav li a').click(function (e) {

//        $('.nav li a.active').removeClass('active');

//        var $parent = $(this).parent();
//        $parent.addClass('active');
//        e.preventDefault();
//    });
//});

//$(document).ready(function()
//{
//    var scrollLink = $('.scroll');

//    //smooth scroll
//    scrollLink.click(function(e)
//    {
//        e.preventDefault();
//        $('body,html').animate({
//            scrollTop: $(this.hash).offset().top - 90
//        }, 1800)
//    })
//})

$(window).scroll(function () {

    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top

        if( sectionOffset <= scrollbarLocation)
        {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    })
})

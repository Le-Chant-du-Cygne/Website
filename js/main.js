function resizeTitle()
{   
    var docHeight = $(window).height();
    var titleHeight = $("#title").height();
    var padding = (docHeight * 0.5) - (titleHeight * 0.5);
    $("#title-banner").css({"padding-top":padding, "padding-bottom":padding});  
}
$(window).ready(function(){
    resizeTitle();
    $("#container").css({"visibility":"visible"});   
});
$( window ).resize(resizeTitle);

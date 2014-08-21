$(document).ready(function(){
    
  $("#video-1").click( function() {
    $("#video-1").html("<br><iframe width=\"540\" height=\"360\" src=\"//www.youtube.com/embed/6Fael8CzfxU\" frameborder=\"0\" allowfullscreen></iframe>");
  }) ;
  
  $("#video-2").click( function() {
    $("#video-2").html("<br><iframe width=\"540\" height=\"360\" src=\"//www.youtube.com/embed/8NTx8UJVX3A\" frameborder=\"0\" allowfullscreen></iframe>");
  }) ;
  
}) ;

var jq = jQuery.noConflict();
jq(function() {
    var top = jq('.left-div').offset().top - parseFloat(jq('.left-div').css('marginTop').replace(/auto/, 0));
    var footTop = jq('.footer-ul').offset().top - parseFloat(jq('.footer-ul').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - jq('.left-div').outerHeight();

    jq(window).scroll(function(evt) {
        var y = jq(this).scrollTop();
        if (y > top) {
            if (y < maxY) {
                jq('.left-div').addClass('fixed').removeAttr('style');
            } else {
                jq('.left-div').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            jq('.left-div').removeClass('fixed');
        }
    });
});

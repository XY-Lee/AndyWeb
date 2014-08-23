$(document).ready(function(){
    
  $("#video-1").click( function() {
    $("#video-1").html("<br><iframe width=\"540\" height=\"360\" src=\"//www.youtube.com/embed/6Fael8CzfxU\" frameborder=\"0\" allowfullscreen></iframe>");
  }) ;
  
  $("#video-2").click( function() {
    $("#video-2").html("<br><iframe width=\"540\" height=\"360\" src=\"//www.youtube.com/embed/8NTx8UJVX3A\" frameborder=\"0\" allowfullscreen></iframe>");
  }) ;
  // 滑鼠碰上去會出事
  var ImgOriginal = null ;
  $(".title-img").mouseenter( function() {
    // $( this ).animate({ height: '+=10px' }) ;  改變大小animate(styles,speed,easing,callback)
    ImgOriginal = $( this ).attr( 'src' ) ;    // 取得原圖的值
    $( this ).attr({ src: ImgOriginal.substring( 0, ImgOriginal.length - 4 ) + "-change.png" }) ;  // 換圖片 attr({屬性:數值})
  }) ;
  
  $(".title-img").mouseleave( function() {
    $( this ).attr({ src: ImgOriginal }) ;
  }) ;
  // 滑鼠碰上去會出事結束
  
  

}) ;

alert("linked");
//$(function () {
//    var header = $(".affix");
//    $(window).scroll(function () {
////        console.log("scroll");
//        
//        var scroll = $(window).scrollTop();
//        $("#about").hide();
//        if(scroll==$("#projects").offset().top+$("#projects").outerHeight()-window.innerHeight){
//            $("#about").show();
//            
//            console.log("fixed");
////            header.removeClass('set').addClass("fixed");
//        }
//        else if(scroll>$("#projects").offset().top+$("#projects").outerHeight()-window.innerHeight){
//            console.log("set");
////            header.removeClass("fixed").addClass('set');
//        
//        }
//    });
//});

//$(function () {
//  $(window).mousewheel(function(event, delta) {
//    console.log(event.deltaX, event.deltaY, event.deltaFactor);
//      this.scrollLeft -= (delta * 30);
//      event.preventDefault();
//  });
//});

function horizontal(){
  $('main').css({ overflowY:"hidden", overflowX:"scroll" });
  $('main').on('mousewheel', function(event) {
    this.scrollLeft -= (event.deltaFactor * event.deltaY);
    event.preventDefault();
  });
}
window.onload=function(){
     horizontal();
};
//$(window).on('load', function() {
//   //Set scroll
//   horizontal();
//}
//             );

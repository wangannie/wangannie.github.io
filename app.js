$(document).ready(function(){ 
    var affixT, elSet, winT, winH, projectsW;
    if ($('#projects').length>0){
        var affixT = $('.affix').offset().top - $(window).scrollTop(),
        elSet = !1;
        sizeProjects();
        $(window).on('scroll', scrollPage);
        $(window).on('resize', sizeProjects);
    }
    
    $(window).scroll(function() {
        var vScroll = $(window).scrollTop();
        if ($(this).scrollTop() >= 50) {
            $('.return-to-top').fadeIn(200); 
        } else {
            $('.return-to-top').fadeOut(200);
        }
    });
    $('.return-to-top').click(function() { 
        $('body,html').animate({
            scrollTop : 0 
        }, 500);
    });
    
    function sizeProjects(){
        if (639 >= $(window).width()){
            return $('.fake-holder').css({
                "padding-bottom": '0px'
            }),$('.projects').css({
                        width: '100%'
                    }), !1;
            return false;
        }
        var projectsW = 0;
        $('#projects').children().each(function(i, el) {
                        projectsW += $(el).outerWidth(!0)
        });
        var fakeH = $('#projects').outerWidth() + $('#projects').outerHeight();
        $('.fake-holder').css({
                        "padding-bottom": fakeH + 'px'
        });
    }
    function scrollPage(){
            projectsW = 0;
            $('#projects').children().each(function(i, el) {
                projectsW += $(el).outerWidth(!0)
            });
            winT = $(window).scrollTop(),
            winH = $(window).height();
            if (639 >= $(window).width()){
                return $('#projects').css({
                            "-webkit-transform": 'translate3d(0px,0,0)',
                            "-moz-transform": 'translate3d(0px,0,0)',
                            "-ms-transform": 'translate3d(0px,0,0)',
                            "-o-transform": 'translate3d(0px,0,0)',
                            transform: 'translate3d(0px,0,0)'
                        }), $('.affix').removeClass('fixed'), $('.affix').removeClass('set'), elSet = !1, $('.affix').css({
                            top: '0px'
                        });
                $('.fake-holder').css({
                    "padding-bottom": '0px'
                }),$('.projects').css({
                            width: '100%'
                        }), !1;
                return false;
            }
            if (winT >= affixT) {
                var delta = winT - affixT;
                $(".affix").addClass('fixed'), elSet || $('#projects').css({
                    "-webkit-transform": 'translate3d(-' + delta + 'px,0,0)',
                    "-moz-transform": 'translate3d(-' + delta + 'px,0,0)',
                    "-ms-transform": 'translate3d(-' + delta + 'px,0,0)',
                    "-o-transform": 'translate3d(-' + delta + 'px,0,0)',
                    transform: 'translate3d(-' + delta + 'px,0,0)'
                });
                if((winT) >= projectsW){
                    $(".affix").removeClass('fixed');
                    $(".affix").addClass('set');
                    !elSet && (elSet = !0, $(".affix").css({
                        top: winT + 'px'
                    }));      
                }else{
                    $(".affix").addClass('fixed'), $(".affix").removeClass('set');
                    elSet = !1;
                    $(".affix").css({top: '0px'});
                }
            } else {
                $(".affix").removeClass('fixed'), elSet || $('#projects').css({
                "-webkit-transform": 'translate3d(0px,0,0)',
                "-moz-transform": 'translate3d(0px,0,0)',
                "-ms-transform": 'translate3d(0px,0,0)',
                "-o-transform": 'translate3d(0px,0,0)',
                transform: 'translate3d(0px,0,0)'
            })
            }
    }
});


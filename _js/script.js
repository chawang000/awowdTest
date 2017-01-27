var menuColorToWhite = false;
var menuIsLine = false;
var menuButton = $('#menu_icon');
var videoSwitchButton = $('.button_big');
var videoButton = $('#video_button');
var menuLogo = $('#menu_logo');
var menuHeight;
var lastScrollTop = 0;

$(document).ready(function(){


    // var menuColorToWhite = true;

    menuLogo.stop(true,true).mouseenter(function(){
        menuLogoAnimation();
    });

    menuButton.click(menuNavAnimation());





    // $("#content_title").on("click", _.throttle(headerScrollPause, 100));

    loaderLoad();

    videoSwitchButton.click(function(){
        var videoSrc = $(this).attr("data-videoSrc");
        $("#bg_video video source").attr("src",videoSrc);
        $("#bg_video video")[0].load();
        $("#bg_video video").css("width","100%");

        // console.log(videoBg);
    });

    window.onscroll = function (e) {
        var menuH = $('#menu_top').height();
        // var mouseTop = $(this).scrollTop();
        var contentH = $('#content').scrollTop();
        var HeaderCurrentH = contentH - menuH;

        var st = $(this).scrollTop();
        if (st > lastScrollTop){
           // downscroll code
                menuScrollDown();
            } else {
              // upscroll code
                menuScrollUp();
            }

        lastScrollTop = st;
        headerScrollPause();//TODO function name should be changed


        // m.throttle(headerScrollPause, 100);
        // headerScrollPause(mouseTop);
        // if (menuH <= mouseTop) {
        //     headerScrollPause(mouseTop);
        //     console.log("stop!");
        // }
    }

    /* Open when someone clicks on the span element */

});

function video_bg_switch(){
    var videoSrc = $(this).parent();
    // console.log(videoSrc);
}

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    // ELEMENT scroll top

    function headerScrollPause() {

        // TITLE HEADER
        var target = $(this);
        // console.log(target);
        var mouseTop = target.scrollTop();
        var titleH = $('#content').css('top');
        var scrollableHeader = $("#content_title");
        var scrollableHeaderP = $("#content_title p");
        var scrollableHeaderH = $("#content_title h1");

        var menuLogoSVG = $('#menuLogo');

        // NAV

        var phase1 =  mouseTop - 650 <= 0;
        // PHASE1 distance (using 255 here) should be based on window hight.
        if(phase1){

            if(menuColorToWhite){
                console.log('turn white');
                document.getElementById("menuLogo").style.stroke = ('rgb(255,255,255)');
                $('#menu_top').css({'backgroundColor':'transparent'});
                $("#nav_icon").removeClass('black');
                menuColorToWhite = false;
            }
                if(mouseTop - 255 <= 0){
                    scrollableHeader.css({
                        'transform':'translate( '+ mouseTop * 0+'px, ' + mouseTop * 0.5 + 'px)'});
                    scrollableHeaderH.css({
                        'opacity':(200 - mouseTop)*0.01});
                    scrollableHeaderP.css({
                        'color':'rgb('+ (255 - mouseTop) + ', '+ (255 - mouseTop) + ' , ' + (255 - mouseTop) + ')',
                        'transform':'translate( '+ mouseTop * 1.6+'px, ' + mouseTop * 1.1 + 'px)'
                        // 'top':mouseCurrentH + 'px !important;'
                    });
                }
        }else{
            if(menuColorToWhite == false){
                console.log('turn black');
                // menuLogoSVG.style.fill('red');
                document.getElementById("menuLogo").style.stroke = ('rgb(0,0,0)');
                $('#menu_top').css({'backgroundColor':'#fff'});
                $("#nav_icon").addClass('black');
                menuColorToWhite = true;
            }
            scrollableHeaderP.css({
                'color':'rgb(0,0,0)',
                'opacity':'1'
            });
            scrollableHeaderH.css({
                'opacity':'0'});
        }


        // console.log(scrollableHeaderP.css);
    }

    function loaderOut(){

        var loader = $("#loader_wrapper");
        $('#loader').animate({opacity:'0'},200);
        loader.animate({width:'0',marginLeft:'100%'},500);
        console.log('loader out!!');
    }

    function loaderLoad(){
        $('#count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 400,
                easing: 'swing',
                step: function (now) {
                    var number = Math.ceil(now)
                    $(this).text(number + '%');
                    // $('#loaderBar').css({'width':number + '%'});
                    if(number >= 100){
                        loaderOut();
                    }
                }
            });
        });
    }

    function menuLogoAnimation(){//this is for hover
        var menuLogoSVGAni = document.getElementById("menuLogoSVGAni");
        // console.log(menuLogoSVGAni);
        menuLogoSVGAni.beginElement();
    }


    function menuLogoToLine(){//this function is controlling both logo and nav to line
        var menuLogoSVGAni = document.getElementById("menuLogoSVGtoLine");
        // console.log(menuLogoSVGtoLine);
        if(menuIsLine == false){
            menuLogoSVGtoLine.beginElement();
            menuNavToLine();
            menuOut();
            menuIsLine = true;
        }

    }

    function menuNavToLine(){
        $('#bar_2').animate({'top':'0px'},100);
        // console.log('nav bar to line');
    }

    function menuOut(){
        menuHeight = $('#menu_top').height();
        $('#menu_top').animate({opacity:'0','top':'-50px'},500,function(){
            $(this).css({'display':'none'});
        });
    }

    function menuScrollDown(){
        menuLogoToLine();
        // menuNavToLine();
    }

    function menuIn(){
        $('#menu_top').css({'display':'block'})
        $('#menu_top').animate({opacity:'1','top':'0px'},100);
    }

    function menuLineToLogo(){
        var menuLogoSVGAni = document.getElementById("menuLineToSVG");
        // console.log(menuLogoSVGtoLine);
        if(menuIsLine == true){
            menuLogoSVGAni.beginElement();
            menuLineToNav()
            menuIn();
            menuIsLine = false;
            // console.log('toLogo animated');
        }
    }

    function menuLineToNav(){
        $('#bar_2').animate({'top':'30px'},300);
    }

    function menuScrollUp(){
        menuLineToLogo();
    }

    function menuNavAnimation(){
        var menuIcon = document.querySelectorAll('.menu_icon');
        // console.log(menuIcon);
        for(var i = menuIcon.length-1; i>=0; i--){
            var toggle = menuIcon[i];
            toggleSwitch(toggle);
        }
        function toggleSwitch(toggle){
            toggle.addEventListener('click', function(){
                if(this.classList.contains('active') === true){
                    this.classList.remove('active');
                    closeNav();
                    // console.log('lalala');
                }else{
                    openNav();
                    this.classList.add('active');

                    // console.log('nonono');
                }
            })
        }
    }


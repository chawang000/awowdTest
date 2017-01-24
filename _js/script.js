



$(document).ready(function(){
    var menuButton = $('#menu_icon');
    var videoSwitchButton = $('.button_big');
    var videoButton = $('#video_button');
    var menuLogo = $('#menu_logo');

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
        headerScrollPause();
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
        var target = $(this);
        // console.log(target);
        var mouseTop = target.scrollTop();
        var titleH = $('#content').css('top');
        var scrollableHeader = $("#content_title");
        scrollableHeader.css({
            'transform':'translate(0px, ' + mouseTop * -0.1 + 'px)'
            // 'top':mouseCurrentH + 'px !important;'
        });
        console.log(titleH);
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
                duration: 4000,
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

    function menuLogoAnimation(){
        var menuLogoSVG = document.getElementById("menuLogoSVG");
        console.log(menuLogoSVG);
        menuLogoSVG.beginElement();
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





$(document).ready(function(){
    var menuButton = $('#menu_icon');
    var videoSwitchButton = $('.button_big');
    var videoButton = $('#video_button');

    // $("#content_title").on("click", _.throttle(headerScrollPause, 100));


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
            'transform':'translate(0px, ' + mouseTop/1.2 + 'px)'
            // 'top':mouseCurrentH + 'px !important;'
        });
        console.log(titleH);
    }




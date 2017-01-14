$(document).ready(function(){
    var menuButton = $('#menu_icon');
    var videoSwitchButton = $('.button_big');
    var videoButton = $('#video_button');

    videoSwitchButton.click(function(){
        var videoSrc = $(this).attr("data-videoSrc");
        $("#bg_video video source").attr("src",videoSrc);
        $("#bg_video video")[0].load();
        $("#bg_video video").css("width","100%");

        // console.log(videoBg);
    });


    // menuButton.click(function(){
    //     menu_in();
    // });
});

function menu_in(){
    console.log('clicked');
    var menuRight = $('#menu_list');
    var menuLeft = $('#menu_left');
    menuRight.animate({left:'-80%'},500);
    menuLeft.animate({backgroundColor: "rgba(0,0,0,0.95)"},500);
}

function video_bg_switch(){
    var videoSrc = $(this).parent();
    console.log(videoSrc);
}

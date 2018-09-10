$(function () {

    $('.login-show').click(function () {
        $('#login-modal').fadeIn();
    });
    $('.close-btn').click(function () {
        $('#login-modal').fadeOut();
    });

    /*投稿*/
    $("textarea").keyup(function () {
        var txtcount = $(this).val().length;
        $("#txtlmt").text(txtcount);
        if (txtcount == 0) {
            $("#txtlmt").text("0");
        }
        if (txtcount >= 130) {
            $("#txtlmt").css("color", "#d577ab");
        } else {
            $("#txtlmt").css("color", "#333");
        }
    });

    /*コメント投稿画面*/
    var count = 0;
    $('.empathy').click(function () {
        count++;
        $('#empathies').html('<div id="empathies">' + count + '</div>');
    });

    /*footer*/
    $('.home-btn').click(function () {
        $('.home-btn').css('border-bottom', 'solid 1px purple');
    });
});

$(() => refreshPosts());

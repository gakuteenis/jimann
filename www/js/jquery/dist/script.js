$(function () {

    $('.login-show').click(function () {
        $('#login-modal').fadeIn();
    });
    $('.close-btn').click(function () {
        $('#login-modal').fadeOut();
    });
    $('.submit-btn').click(function () {
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

    /*共感*/
    var empathyCount = 0;
    $(document).on('click','.empathy',function(){
        empathyCount++;
        $('#empathies').text(empathyCount);
        console.log('empathyCount')
    });

   /*うらやみ*/
   var envyCount = 0;
   $(document).on('click','.envy',function(){
       envyCount++;
       $('#envies').text(envyCount);
       console.log('envyCount')
   });
    /*footer*/
    $('.home-btn').click(function () {
        $('.home-btn').css('border-bottom', 'solid 1px purple');
    });
});

$(() => refreshPosts());

  

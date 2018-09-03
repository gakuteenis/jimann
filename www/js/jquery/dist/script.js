$(function() {

 $('.login-show').click(function(){
   $('#login-modal').fadeIn();
 });
 $('.close-btn').click(function(){
   $('#login-modal').fadeOut();
 });

/*投稿*/
$("textarea").keyup(function(){
    var txtcount = $(this).val().length;
    $("#txtlmt").text(txtcount);
    if(txtcount == 0){
      $("#txtlmt").text("0");
    }
    if(txtcount >= 130){
      $("#txtlmt").css("color","#d577ab");
    } else {
      $("#txtlmt").css("color","#333");
    }
  });

$(".submit-btn").click( function(){
  var text = $('.contribution-text').val();
　var txtcounts = $('textarea').val().length;
  if(txtcounts > 0 && txtcounts <= 140){
     $('#display-none').css('display','none');
     $('.home-main').prepend(
       '<div class="timeline-box" id="timelineboxs">'+
        '<img src="./img/IMG_4657.JPG" />'+
        '<div class="timeline-content">'+
        '<div class="user-name">名前</div>'+
         '<div class="timeline-text" id="content">'+text+'</div>'+
         '<div class="timeline-responce">'+
          '<div class="responce-box">'+
           '<div class="empathy">共感</div>'+
           '<div id="empathies">0</div>'+
          '</div>'+
          '<div class="responce-box">'+
           '<div class="">うらやみ</div>'+
           '<div class="">0</div>'+
          '</div>'+
          '<div class="responce-box">'+
           '<div class="envy">編集</div>'+
           '<div class="envies">削除</div>'+
          '</div>'+
         '</div>'+
        '</div>'+
       '</div>'
       );
      $('.timeline-box').fadeIn();
  }
  });

/*コメント投稿画面*/
var count = 0;
$('.empathy').click(function(){
  count ++;
  $('#empathies').html('<div id="empathies">'+count+'</div>');
});

/*footer*/
$('.home-btn').click( function(){
  $('.home-btn').css('border-bottom','solid 1px purple');
});
});
$(() => refreshPosts())

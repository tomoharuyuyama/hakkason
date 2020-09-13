$(document).ready(function(){
  $('.slider').slick({
    accessibility: true,
    arrows: false,
    autoplay: true, //自動再生
    dots: false, //ドットのナビゲーションを表示
    infinite: true, //スライドのループ有効化
    speed: 1000, //切り替えのスピード（小さくすると速くなる）
    fade: true, //フェードの有効化
  });
  });
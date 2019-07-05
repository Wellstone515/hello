$(function(){
  $(".btn").on("click", function(){
    $(".btn").removeClass("active");
    $(this).addClass("active");
  });

  $(".swich").on("click", function(){
    $(".box_square").toggleClass("blue");
  });
});

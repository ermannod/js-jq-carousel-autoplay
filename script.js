$(document).ready(function() {

  //action performed when clicking right arrow => moves to the next right image and next right bullet point




  var clock = setInterval(function(){
    var rightArrow = $("img.active");
    var nextImg = rightArrow.next("img");
    var currBull = $("i.active")
    var nextBull = currBull.next("i");
    if (nextImg.length == 0 ){
      nextImg = $(".first");
      nextBull = $(".first")
    }
    rightArrow.removeClass("active");
    nextImg.addClass("active");
    currBull.removeClass("active");
    nextBull.addClass("active");
  }, 3000);

  $(".right").click(function(){
    var rightArrow = $("img.active");
    var nextImg = rightArrow.next("img");
    var currBull = $("i.active")
    var nextBull = currBull.next("i");

    if (nextImg.length == 0 ){
      nextImg = $(".first");
      nextBull = $(".first")
    }
    rightArrow.removeClass("active");
    nextImg.addClass("active");
    currBull.removeClass("active");
    nextBull.addClass("active");
  })


  //action performed when clicking left arrow => moves to the previous left image and previous left bullet point
  $(".left").click(function(){
    var rightArrow = $("img.active");
    var nextImg = rightArrow.prev("img");
    var currBull = $("i.active")
    var nextBull = currBull.prev("i");
    if (nextImg.length == 0 ){
      nextImg = $(".last");
      nextBull = $(".last")
    }
    rightArrow.removeClass("active");
    nextImg.addClass("active");
    currBull.removeClass("active");
    nextBull.addClass("active");
  });

})

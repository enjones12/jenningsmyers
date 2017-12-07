$("#magic").hide();

$(document).ready(function(){
  $("button").click(function(){
    $("#magic").toggle();
  })
});



$(document).ready(function(){
    $(".card").mouseenter(function(){
      $(this).effect('bounce',{time: 1}, 2000);  
    })
});


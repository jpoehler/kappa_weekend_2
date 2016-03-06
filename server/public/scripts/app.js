$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        appendDom(data);
      }
    });
  });
        $("#kappaCarousel").carousel();
        $('.item').click(function(){
          $('#kappaCarousel').carousel('cycle');
        });
        $('.left').click(function(){
          $('#kappaCarousel').carousel('prev');
        });
        $('.right').click(function(){
          $('#kappaCarousel').carousel('next');
        });


function appendDom(data){
  var kappa = data.kappa;

  for (var i = 0; i < kappa.length; i++){

  $('#kappaCarousel').append('<div class="slide"></div>');
  var $el = $('#kappaCarousel').children().last();

  $el.append('<p> My name is ' + kappa[i].name + '</p>');
  $el.append('<p> I am from ' + kappa[i].location + '</p>');
  $el.append('<p> My spirit animal is: ' + kappa[i].spirit_animal + '</p>');
  $el.append('<p> I am awesome!!! This is what my chohort has to say about me... "' + kappa[i].shoutout + '" </p>');

  }
}

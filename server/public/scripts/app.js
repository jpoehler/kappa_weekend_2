var peopleData = [];
var globalIndex = 0;
var elementArray = [];

$(document).ready(function () {
  init();
});

function init(){
  $.ajax({
    type: 'GET',
    url: '/data',
    success: function(data){
      peopleData = data.kappa;
      createIndexNodes(peopleData);
      updateDom();
      updateHighlight();
    }
  });
}

//this button brings up the previous person
    $('.buttons').on('click', '.prev', function(){
        globalIndex--;
        if(globalIndex < 0){
          globalIndex = peopleData.length - 1;
             }

        updateDom();
        updateHighlight();
});

//This brings up the next person
      $('.buttons').on('click', '.next', function(){
          globalIndex++;
          if(globalIndex >= peopleData.length-1){
              globalIndex=0;
             }

          updateDom();
          updateHighlight();
        });

//This pushes data to the DOM
  function updateDom(){
      for (var i = 0; i < peopleData.length; i++){
        $('.people').empty();

        var person = peopleData[globalIndex];

        $('.people').append("<div></div>");
        var $el = $('.people').children().last();
        $el.append('<h5> My name is ' + person.name + '</h5>');
        $el.append('<p> I am from ' + person.location + '</p>');
        $el.append('<p> My spirit animal is: ' + person.spirit_animal + '</p>');
        $el.append('<p> I am awesome!!! This is what my chohort has to say about me... "' + person.shoutout + '" </p>');

  }
}

//This pulls up indicator buttons
  function createIndexNodes(array){
        for(var i = 0; i < array.length; i++){
          $('.carousel-indicators').append('<div class="index-point"></div>');
          var $el = $('.carousel-indicators').children().last();
          $el.data('index', i);
          elementArray.push($el);
        }
      }

      function updateHighlight(){
        for(var i = 0; i < elementArray.length; i++){
          var $el = elementArray[i];
          if(i == globalIndex){
            $el.addClass("index-hightlight");
          } else {
            $el.removeClass("index-hightlight");
          }
        }
      }

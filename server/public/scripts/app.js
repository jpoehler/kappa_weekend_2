$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){

//This pushes data to the DOM
        var kappa = [];

        for (var i = 0; i < data.kappa.length; i++){
        kappa.push(data.kappa[i]);
        }
        var i = 0;
        $('#carousel').children().remove();
        $('#carousel').append('<h5> My name is ' + data.kappa[i].name + '</h5>');
        $('#carousel').append('<p> I am from ' + data.kappa[i].location + '</p>');
        $('#carousel').append('<p> My spirit animal is: ' + data.kappa[i].spirit_animal + '</p>');
        $('#carousel').append('<p> I am awesome!!! This is what my chohort has to say about me... "' + data.kappa[i].shoutout + '" </p>');

     //this button brings the last person up
         $('.buttons').on('click', '.prev', function(){
             i--;
             if(i == -1){
                 i = data.kappa.length -1;
             }
             $('#carousel').children().remove();
             $('#carousel').append('<h5> My name is ' + data.kappa[i].name + '</h5>');
             $('#carousel').append('<p> I am from ' + data.kappa[i].location + '</p>');
             $('#carousel').append('<p> My spirit animal is: ' + data.kappa[i].spirit_animal + '</p>');
             $('#carousel').append('<p> I am awesome!!! This is what my chohort has to say about me... "' + data.kappa[i].shoutout + '" </p>');
         });

         //This brings up the next person
         $('.buttons').on('click', '.next', function(){
             i++;
             if(i>data.kappa.length-1){
                 i=0;
             }
             $('#carousel').children().remove();
             $('#carousel').append('<h5> My name is ' + data.kappa[i].name + '</h5>');
             $('#carousel').append('<p> I am from ' + data.kappa[i].location + '</p>');
             $('#carousel').append('<p> My spirit animal is: ' + data.kappa[i].spirit_animal + '</p>');
             $('#carousel').append('<p> I am awesome!!! This is what my chohort has to say about me... "' + data.kappa[i].shoutout + '" </p>');

         });
      //This pulls up indicator buttons
        $('.carousel-indicators').append('.active');

    }
});

});

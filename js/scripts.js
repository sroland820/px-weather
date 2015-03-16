// click button, capture zip field
$('#getZip').click(function() {
  
  // stop default, <form> from submitting data
  event.preventDefault();
  
  // get and store data
  var zip = $('#zip').val();
  console.log(zip);  
  
  // Get Weather
  $.simpleWeather({
    
    location: zip,  
    success: function(weather) {
      
      // get weather OK? 
      console.log(weather);

      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('.country').text(weather.country);
    
    },  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // clear zip
  $('#getWeather').val('');
  
});

// DO NOT ERASE ABOVE THIS//

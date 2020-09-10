
window.TrelloPowerUp.initialize({
  'card-badges': function(t, opts) {
     return t.card('coordinates')
    .then(function(card) {
      //console.log(card); 
      if(card.coordinates){
        return fetch('https://api.openweathermap.org/data/2.5/weather?lat='+card.coordinates.latitude+'&lon='+card.coordinates.longitude+'&APPID=484f1922ba04569cd7b257ada1cbc751')
        .then(function(response){
          return response.json();
        })
        .then(function(weatherData){
          const celsius = weatherData.main.temp - 273.15;
          return[
            {text: celsius.toFixed(1).toString()+' °C'},
            {icon:'https://openweathermap.org/img/w/'+weatherData.weather[0].icon+'.png'},   
            {text: weatherData.wind.speed.toString()+' m/s'}
          ];
        });
      }
       return[];
     }          
    )
  }
});

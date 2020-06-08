 window.onload=function() {
    stats();
   }
   function stats(){
       fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/177')
       .then(function(response){
          return response.json()
       })
       .then(function(data){
        console.log(data);
        let population=data.location.country_population;
        let confirmed=data.location.latest.confirmed;
        let deaths=data.location.latest.deaths;
        let update=data.location.last_updated; 
     
        document.getElementById('population').innerHTML=population;
        document.getElementById('confirmed').innerHTML=confirmed;
        document.getElementById('deaths').innerHTML=deaths;
        document.getElementById('update').innerHTML=update.substr(0,10);
       })
       .catch(function(error){
        console.log("error");
       })
   }
   setTimeout(stats(),43200000);
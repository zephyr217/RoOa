$( "#1" ).css( "border", "3px solid red" );
$.getJSON( "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&minmagnitude=5", function( data ) {
  $( "#result" ).html( JSON.stringify(data) );
 console.log(data)
 
  console.log(data.features["0"].properties.place)
 
 
     $(data.features).each(function (index, value){
         console.log(value.properties.place)
     });
  
}); 


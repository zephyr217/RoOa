$( "#1" ).css( "border", "3px solid red" );
$.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function( data ) {
  $( "#result" ).html( JSON.stringify(data) );
<<<<<<< HEAD
  console.log( data);
});

=======
 console.log(data)
 
 
     $(data.features).each(function (index, value){
         console.log(value.properties.place)
          var str = value.properties.place
          var LocationName=str.substring(str.lastIndexOf(",")+2,str.lastIndexOf(""));
          console.log(LocationName)
     });
    
  
}); 
>>>>>>> origin/master


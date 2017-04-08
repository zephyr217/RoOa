

$.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function( data ) {


  console.log(data);
  $(document).ready(function() {
        $('#search-button').click(function() {
           console.log ( $('#autocomplete-ajax').val())
        });
    });
 
     $(data.features).each(function (index, value){
         console.log(value.properties.place)
          var str = value.properties.place
          var LocationName=str.substring(str.lastIndexOf(",")+2,str.lastIndexOf(""))
          console.log(LocationName)
     });
    
  
}); 



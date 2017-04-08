
$.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson", function( data ) {
  console.log(data);
  $(document).ready(function() {
        $(data.features).each(function (index, value){
            console.log(value.properties.place)
            var str = value.properties.place
            var LocationName=str.substring(str.lastIndexOf(",")+2,str.lastIndexOf(""))
            $("#search-button").click(function() {
                var country = document.getElementById('autocomplete-ajax').value;
                if(country==LocationName)
                {
                    $('#country-table > tbody:last-child').append('<tr><td>'+country+'</td></tr>').html();
                }               
          });    
       });
    });
}); 




$.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson", function( data ) {
  console.log(data);
  $(document).ready(function() {
        $(data.features).each(function (index, value){
            console.log(value.properties.place)
            var str = value.properties.place
            var magn = value.properties.mag
            var UnixDate = new Date (value.properties.time)
            console.log(UnixDate)
            var LocationName=str.substring(str.lastIndexOf(",")+2,str.lastIndexOf(""))
<<<<<<< HEAD
            console.log(magn)
=======
            var d = new Date(value.properties.time)
            var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
>>>>>>> origin/master
            $("#search-button").click(function() {
                var country = document.getElementById('autocomplete-ajax').value;
                if(country==LocationName)
                {
                    $('#country-table > tbody:last-child').append('<tr><td>'+country+'</td><td>'+magn+'</td></tr>').html();
                }               
          });    
       });
    });
}); 



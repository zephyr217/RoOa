
$.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson", function( data ) {
  console.log(data);
  $(document).ready(function() {
        $(data.features).each(function (index, value){
            var str = value.properties.place
            var magn = value.properties.mag
            var LocationName=str.substring(str.lastIndexOf(",")+2,str.lastIndexOf(""))
            var d = new Date(value.properties.time)
            var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
            $("#country-table").find("tr").hide();
           
            $("#search-button").click(function() {
                var country = document.getElementById('autocomplete-ajax').value;
                $("#country-table").find("tr").show();
                if(country==LocationName)
                {
                    $('#country-table > tbody:last-child').append('<tr><td>'+country+'</td><td>'+
                    magn+'</td><td>'+datestring+'</td></tr>').html();
                }               
          });
             $("#searchInput").keyup(function() {
                var rows = $("#country-table").find("tr:gt(0)").hide();       
                var data = this.value.split(" ");
                $.each(data, function(i, v) {
                    rows.filter(":contains('" + v + "')").show();
	      });
       });
            $("#all-button").click(function() {   
                  $("#country-table").find("tr").show();             
                  $('#country-table > tbody:last-child').append('<tr><td>'+LocationName+'</td><td>'+
                    magn+'</td><td>'+datestring+'</td></tr>').html();          
          });     
       });
    });
}); 

$("#clear-button").click(function() {  
    alert("Just kidding. You have to press reload.")  
}); 
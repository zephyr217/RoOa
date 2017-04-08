$( "#1" ).css( "border", "3px solid red" );
$.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function( data ) {
  $( "#result" ).html( JSON.stringify(data) );
  console.log( data);
});

google.charts.load('current', {
   'packages':['geochart'],
 });
 google.charts.setOnLoadCallback(dashboard3);

 function dashboard3() {
   var data = google.visualization.arrayToDataTable([
     ['Pays', 'Effectifs'],
     ['Madagascar', 2],
     ['Mali', 3],
     ['Egypt', 4],
     ['Nigeria', 5]
   ]);

   var options = {
      region: '002',
      colorAxis: {colors: ['green', 'blue']}
   };

   var chart = new google.visualization.GeoChart(document.getElementById('chart3_div'));

   chart.draw(data, options);
 }

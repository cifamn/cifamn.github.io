google.charts.load('current', {
   'packages':['geochart'],
 });
 google.charts.setOnLoadCallback(dashboard3);

 function dashboard3() {
   var data = google.visualization.arrayToDataTable([
     ['Pays', 'Effectifs'],
     ['Madagascar', 2],
     ['Mali', 5],
     ['Benin', 2],
     ['Burkina Faso', 2],
     ['Chad', 2],
     ['Cameroon', 6],
     ['Togo', 2],
     ['Congo', 2],
     ['Senegal', 4],
     ['Ivory Coast', 2]
     
     
  
   
  
  
   ]);

   var options = {
      region: '002',
      colorAxis: {colors: ['#D8BFD8','#953553', '#800080']}
   };

   var chart = new google.visualization.GeoChart(document.getElementById('chart3'));

   chart.draw(data, options);
 }

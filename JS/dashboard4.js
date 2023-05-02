// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard4);
// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it..
function drawDashboard4() {
   // Create our data table.
   var data4 = google.visualization.arrayToDataTable([
          ['Communication', 'effectif'],
          [ 'Site Web', 4],
          ['Reseaux Sociaux', 20  ],
          ['Entourage', 3 ],
          ['Mail Personnalisé', 1 ],
          [ 'Ecole Doctorale',1]
        ]);

      var options = {
        legend: 'none'
      };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart4'));
        chart.draw(data4, options);
   }


   
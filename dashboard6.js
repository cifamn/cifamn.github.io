// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard6);
// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it..
function drawDashboard6() {
   // Create our data table.
   var data6 = google.visualization.arrayToDataTable([
          ['Pertinance', 'Taux'],
          ['Excellent',     2],
          ['Très Bien',      7],
          ['Bien',  10],
          ['Assez-Bien', 7],
          ['Passable',    3]
        ]);

        var options = {
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart6'));
        chart.draw(data6, options);
   }


   
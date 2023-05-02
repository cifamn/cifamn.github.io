// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard5);
// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it..
function drawDashboard5() {
   // Create our data table.
   var data5 = google.visualization.arrayToDataTable([
          ['Task', 'effectif'],
          ['3',     7],
          ['2',      13],
          ['1',  11]
        ]);

        var options = {
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart5'));
        chart.draw(data5, options);
      }
   


   
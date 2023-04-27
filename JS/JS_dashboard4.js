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
      ['Sondage', 'Effectif'],
      ['Excellent' , 5],
      ['Très Bien', 7],
      ['Assez-bien', 8],
      ['Passable', 3],
      ['Médiocre', 9]
   ]);
   
   // Create a dashboard.
   var dashboard4 = new google.visualization.Dashboard(
         document.getElementById('dashboard4_div'));
   
   // Create a range slider, passing some options
   var dash4RangeSlider = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'containerId': 'filter4_div',
      'options': {
         'filterColumnLabel': 'Effectif',
      }
   });
   
   // Create a pie chart, passing some options
   var pieChart4 = new google.visualization.ChartWrapper({
      'chartType': 'PieChart',
      'containerId': 'chart4_div',
      'options': {
         'width': 400,
         'height': 300,
         'pieSliceText': 'value',
         'legend': 'left'
      }
   });
   
   // Establish dependencies, declaring that 'filter' drives 'pieChart',
   // so that the pie chart will only display entries that are let through
   // given the chosen slider range.
   dashboard4.bind(dash4RangeSlider, pieChart4);
   
   // Draw the dashboard.
   dashboard4.draw(data4);
   }


   
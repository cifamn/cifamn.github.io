google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawStuff);
function drawStuff() {

  var dashboard = new google.visualization.Dashboard(
    document.getElementById('Second_dashboard_div'));
  var SecondSlider = new google.visualization.ControlWrapper({
    'controlType': 'CategoryFilter',
    'containerId': 'Second_control_div',
    'options': {
      'filterColumnLabel': 'Genres',
    }
  });

  var pieChart  = new google.visualization.ChartWrapper({
    'chartType': 'PieChart',
    'containerId': 'Second_chart_div',
     options: { 
        'legend': 'true',
        'is3D':'true',
    },
  });
var data = google.visualization.arrayToDataTable([
["Genres", "Effectifs" ],
["Femmes", 8],
["Hommes", 21],
]);
  dashboard.bind(SecondSlider, pieChart);
  dashboard.draw(data);
  changeRange = function() {
    SecondSlider.draw();
  };
}

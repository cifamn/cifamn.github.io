google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawStuff);
function drawStuff() {

  var dashboard = new google.visualization.Dashboard(
    document.getElementById('Four_dashboard_div'));
  var FourSlider = new google.visualization.ControlWrapper({
    'controlType': 'NumberRangeFilter',
    'containerId': 'Four_control_div',
    'options': {
      'filterColumnLabel': 'Scores',
    }
  });

  var FourChart  = new google.visualization.ChartWrapper({
    'chartType': 'LineChart',
    'containerId': 'Four_chart_div',
     options: { 
        'legend': 'none',
        hAxis: {title: 'Scores'},
    },
  });
  var data = google.visualization.arrayToDataTable([
              ['Canaux', 'Scores'],
              ['Site Web', 4],
              ['Réseaux Sociaux', 20],
              ['Entourage', 3],
              ['Mail', 1 ],
              ['Ecole Doctorale',1]
            ]);
  dashboard.bind(FourSlider, FourChart);
  dashboard.draw(data);
  changeRange = function() {
    FourSlider.setState({'lowValue': 1, 'highValue': 20});
    FourSlider.draw();
  };
}

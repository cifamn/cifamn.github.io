google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawStuff);
function drawStuff() {
  var dashboard = new google.visualization.Dashboard(
    document.getElementById('Third_dashboard_div'));
  var ThirdSlider = new google.visualization.ControlWrapper({
    'controlType': 'StringFilter',
    'containerId': 'Third_control_div',
    'options': {
      'filterColumnLabel': 'Pays',
    }
  });

  var ThirdChart  = new google.visualization.ChartWrapper({
    'chartType': 'GeoChart',
    'containerId': 'Third_chart_div',
     options: { 
        'region': '002', // Africa
        'colorAxis': {colors: ['#fcd7a7', '#b4a4f5', '#07e03a']},
        'width':500,
        'height':200,
    },
  });
var data = google.visualization.arrayToDataTable([
    ['Pays', 'Etudiants'],
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
  dashboard.bind(ThirdSlider, ThirdChart);
  dashboard.draw(data);
  changeRange = function() {
    ThirdSlider.draw();
  };
}

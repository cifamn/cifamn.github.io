google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawStuff);
function drawStuff() {

  var dashboard = new google.visualization.Dashboard(
    document.getElementById('First_dashboard_div'));
  var FirstSlider = new google.visualization.ControlWrapper({
    'controlType': 'NumberRangeFilter',
    'containerId': 'First_control_div',
    'options': {
      'filterColumnLabel': 'Nombre d\'étudiants',
    }
  });

  var FirstChart  = new google.visualization.ChartWrapper({
    'chartType': 'BarChart',
    'containerId': 'First_chart_div',
     options: { 
        'legend': 'none',
        hAxis: {title: 'Nombre d\'étudiants'},
    },
  });
var data = google.visualization.arrayToDataTable([
["Modules", "Nombre d'étudiants"],
["Gouvernance de l'information en organisation gestion électronique des documents dématérialisation des archives", 15],
["Analyse des données et ingénierie de la décision", 6,],
["Stratégie digitale et management des entreprises", 3],
["Réseaux sociaux", 6],
["Expertise web", 5],
["Gestion des projets numériques", 3],
["Communication digitale", 5],
]);
  dashboard.bind(FirstSlider, FirstChart);
  dashboard.draw(data);
  changeRange = function() {
    FirstSlider.setState({'lowValue': 3, 'highValue': 15});
    FirstSlider.draw();
  };
}

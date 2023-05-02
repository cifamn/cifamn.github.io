// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard2);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it..
function drawDashboard2() {
// Create our data table.
var rowData1 = [['Genre', 'Effectif', { role: "style" }],

                    ['Femme', 8,'#FFC300']];

    var rowData2 = [['Genre','Effectifs', { role: "style" }],

                    ['Homme', 21,'#FF5733']];



    // Create and populate the data tables.

    var data = [];

    data[0] = google.visualization.arrayToDataTable(rowData1);

    data[1] = google.visualization.arrayToDataTable(rowData2);



    var options = {

      vAxis: {title: "Effectifs"},

      hAxis: {title: "Genre"},

      seriesType: "bars",

      series: {5: {type: "line"}},

      animation:{

        duration: 1000,

        easing: 'out'

      },

    };

    var current = 0;

    // Create and draw the visualization.

    var chart = new google.visualization.ComboChart(document.getElementById('chart2'));

    var button = document.getElementById('b1');

    function drawChart() {

      // Disabling the button while the chart is drawing.

      button.disabled = true;

      google.visualization.events.addListener(chart, 'ready',

          function() {

            button.disabled = false;

            button.value = 'Switch to ' + (current ? 'Femmes' : 'Hommes');

          });

      options['title'] = 'Pourcentage des ' + (current ? 'Hommes' : 'Femmes') + '-Promotion 2023'+'(CIFAMN)';



      chart.draw(data[current], options);

    }

    drawChart();



    button.onclick = function() {

      current = 1 - current;

      drawChart();

}
}
   
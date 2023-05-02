// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(dashboard1);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it..
      function dashboard1() {
var data1 = google.visualization.arrayToDataTable([

        ["Secteur", "Nombre des étudiants" ],

        ["Gouvernance de l'information en organisation, gestion électronique des documents, dématérialisation des archives", 15],

        ["Analyse des données et ingénierie de la décision", 6],

        ["Stratégie digitale et management des entreprises", 3],
        
        ["réseaux sociaux", 6],
          
        [" expertise web", 5],
        
      

        ["Gestion des projets numériques", 3],
           [" Communication digitale", 5],

      ]);
      var options1 = {
        hAxis: {

          title: 'Secteur'

        },

        vAxis: {

          title: 'Nombre des étudiants'

        }

      };

      var chart1 = new google.visualization.ColumnChart(document.getElementById("chart1"));
      chart1.draw(data1, options1);  
}




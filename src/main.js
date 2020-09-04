import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SolarYears from './../src/js/solarYears.js';

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const ageInput = $("input#age").val();
    let solar = new SolarYears(ageInput);
    const planet = $("#planet").val();
    if(planet == "Mercury"){
      solar.planet(solar.mercuryVal);
      $("#output").text(solar.display());
    }
    else if(planet == "Venus"){
      solar.planet(solar.venusVal);
      $("#output").text(solar.display());
    }
    else if(planet == "Mars"){
      solar.planet(solar.marsVal);
      $("#output").text(solar.display());
    }
    else if(planet == "Jupiter"){
      solar.jupiter();
      $("#output").text(solar.display());
    }
  });
});
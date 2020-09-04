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
      $("#output").text(solar.mercury());
    }
    else if(planet == "Venus"){
      $("#output").text(solar.venus());
    }
    else if(planet == "Mars"){
      $("#output").text(solar.mars());
    }
    else if(planet == "Jupiter"){
      $("#output").text(solar.jupiter());
    }
  });
});
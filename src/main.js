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
    $("#output").text(solar.planet(solar.mercuryVal));


  });
});
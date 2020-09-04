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
      solar.mercury();
      solar.yearsPast();
      solar.yearsLeft();
      solar.display();
      $("#output").text(solar.display());
    }
    else if(planet == "Venus"){
      solar.venus();
      solar.yearsPast();
      solar.yearsLeft();
      solar.display();
      $("#output").text(solar.display());
    }
    else if(planet == "Mars"){
      solar.mars();
      solar.yearsPast();
      solar.yearsLeft();
      solar.display();
      $("#output").text(solar.display());
    }
    else if(planet == "Jupiter"){
      solar.jupiter();
      solar.yearsPast();
      solar.yearsLeft();
      solar.display();
      $("#output").text(solar.display());
    }
  });
});
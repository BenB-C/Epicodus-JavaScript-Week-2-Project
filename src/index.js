import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeConverter from './AgeConverter.js';
import LifeExpectancyCalculator from './LifeExpectancyCalculator.js';

$(document).ready(function (){
  $("form#age-calculator").submit((event) => {
    event.preventDefault();

    let age = parseInt($("#age-input").val());
    if (!age) {
      $("#age-output").text("Please enter your age");
      $("#life-output").text("");
      return;
    }
    const planet = $("#planet-select").val().toLowerCase();

    const ageConverter = new AgeConverter(age);
    $("#age-output").text(ageConverter.getAgeDescription(planet));

    const lifeExpectancyCalculator = new LifeExpectancyCalculator();
    const lifeExpectancy = lifeExpectancyCalculator.getLifeExpectancy(age);
    const planetLifeExpectancy = (new AgeConverter(lifeExpectancy)).getAge(planet);
    $("#life-output").text(lifeExpectancyCalculator.getLifeExpectancyDescription(planetLifeExpectancy));
  });
});

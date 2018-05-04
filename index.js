var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchcityBtn = document.querySelector('#searchcity');
var $searchstateBtn = document.querySelector('#searchstate');
var $searchcountryBtn = document.querySelector('#searchcountry');
var $searchshapeBtn = document.querySelector('#searchshape');

//added event listeners to use for the search filters
$searchBtn.addEventListener("click", handleSearchButtonClick);
$searchcityBtn.addEventListener("click", handleSearchcityButtonClick);
$searchstateBtn.addEventListener("click", handleSearchstateButtonClick);
$searchcountryBtn.addEventListener("click", handleSearchcountryButtonClick);
$searchshapeBtn.addEventListener("click", handleSearchshapeButtonClick);

var filtereddata = dataSet ;

//created a function to populate the table with data
function renderTable(){
    $tbody.innerHTML = "";
    for (var i = 0; i < filtereddata.length; i++) {
      
      var sighting = filtereddata[i];
      var fields = Object.keys(sighting);
      
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = sighting[field];
      }
    }

}

//created a new handler for each filter: date, city, state, country, and shape
function handleSearchButtonClick() {

    var filterdate = $dateInput.value.trim();
    filtereddata = dataSet.filter(function(sighting) {
      var sightingdate = sighting.datetime;
      return sightingdate === filterdate;
    });
    renderTable();
  }

function handleSearchcityButtonClick(){
  var filtercity = $cityInput.value.trim();
  filtereddata = dataSet.filter(function(sighting) {
    var sightingcity = sighting.city;
    return sightingcity === filtercity;
   
  });
  renderTable();

}

function handleSearchstateButtonClick(){
  var filterstate= $stateInput.value.trim();
  filtereddata = dataSet.filter(function(sighting) {
    var sightingstate = sighting.state;
    return sightingstate === filterstate;
   
  });
  renderTable();

}

function handleSearchcountryButtonClick(){
  var filtercountry= $countryInput.value.trim();
  filtereddata = dataSet.filter(function(sighting) {
    var sightingcountry = sighting.country;
    return sightingcountry === filtercountry;
   
  });
  renderTable();

}

function handleSearchshapeButtonClick(){
  var filtershape= $shapeInput.value.trim();
  filtereddata = dataSet.filter(function(sighting) {
    var sightingshape = sighting.shape;
    return sightingshape === filtershape;
   
  });
  renderTable();

}

//populate the table for the first time

renderTable();
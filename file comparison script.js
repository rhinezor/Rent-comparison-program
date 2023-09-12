const currentCity = "Paris";
const compCity = "Barcelona";
const currentRent = 1200;
const compRent = 940;
const isMoreExpensive = currentRent > compRent;
const comparisonLabel = currentCity + " is more expensive: " + isMoreExpensive;
console.log(comparisonLabel);
const difference = currentRent - compRent;
const differenceLabel = "Rent difference: &dollar" + difference;
console.log(differenceLabel);
document.getElementById("city1").innerHTML = currentCity + ": &dollar;" +
  currentRent;
document.getElementById("city2").innerHTML = compCity + ": &dollar;" + compRent;
document.getElementById("comparison").innerHTML = comparisonLabel;
document.getElementById("difference").innerHTML = differenceLabel;

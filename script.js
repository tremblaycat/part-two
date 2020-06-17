
var vacationtype;
//document.getElementById(vacationtype).innerHTML =vacationtype;

var groupsize;
//document.getElementById(groupsize).innerHTML =groupsize;

var musical="New Orleans.";
var tropical="a beach vacation in Mexico.";
var adventurous="go whitewater rafting in the Grand Canyon.";

console.log (musical)
console.log (tropical)
console.log (adventurous)

vacationtype = window.prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?")

if (vacationtype === "musical") {
  destination="New Orleans.";
}
  
else if (vacationtype === "tropical"){
  destination="a beach vacation in Mexico.";
}

else if (vacationtype === "adventurous")
  destination="go whitewater rafting in the Grand Canyon."

  
groupsize = window.prompt ("How many are in your group?")
console.log (groupsize)

if (groupsize <=2) {
  groupSize="go first class to "

}else if (groupsize >3 && groupsize <6){
  groupSize="take a helicopter to "

}else if (groupsize >6){
  groupSize="charter a flight to "
}

var travelsuggestion;
travelsuggestion = groupSize + destination;

var result;
result=
console.log("Because you have a group of " + groupsize + " going on a " +vacationtype + " vacation, you're going to " + travelsuggestion);






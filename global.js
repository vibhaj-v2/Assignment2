


var inputval = document.getElementById("userinput").value;
var newval = parseInt(inputval);
var finalval = 1;
console.log(inputval);

var testObject = {
userinput:inputval
};

function addition() {
    console.log(newval);
    finalval += newval; 
    newval = finalval;
   }

function multiplication() {
    finalval *= newval; 
    newval = finalval;
}

function incrementval() {
    finalval = ++newval; 
    newval = finalval;
}

function decrementval() {
    finalval = --newval; 
    newval = finalval;
}
function reset() {
    console.log(inputval);
    inputval = "";

}

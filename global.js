


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
    inputval = finalval;
   }

function multiplication() {
    finalval *= newval; 
    inputval = finalval;
}

function incrementval() {
    finalval = ++newval; 
    inputval = finalval;
}

function decrementval() {
    finalval = --newval; 
    inputval = finalval;
}
function reset() {
    console.log(inputval);
    inputval = "";

}

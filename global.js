
// var inputval;
// var intval;
// var finalval = 1;

const displayNumber = document.getElementById("userinput");

function getTheChangeValue() {
    calcobj.setCalcval = parseInt(displayNumber.value);
    // calcobj.setCalcval = inputval;
    // intval = parseInt(inputval);
    // console.log(calcobj.ca)
}

var calcobj = {
    userinput : 0,
    get getCalcval() {
        return this.userinput;
    },
    set setCalcval(val) {
        this.userinput = val;
    }
};

function display() {
    displayNumber.value = calcobj.getCalcval;
}

function addition() {
    calcobj.setCalcval = calcobj.userinput + calcobj.userinput;
//    finalval += calcobj.calcval;
//    calcobj.calcval = finalval;
    display();
}

       function multiplication() {
        calcobj.setCalcval = calcobj.userinput * calcobj.userinput;
//         finalval *= calcobj.calcval;
//    calcobj.calcval = finalval;
   display();
       }
    
    function incrementval() {
        calcobj.setCalcval = ++calcobj.userinput;
//    calcobj.calcval = finalval;
   display();
       }
    
    function decrementval() {
        calcobj.setCalcval = --calcobj.userinput;
//         finalval = --calcobj.calcval;
//    calcobj.calcval = finalval;
   display();
    }












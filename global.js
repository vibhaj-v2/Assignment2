
var inputval;
var intval;
var finalval = 1;

function getTheChangeValue() {
    inputval = document.getElementById("userinput").value;
    intval = parseInt(inputval);
    }

var calcobj = {
    userinput : intval,
    get calcval() {
    return this.userinput;
      },
      set calcval(val) {
        this.userinput = val;
      }
};

function display(uval) {
    document.getElementById("userinput").value = uval;
}

function addition() {
   finalval += calcobj.calcval;
   calcobj.calcval = finalval;
   display(finalval);
       }

       function multiplication() {
        finalval *= calcobj.calcval;
   calcobj.calcval = finalval;
   display(finalval);
       }
    
    function incrementval() {
        finalval = ++calcobj.calcval;
   calcobj.calcval = finalval;
   display(finalval);
       }
    
    function decrementval() {
    finalval = --calcobj.calcval;
   calcobj.calcval = finalval;
   display(finalval);
    }












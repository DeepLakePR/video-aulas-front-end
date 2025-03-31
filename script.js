const calc_visor_result = document.getElementById("calc-result");

var operation = "";

// Calc
function calc(){
    try{
        operation = eval(operation);
        calc_visor_result.innerText = eval(operation);

    }catch(e){
        operation = "";
        calc_visor_result.innerText = "Erro";
        
    }

}

// Append/Add Operatin Calc
function appendCalc(value){
    operation += value;
    calc_visor_result.innerText = operation;

}

// Clear Operation/Calc
function clearCalc(){
    operation = "";
    calc_visor_result.innerText = "00.00";

}

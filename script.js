var BB = document.getElementById("BB");
var TB = document.getElementById("TB");
var Age = document.getElementById("Age");
var form = document.getElementById("form");
var L = document.getElementById("L");
var P = document.getElementById("P");
let result = document.querySelector(".comm2");

modalcont = document.querySelector(".modal-cont");
modaltext = document.querySelector("#modText");


function hitung(){
    if (Age.value=='' || BB.value==''||TB.value==''||(L.checked==false&&P.checked==false)){
        modal.style.display = "block";
        modaltext.innerHTML = 'All Field Are Required!';
    }
    else{
        hitungBMI(BB,TB);
    }
}

function hitungBMI(BB,TB){
    var bmi = BB / (TB * TB);
    
    var bmiResult = ''
    if (bmi<18.5){
        result = 'Underweight';
    }
    else if (18.5 < bmi < 24.9)
    {
        result = 'Healthy';
    }
    else if (25 < bmi < 29.9){
        result = 'Overweight';
    }

    else if (30 < bmi < 34.9){
        result = 'Obese';
    }
    else{
        result = 'Extremely Obese';
    }
}



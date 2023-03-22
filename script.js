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
    return bmi;
}



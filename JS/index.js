// declare the variable
var form = document.querySelector('.form');
var heightInput = form.querySelector("#height");
var weightInput = form.querySelector("#weight");
var ageInput = form.querySelector("#age");
var bmiValue = document.getElementById("result-BMI");

var category = document.getElementById("result-Category");
var statement = document.getElementById("result-statement");


form.addEventListener("submit", function(event){
    event.preventDefault();
    // check the age value
    if (ageInput.value < 18){
        alert ("Usia Harus Di atas 18 Tahun");
    } 
    else{
        calculate()
    }
});

function calculate(){
    // insert the value to variable, convert the height to Meter
    let weight = weightInput.value;
    let height = heightInput.value/100;

    // calculate with BMI formula
    let bmi = weight / (height**2);
    bmiValue.innerText = bmi.toFixed(2);

    // BMI Result Statement
    if (bmi < 18.5){
        category.innerText = "Underweight";
        statement.innerText = "Your BMI is under 18.5";
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        category.innerText = "Ideal";
        statement.innerText = "Your BMI is between 18.5 and 24.9";
    }
    else if (bmi >= 25 && bmi <= 29.9){
        category.innerText = "Overweight";
        statement.innerText = "Your BMI is between 25 and 29.9";
    }
    else if (bmi >= 30){
        category.innerText = "Obese";
        statement.innerText = "Your BMI is over 30";
    }
}
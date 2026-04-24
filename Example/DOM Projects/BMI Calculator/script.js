let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();//stops from the relaoding

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const result = document.querySelector("#result2")

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `<p>Please Give The Valid Height</p>`;
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `<p>Please Give The Valid Weight</p>`;
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI: ${bmi}</span>`;
        if(bmi<=8.6){
            result.innerHTML = "The Body fat is less than a normal Person";
        }else if(bmi>=18.6 || bmi===24.9){
            result.innerHTML = "The Body fat is Normal"
        }else if (bmi>24.9){
            result.innerHTML = "The Body Fat is More than a normal Person"
        }
    }
});
function generationCalc(age){
    // Ensure age is a number
    age = parseInt(age, 10);
    if (isNaN(age) || age < 0) {
        return "Please enter a valid age.";
    }
    //calculate year born
    var currentYear = new Date().getFullYear();
    let yr = currentYear - age;
    if (yr >= 1901 && yr < 1928){
        return "GI Generation";
    }
    else if (yr >= 1928 && yr < 1946){
        return "Silent Generation";
    }
    else if (yr >= 1946 && yr < 1965){
        return "Baby Boomers";
    }
    else if (yr >= 1965 && yr < 1981){
        return "Generation X";
    }
    else if (yr >= 1981 && yr < 1997){
        return "Millenials";
    }
    else if (yr >= 1997 && yr < 2013){
        return "Generation Z";
    }
    else if (yr >= 2013 && yr < 2025){
        return "Generation Alpha";
    }
    else {
        return "Year of birth out of range.";
    }
}

var btn = document.getElementById("submit");
        btn.addEventListener("click", function() {
            let age = document.getElementById("age").value;
            let result = generationCalc(age);
            document.getElementById("result").innerHTML = result;
        });
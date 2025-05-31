function generationCalc(age){
    age = parseInt(age, 10);
    if (isNaN(age) || age < 0) {
        return { label: "Please enter a valid age.", img: "", alt: "" };
    }
    var currentYear = new Date().getFullYear();
    let yr = currentYear - age;
    if (yr >= 1901 && yr < 1928){
        return { label: "GI Generation", img: "images/gi.png", alt: "GI Generation" };
    }
    else if (yr >= 1928 && yr < 1946){
        return { label: "Silent Generation", img: "images/silent.png", alt: "Silent Generation" };
    }
    else if (yr >= 1946 && yr < 1965){
        return { label: "Baby Boomers", img: "images/boomers.png", alt: "Baby Boomers" };
    }
    else if (yr >= 1965 && yr < 1981){
        return { label: "Generation X", img: "images/genx.png", alt: "Generation X" };
    }
    else if (yr >= 1981 && yr < 1997){
        return { label: "Millenials", img: "images/millenials.png", alt: "Millenials" };
    }
    else if (yr >= 1997 && yr < 2013){
        return { label: "Generation Z", img: "images/genz.png", alt: "Generation Z" };
    }
    else if (yr >= 2013 && yr < 2025){
        return { label: "Generation Alpha", img: "images/alpha.png", alt: "Generation Alpha" };
    }
    else {
        return { label: "Year of birth out of range.", img: "images/", alt: "" };
    }
}

var btn = document.getElementById("submit");
btn.addEventListener("click", function() {
    let age = document.getElementById("age").value;
    let result = generationCalc(age);
    document.getElementById("result").innerHTML = result.label;
    let img = document.getElementById("gen-image");
    if (result.img) {
        img.src = result.img;
        img.alt = result.alt;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
});
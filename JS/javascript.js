//Writes the input to the Answer Box
function number(n) {
    var oldNumber = document.getElementById("answer");
    var newNumber = document.createTextNode(n);

    oldNumber.appendChild(newNumber);
}

//Gets rid of all the text in the anser box
function ce() {
    document.getElementById("answer").innerHTML = '';
}

//Takes the input rewrite it, and calulates it
function calculate() {
    var equation = document.getElementById("answer").innerHTML;

    //Changes the percent sign to something the calc() function can read
    if (equation.includes("%")) {
        var oldPercent = document.getElementById("answer").innerHTML;
        var percent = oldPercent.replace("%", "*.01");
        document.getElementById("answer").innerHTML = percent;
    }

    var evaluation = document.getElementById("answer").innerHTML;
    var answer = eval(evaluation);

    var answerWrite = equation.replace(equation, answer);
    document.getElementById("answer").innerHTML = answerWrite;
}
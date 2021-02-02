let answer = 0;

function number(n) {
    var oldNumber = document.getElementById("answer");
    var newNumber = document.createTextNode(n);

    oldNumber.appendChild(newNumber);
}

function calculate() {
    var equation = document.getElementById("answer").innerHTML;
    var split = equation.split(" ");
    var count = split.length;
    for (i = 0; i < count; i++) {
        if (isNaN(split[i])) {
            if (split[i] == "+") {
                answer = (Number(split[i-1]) + Number(split[i+1]));
            }
            else if (split[i] == "-") {
                answer = (Number(split[i-1]) - Number(split[i+1]));
            }
            else if (split[i] == "*") {
                answer = (Number(split[i-1]) * Number(split[i+1]));
            }
            else if (split[i] == "/") {
                answer = (Number(split[i-1]) / Number(split[i+1]));
            }
            else if (split[i] == "/") {
                answer = (Number(split[i-1]) / Number(split[i+1]));
            }
            else {
                console.log("You typed something wrong")
            }
        }
    }
    var answerWrite = equation.replace(equation, answer);
    document.getElementById("answer").innerHTML = answerWrite;
}
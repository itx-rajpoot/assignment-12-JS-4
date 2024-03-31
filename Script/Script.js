let equation = ""
function handeleGetValue(value) {
    equation += value
    document.getElementById('display').value = equation
    console.log(equation)
}
function cleardisplay() {
    equation = ""
    document.getElementById('display').value = equation
}

function calculatePercentage() {
    equation = eval(equation + '/100');
    document.getElementById('display').value = equation
}

function handelcalculate(value) {
    equation = eval(equation)
    document.getElementById('display').value = equation
}
function deleteValue() {
    equation = equation.toString().slice(0, - 1)
    document.getElementById('display').value = equation
}
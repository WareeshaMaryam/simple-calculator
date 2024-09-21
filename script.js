
function add() {
    let firstNum = +document.getElementById("Number1").value;
    let secNum = +document.getElementById("Number2").value;
    let answer = document.getElementById("output");

    if (firstNum != "" && secNum != "") {
        answer.innerText = firstNum + secNum;
    } else if (firstNum == "" && secNum != "") {
        alert("Enter the first value to perform the operation");
    } else if (firstNum != "" && secNum == "") {
        alert("Enter the second value to perform the operation");
    } else {
        alert("Enter Both value to perform the operation");
    }
}

function sub() {
    let firstNum = +document.getElementById("Number1").value;
    let secNum = +document.getElementById("Number2").value;
    let answer = document.getElementById("output");

    if (firstNum != "" && secNum != "") {

        answer.innerText = firstNum - secNum;
    } else if (firstNum == "" && secNum != "") {
        alert("Enter the first value to perform the operation");
    } else if (firstNum != "" && secNum == "") {
        alert("Enter the second value to perform the operation");
    } else {
        alert("Enter Both value to perform the operation");
    }
}
function mult() {
    let firstNum = +document.getElementById("Number1").value;
    let secNum = +document.getElementById("Number2").value;
    let answer = document.getElementById("output");
    if (firstNum != "" && secNum != "") {
        answer.innerText = firstNum * secNum;
    } else if (firstNum == "" && secNum != "") {
        alert("Enter the first value to perform the operation");
    } else if (firstNum != "" && secNum == "") {
        alert("Enter the second value to perform the operation");
    } else {
        alert("Enter Both value to perform the operation");
    }
}
function divi() {
    let firstNum = +document.getElementById("Number1").value;
    let secNum = +document.getElementById("Number2").value;
    let answer = document.getElementById("output");

    if (firstNum != "" && secNum != "") {
        answer.innerText = firstNum / secNum;;
    } else if (firstNum == "" && secNum != "") {
        alert("Enter the first value to perform the operation");
    } else if (firstNum != "" && secNum == "") {
        alert("Enter the second value to perform the operation");
    } else {
        alert("Enter Both value to perform the operation");
    }
}

function clean() {
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
    document.getElementById("output").innerText = "";
}
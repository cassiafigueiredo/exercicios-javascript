

function turnRedAndGrow() {
    let div = document.getElementById("div1");
    div.style.backgroundColor = "red";
    div.style.height = "300px";
}

function turnWhiteAndShrink() {
    let div = document.getElementById("div1");
    div.style.backgroundColor = "white";
    div.style.height = "200px";
}

function changeBorderRadius() {
    let div = document.getElementById('div1')
    div.style.borderBottomLeftRadius = "30px"
}

function mouseDownBlue() {
    let div = document.getElementById("div2");
    div.style.backgroundColor = "blue"
}

function mouseUpGreen() {
    let div = document.getElementById("div2");
    div.style.backgroundColor = "green"
}

function limpaTexto() {
    document.getElementById("inputTxt").value = "";
}

function voltaTexto() {
    document.getElementById("inputTxt").value = "olha eu de novo"
}

function yellowChange() {
    document.body.style.backgroundColor = "yellow"
}

function pinkChange() {
    document.body.style.backgroundColor = "lightpink"
}

function teclaPressionada() {
    let input = document.getElementById("inputTxt2").value;
    console.log(input)
}
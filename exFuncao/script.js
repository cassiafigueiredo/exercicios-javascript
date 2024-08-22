///FUNÇÃO SOMA
function soma(valor1, valor2) {
    return valor1 + valor2
}

totalSoma = soma(10, 20)

document.getElementById("somaP").innerHTML = totalSoma

//FUNÇAO DOLAR
function cotacaoDolar(dolar, cotacao) {
    return dolar * cotacao 
}

valorDolar = 10
valorCotacao = 5.48

totalDolar = cotacaoDolar(valorDolar, valorCotacao)

document.getElementById("dolarP").innerHTML = `sua quantia em dólares é U$ ${valorDolar} e em reais R$ ${totalDolar}`

function helloWorld() {
    alert("halo halo halo halo halo")
}

//FUNÇÃO FAHRENHEIT
function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32)
}

var temperaturaFahr = paraCelsius(30)

document.getElementById("celsiusP").innerHTML = `a temperatura é de ${temperaturaFahr} graus celsius`
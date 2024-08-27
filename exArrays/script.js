const pessoa = ["cassia", "figueiredo", 20, "estudante"]
pessoa.push('estudante')

document.getElementById("teste").innerHTML = pessoa;

const cao = ["odin", "zeca", "mel", "sirius"]
cao.shift()
document.getElementById("teste1").innerHTML = cao;

const caes = ["zeca", "mel", "sirius"]
caes.unshift("odin")
document.getElementById("teste2").innerHTML = caes

const paes = ['francês', 'baguete', 'hamburguer']
paes.splice(2, 0, "careca", "massa grossa", "massa fina")
document.getElementById("teste3").innerHTML = paes

const caesEPaes = caes.concat(paes, pessoa)
document.getElementById("teste4").innerHTML = caesEPaes

const baixoEAltoNivel = ["javascript", "python", "php", "c", "java", "assembly", "html", "css"]
const baixoNivel = baixoEAltoNivel.slice(3, 6)
document.getElementById("teste5").innerHTML = baixoNivel

const paesOrdemAlf = paes.sort();
document.getElementById("teste6").innerHTML = paes

const
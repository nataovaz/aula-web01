const textos = document.querySelectorAll("p");

console.log(textos);

const primeiroParagrafo = document.querySelector("p").innerText;
console.log(primeiroParagrafo)

const miniParagrafo = document.getElementById("p4").innerText;
console.log(miniParagrafo)

function pegaTexto(){
    let texto = document.getElementById("nomeUser").value;
    console.warn(texto)
}
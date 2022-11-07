// console.log("Passei no arquivo código.");
// console.log("Segundo console no arquivo código.");
// console.log("Terceiro console no arquivo código.");
// console.log("Quarto código.");

// function mensagem() {
//   var msg = "Mensagem da função mensagem.";
//   alert(msg);
// }

// // Declarar um array
// let nomes = [];
// nomes.push("unifei");
// nomes.push("ufmg");
// console.log(nomes);

// // Exemplo de Array com spread
// let universidades = ["PUC", ...nomes];
// console.log(universidades);
// let excluidos = universidades.pop();

// console.log(universidades);
// console.log(excluidos);

// universidades.unshift("UFOP");
// console.log(universidades);
// universidades.shift("UFOP");
// console.log(universidades);

// universidades[10] = "UFPA";
// console.log(universidades);
// universidades[-1] = "UFPA";
// console.log(universidades);
// universidades["Opa"] = "UFPA";
// console.log(universidades);

// delete universidades["Opa"];
// console.log(universidades);

// let pessoas = ["Eduardo", "Antônio", "Marta", "José", "Helena"];
// let [...todos] = [pessoas, "Nico"];
// console.log(todos);

// let [primeiro, segundo, ...outros] = pessoas;
// console.log(outros);

// // for (let index = 0; index < pessoas.length; index++) {
// //     let element = pessoas[index];
// //     console.log(element)

// // }

// pessoas.forEach((element) => {
//   console.log(element);
// });

// for (const item in pessoas) {
//   console.log("for in" + pessoas[item]);
// }

// for (const item of pessoas.entries()) {
//   console.log("for in " + item[0] + " " + item[1]);
// }

// let precos = [300.3, 249, 100.5];
// let precosDescontados = precos.map((p) => {
//   let desconto = p * 0.1;
//   return p - desconto;
// });
// console.log(precos);
// console.log(precosDescontados);

// // let Pessoa = {
// //     nome: "Fulano Ribeiro",
// //     idade: 20,
// //     telefone: "88 9 7777 5555",
// //     };
// //     console.log(Pessoa);
// //     console.log(Pessoa.nome);
// //     console.log(Pessoa["nome"]);
// //     console.log(Pessoa["telefone"]);
// //     console.log((Pessoa.email = "teste@teste.com"));
// //     console.log(Pessoa);

// // let aluno = {
// //   nome: "Rodrigo",
// //   sobrenome: "Andrade",
// //   idade: 31,
// //   endereco: {
// //     rua: "Alameda exemplo",
// //     numero: 213,
// //   },
// // };
// // let { nome, sobrenome } = aluno;
// // let nome2 = aluno.nome;
// // let {
// //   endereco: { rua },
// // } = aluno;
// // console.log(nome, sobrenome, nome2, rua);


// let x = "123" + 10; //retorna “12310” 
// typeof(x); //retorna ‘string’
// let y;
// y = "texto" * 1; //retorna NaN (Not a Number)

// console.log(x)
// console.log(y)

console.log(soma(2,2))

function soma(x, y){
    return x + y
}

let aux = function (a){
    return a*a;
}

console.log(aux(5))

console.log(soma(5, aux(5)))


function mensagens() {
    setTimeout(function () {
    console.log("Primeira mensagem");
    }, 5000);
    setTimeout( () => {
    console.log("Segunda mensagem");
    }, 3000);
    setTimeout(function () {
    console.log("Terceira mensagem");
    }, 1000);
    }

mensagens()
    
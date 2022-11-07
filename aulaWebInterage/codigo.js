var dados;

function pegaDados(dados) {
  console.log(dados);
  dados.forEach((obj) => {
    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.address.street);
  });
}

function getter() {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((json) => pegaDados(json))
    .catch((e) => console.log("Erro na requisição!" + e));

  var table = document.getElementById("tabela");
  for (let row of mytab1.rows) {
    for (let cell of row.cells) {
        
    }
  }
}

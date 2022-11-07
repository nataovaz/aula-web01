function download() {
  // 1. Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();

  // 2. Configure it: GET-request for the URL /article/.../load
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // 3. Send the request over the network
  xhr.send();

  // 4. This will be called after the response is received
  xhr.onload = function () {
    if (xhr.status != 200) {
      // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else {
      // show the result
      alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
    }
  };

  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      alert(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      alert(`Received ${event.loaded} bytes`); // no Content-Length
    }
  };

  xhr.onerror = function () {
    alert("Request failed");
  };
}

var usuarios;

function pegaDados(dados){
    console.log(dados)
}

function getUsuariosByFetch() {
    console.log("Antes do fetch")
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((json) => pegaDados(json))
    .catch((e) => console.log("Erro na requisição!" + e))

    console.log("Depois do fetch")
    }
    console.log(usuarios)

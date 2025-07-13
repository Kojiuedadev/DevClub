const input = document.querySelector(".input-contato"); //mapeia o input contato
const btnBuscar = document.querySelector(".btn-buscar"); //mapeia o botão buscar

const user = [
  { nome: "Lucas", idade: 25, telefone: "123456789" },
  { nome: "Ana", idade: 30, telefone: "987654321" },
  { nome: "João", idade: 22, telefone: "456789123" },
  { nome: "Maria", idade: 28, telefone: "789123456" },
  { nome: "Pedro", idade: 35, telefone: "321654987" },
  { nome: "Carla", idade: 27, telefone: "654321789" },
  { nome: "Fernanda", idade: 31, telefone: "159753486" },
  { nome: "Ricardo", idade: 29, telefone: "753159486" },
  { nome: "Juliana", idade: 24, telefone: "951753852" },
  { nome: "Gabriel", idade: 26, telefone: "852963741" },
  { nome: "Ana", idade: 30, telefone: "987654321" },
  { nome: "João", idade: 22, telefone: "456789123" },
  { nome: "Maria", idade: 28, telefone: "789123456" },
  { nome: "Pedro", idade: 35, telefone: "321654987" },
  { nome: "Carla", idade: 27, telefone: "654321789" },
  { nome: "Fernanda", idade: 31, telefone: "159753486" },
  { nome: "Ricardo", idade: 29, telefone: "753159486" },
  { nome: "Juliana", idade: 24, telefone: "951753852" },
  { nome: "Gabriel", idade: 26, telefone: "852963741" },
];

function buscarContato() {
  //adiciona o evento de click no botão buscar
  const input = document.querySelector(".input-contato"); //mapeia o input contato
  const resultadoBusca = document.querySelector(".resultado"); //mapeia o resultado da busca

  for (const contact of user) { 
   
    if (input.value.toLowerCase() === contact.nome.toLowerCase()) {
      //verifica se o nome do contato é igual ao valor do input
      console.log("Nome: " + contact.nome); //imprime o nome do contato
      resultadoBusca.innerHTML = `Nome: ${contact.nome} <br> Idade: ${contact.idade} <br> Telefone: ${contact.telefone}`;
      break; //imprime o resultado da busca
    } else {
      resultadoBusca.innerHTML = "Contato não encontrado"; //imprime que o contato não foi encontrado
    }
  }
}
btnBuscar.addEventListener("click", buscarContato); //adiciona o evento de click no botão buscar

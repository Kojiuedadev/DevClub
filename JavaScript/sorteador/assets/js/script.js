const btnSortear = document.querySelector(".btn_sortear");

function sorteador() {
  const entre = document.querySelector(".entre").value; //mapeia o input entre
  const e = document.querySelector(".e").value; //mapeia o input e

  sorteadorDeNumeros(entre, e); //chama a função sorteadorDeNumeros passando os valores dos inputs entre e e
}

function sorteadorDeNumeros() {
  const entre = document.querySelector(".entre").value; //mapeia o input entre
  const e = document.querySelector(".e").value; //mapeia o input e
  const numeroDaSorte = document.querySelector(".numero-da-sorte"); //mapeia o input numeroDaSorte

  if (entre == "" || e == "" || e < entre || entre < 1) {
    alert("Preencha os campos corretamente!");
  } else {
    const numeroSorteado =
      Math.floor(Math.random() * (e - entre + 1)) + parseInt(entre); //sorteia um número entre os dois inputs
    numeroDaSorte.innerHTML = numeroSorteado;
  }
}
btnSortear.addEventListener("click", sorteador);

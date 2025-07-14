const list = document.querySelector("ul"); // seleciona a lista onde os produtos serão exibidos
const buttonShowAll = document.querySelector(".show-all"); // seleciona o botão "Mostrar Todos"
const buttonMapAll = document.querySelector(".map-all"); // seleciona o botão "Mostrar Todos"
const buttonReduceAll = document.querySelector(".reduce-all"); // seleciona o botão "Reduzir Todos"
const buttonSunAll = document.querySelector(".sun-all"); // seleciona o botão "Reduzir Todos"

function showALL(productsArray) {
  let myLi = ""; // inicializa uma string vazia para armazenar os itens formatados
  productsArray.forEach((product) => {
    myLi += `
      <li>
      <img src="${product.src}" alt="burguer ${product.name}"/>
      <p>Burguer ${product.name}</p>
      <p class="item-price">R$ ${product.price.toFixed(2).replace(".", ",")}</p>
        </li>`;
  });

  list.innerHTML = myLi; // atualiza o conteúdo da lista com os itens formatados
}

function discount() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9, // aplica um desconto de 10% no preço
  }));

  showALL(newPrices); // chama a função showALL com o novo array de produtos com desconto

  list.innerHTML = myLi;
}

function reduceAll() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
    let myLi = `<li>
    <p>Total de todos os Burgueres</p>
    <p class="item-price">R$ ${totalValue.toFixed(2).replace(".", ",")}</p>
    </li>`;
    list.innerHTML = myLi; // atualiza o conteúdo da lista com o total dos preços
}

function filterAll() {
  const filteredProducts = menuOptions.filter((product) => product.vegan === true); // filtra os produtos veganos
  showALL(filteredProducts); // chama a função showALL com o array filtrado

  list.innerHTML = myLi; // atualiza o conteúdo da lista com os produtos filtrados
}

buttonShowAll.addEventListener("click", () => showALL(menuOptions)); // adiciona um evento de clique ao botão "Mostrar Todos" que chama a função showALL
buttonMapAll.addEventListener("click", discount); // adiciona um evento de clique ao botão "Mostrar Todos" que chama a função showALL
buttonReduceAll.addEventListener("click", reduceAll); // adiciona um evento de clique ao botão "Mostrar Todos" que chama a função showALL
buttonSunAll.addEventListener("click", filterAll); // adiciona um evento de clique ao botão "Mostrar Todos" que chama a função showALL

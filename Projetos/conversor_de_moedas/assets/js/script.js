const convertButton = document.querySelector(".btn_converter"); //mapea o botão
const currencyValueToConvert = document.querySelector(
  ".currency-value-to-convert"
); //mapea o valor convertido
const selectConvertDe = document.querySelector(".select-convert-de"); //mapea o select de conversão
const selectConvertPara = document.querySelector(".select-convert-para"); //mapea o select de conversão
const currencyNameDe = document.querySelector(".currency-name-de"); //mapea o nome da moeda de origemdo
const currencyNamePara = document.querySelector(".currency-name-para"); //mapea o nome da moeda de destino

//função que vai converter o valor
function convertValue() {
  const currencyValue = document.querySelector(".currency-value"); //mapea o valor a ser convertido
  const inputCurrency = document.querySelector(".input-currency").value; //mapea o input de moeda

  const dolarToday = 5.2; //valor do dolar hoje
  const euroToday = 5.6; //valor do euro hoje

  if (selectConvertDe.value === "dolar" && selectConvertPara.value === "real") {
    currencyNameDe.innerHTML = "Dólar Americano"; //muda o nome da moeda de origem
    currencyNamePara.innerHTML = "Real Brasileiro"; //muda o nome da moeda de destino
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format((inputCurrency * dolarToday).toFixed(2)); //formata o valor convertido para o formato de moeda
  }
  if (selectConvertDe.value === "real" && selectConvertPara.value === "dolar") {
    currencyNameDe.innerHTML = "Real Brasileiro"; //muda o nome da moeda de origem
    currencyNamePara.innerHTML = "Dólar Americano"; //muda o nome da moeda de destino
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format((inputCurrency / dolarToday).toFixed(2)); //formata o valor convertido para o formato de moeda
  }
  if (selectConvertDe.value === "euro" && selectConvertPara.value === "real") {
    currencyNameDe.innerHTML = "Euro"; //muda o nome da moeda de origem
    currencyNamePara.innerHTML = "Real Brasileiro"; //muda o nome da moeda de destino
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format((inputCurrency * euroToday).toFixed(2)); //formata o valor convertido para o formato de moeda
  }
  if (selectConvertDe.value === "real" && selectConvertPara.value === "euro") {
    currencyNameDe.innerHTML = "Real Brasileiro"; //muda o nome da moeda de origem
    currencyNamePara.innerHTML = "Euro"; //muda o nome da moeda de destino
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format((inputCurrency / euroToday).toFixed(2)); //formata o valor convertido para o formato de moeda
  }
  if (selectConvertDe.value === "dolar" && selectConvertPara.value === "euro") {
    currencyNamePara.innerHTML = "Euro"; //muda o nome da moeda de destino
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(((inputCurrency * dolarToday) / euroToday).toFixed(2)); //formata o valor convertido para o formato de moeda
  }
  if (selectConvertDe.value === "euro" && selectConvertPara.value === "dolar") {
    currencyNameDe.innerHTML = "Euro"; //muda o nome da moeda de origem
    currencyNamePara.innerHTML = "Dólar Americano"; //muda o nome da moeda de destino
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(((inputCurrency * euroToday) / dolarToday).toFixed(2)); //formata o valor convertido para o formato de moeda
  }
  if (selectConvertDe.value === selectConvertPara.value) {
    currencyNameDe.innerHTML = "Selecione uma moeda"; //muda o nome da moeda de origem
    currencyNamePara.innerHTML = "Selecione uma moeda"; //muda o nome da moeda de destino
    currencyValue.innerHTML = "Selecione uma moeda"; //muda o valor convertido
    currencyValueToConvert.innerHTML = "Selecione uma moeda"; //muda o valor convertido
  }
}

function changeFlag() {
  const flagDe = document.querySelector(".flag-de"); //mapea a bandeira de origem
  const flagPara = document.querySelector(".flag-para"); //mapea a bandeira de destino

  if (selectConvertDe.value === "dolar") {
    flagDe.src = "./assets/img/bd_usa.png"; //muda a bandeira de origem
    currencyNameDe.innerHTML = "Dólar Americano"; //muda o nome da moeda de origem
  } else if (selectConvertDe.value === "real") {
    flagDe.src = "./assets/img/bd_brazil.png"; //muda a bandeira de origem
    currencyNameDe.innerHTML = "Real Brasileiro"; //muda o nome da moeda de origem
  } else if (selectConvertDe.value === "euro") {
    flagDe.src = "./assets/img/bd_europe.png"; //muda a bandeira de origem
    currencyNameDe.innerHTML = "Euro"; //muda o nome da moeda de origem
  } else if (selectConvertDe.value === "euro") {
  }

  if (selectConvertPara.value === "dolar") {
    flagPara.src = "./assets/img/bd_usa.png"; //muda a bandeira de destino
    currencyNamePara.innerHTML = "Dólar Americano"; //muda o nome da moeda de origem
  } else if (selectConvertPara.value === "real") {
    flagPara.src = "./assets/img/bd_brazil.png"; //muda a bandeira de destino
    currencyNamePara.innerHTML = "Real Brasileiro"; //muda o nome da moeda de origem
  } else if (selectConvertPara.value === "euro") {
    flagPara.src = "./assets/img/bd_europe.png"; //muda a bandeira de destino
    currencyNamePara.innerHTML = "Euro"; //muda o nome da moeda de origem
  }
}

selectConvertDe.addEventListener("change", changeFlag);
selectConvertPara.addEventListener("change", changeFlag);

//adiciona o evento de click no botão
convertButton.addEventListener("click", convertValue);

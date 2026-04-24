// Cotação de moedas do dia.
const USD = 5.06
const EUR = 5.93
const GBP = 6.83

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer") // Dentro do main ele vai pegar o footer
const description = document.querySelector("#description")

// Manipulando o input amount para receber somente números.
// Observando quando interagir.
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g // Criando regex.
  amount.value = amount.value.replace(hasCharacterRegex, "") // Atribuímos por outro valor.
})

// Capturando o evento de submit (enviar) no formulário.
form.onsubmit = (event) => {
  event.preventDefault() // Desativa o comportamento padrão (impede reload).

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
    default:
      break;
  }
}

// Função para converter a moeda.
// amount: qual o valor total? (Ex: comprar 100 dólares)
// price: qual o preço? (Ex: 1 dólar = R$ 5.06)
// symbol: simbolo para exibir bonitinho.
function convertCurrency(amount, price, symbol){
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
  } catch (error) {
    //Remove a classe do footer caso tenha algum erro.
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter! Tente novamente mais tarde.")
  }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value){
  // Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00).
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
}
// Cotação de moedas do dia.
const USD = 5.06
const EUR = 5.93
const GBP = 6.83

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")

// Manipulando o input amount para receber somente números.
// Observando quando interagir.
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g // Criando regex.
  amount.value = amount.value.replace(hasCharacterRegex, "") // Atribuimos por outro valor.
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
// amount: qual o valor total? (Ex: comprar 100 doláres)
// price: qual o preço? (Ex: 1 dólar = R$ 5.06)
// symbol: simbolo para exibir bonitinho.
function convertCurrency(amount, price, symbol){
  console.log(amount, price, symbol)
}
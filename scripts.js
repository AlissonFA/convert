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
const result = document.querySelector("#result")

// Manipulando o input amount para receber somente números.
// Observando quando interagir.
amount.addEventListener("input", () => {
  // O [^\d,] significa: "Tudo que NÃO for dígito ou vírgula".
  const hasCharacterRegex = /[^\d,]/g // Criando regex.
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
    // Trocamos a vírgula por ponto e convertemos para float.
    const formattedAmount = parseFloat(amount.replace(",", "."))

    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total, usando o valor formatado.
    let total = formattedAmount * price

    // Verifica se o resultado não é um número.
    if(isNaN(total)){
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total.
    result.textContent = `${total} Reais`

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
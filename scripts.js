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

  console.log(currency.value)
}
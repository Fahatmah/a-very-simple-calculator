const firstOperand = document.querySelector('.first-operand')
const secOperand = document.querySelector('.sec-operand')
const resultDisplay = document.querySelector('.result')
const operations = document.querySelectorAll('[data-operation]')
const allClearBtn = document.querySelector('[data-all-clear]')

operations.forEach((btn) => {
  btn.addEventListener('click', () => {
    let result
    const prev = parseFloat(firstOperand.value)
    const curr = parseFloat(secOperand.value)
    if (isNaN(prev) || isNaN(curr)) return
    switch (btn.innerText) {
      case '+':
        result = prev + curr
        break
      case '-':
        result = prev - curr
        break
      case '*':
        result = prev * curr
        break
      case '/':
        result = prev / curr
        break
      default:
        return
    }
    resultDisplay.innerText = result.toLocaleString()
  })
})

allClearBtn.addEventListener('click', () => {
  firstOperand.value = ''
  secOperand.value = ''
  resultDisplay.innerText = ''
})

export function num2str(number, textForms) {
  const cases = [2, 0, 1, 1, 1, 2]
  return textForms[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}

export function formatPrice(price) {
  price = Math.round(price)
  if (price.toString().length > 4) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')
  }
  return price
}

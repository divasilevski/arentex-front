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

export function pagination(current, last) {
  const delta = 2
  const left = current - delta
  const right = current + delta + 1
  const range = []
  const rangeWithDots = []
  let l

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push(null)
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
}

export function serialize(obj) {
  var str = []
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  return str.length > 0 ? '?' + str.join('&') : ''
}

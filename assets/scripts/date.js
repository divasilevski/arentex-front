const DAY_IN_MILLS = 1000 * 60 * 60 * 24

export function getDateFromString(string, divider) {
  const [DD, MM, YYYY] = string.split(divider)
  return new Date(YYYY, MM - 1, DD)
}

export function getHumanDate(date) {
  const options = { month: 'long', day: 'numeric' }
  return date.toLocaleDateString('ru-RU', options)
}

export function getDaysCount(date1, date2) {
  const difference = date1.getTime() - date2.getTime()
  return Math.abs(Math.floor(difference / DAY_IN_MILLS)) + 1
}

export function compareRanges(range1, range2) {
  const start1 = getHumanDate(new Date(range1.start))
  const start2 = getHumanDate(new Date(range2.start))
  const end1 = getHumanDate(new Date(range1.end))
  const end2 = getHumanDate(new Date(range2.end))
  return start1 === start2 && end1 === end2
}

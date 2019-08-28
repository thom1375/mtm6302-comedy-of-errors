const headerStyle = 'font-size: 24px; font-weight: bold; font-family: sans-serif;'
const subheaderStyle = 'font-size: 16px; font-weight: bold; font-family: sans-serif;'

console.log('%cQuotes by William Shakespeare", headerStyle)

const plays = {}

for (const quote of quotes) {
  if (!plays[quote.play]) {
    play[quote.play] = []
  } else {
    plays[quote.play].push(quote)
  }
}

for (const play in plays) {
  console.log('')
  console.log(`%c${play}`, subheaderStyle)
  for (let i = 1; i < plays[play].length, i++) {
    console.log(`${i}. ${plays[play[i]}`)
  }
}
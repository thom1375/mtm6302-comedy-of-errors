const headerStyle = 'font-size: 24px; font-weight: bold; font-family: sans-serif;'
const subheaderStyle = 'font-size: 16px; font-weight: bold; font-family: sans-serif;'

console.log(`%c"Quotes by William Shakespeare"`, headerStyle)

const plays = {}

for (const thisQuote of quotes) {
  if (!plays[thisQuote.play]) {
    plays[thisQuote.play] = [] // if the play doesn't yet exist, create a new array with play title
    plays[thisQuote.play].push(thisQuote.quote) // CRITICAL! Push this first quote to the new array
  } else {
    plays[thisQuote.play].push(thisQuote.quote) // if the play already exists, push the quote to the array
  }
}
for (const play in plays) {
  console.log('')
  console.log(`%c${play}`, subheaderStyle) // print play title using style from above
  for (let i = 0; i < plays[play].length; i++) { // has to start at 0 to get first element of quotes array for play
    console.log(`${i + 1}. ${plays[play][i]}`) // first quote should be 1, not 0, then print matching quotes from array
  }
}

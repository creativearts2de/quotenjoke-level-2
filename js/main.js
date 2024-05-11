const mainQuoteHome = document.getElementById('#main-quote-area-home')
const theQuoteBody = document.querySelector('#main-quote-area-home .qt-body')
const submitQt = document.getElementById('submit-quote')

// the next and before buttons
const nxtBtn = document.querySelector('.nnb .next')
const prevBtn = document.querySelector('.nnb .prev')

const quoteCount = quotes.length
let displayStat = 0
let displayed = []
for (let i=0; i<quotes.length; i++){
    randValue(quotes.length, displayed)
}

let authors = quotes.map((a)=> a.author)


// new quote area
const allAuthors = Array.from(new Set(authors))

const authorFill = document.getElementById('authornames')

authorFill.innerHTML = allAuthors.reduce((acc, each) => acc += `<option value="${each}">`, '')


theQuoteBody.innerHTML = quoteBody(quotes[displayed[0]])

nxtBtn.addEventListener('click', () =>{
    displayStat++
    console.log(displayStat, displayed[displayStat])
    displayStat < quoteCount ? displayStat : displayStat = 0
    theQuoteBody.innerHTML = quoteBody(quotes[displayed[displayStat]])
})
prevBtn.addEventListener('click', () =>{
    displayStat--
    ((displayStat < quoteCount) && (displayStat > -1)) ? displayStat : displayStat = 0
    theQuoteBody.innerHTML = quoteBody(quotes[displayed[displayStat]])
})

submitQt.addEventListener('submit', e =>{
 e.preventDefault()

 let theSubmit = {}

 const author1 = submitQt.author.value
 const quote1 = submitQt.body.value
 const category = submitQt.category.value
 const rating = submitQt.allowrating.value == 'allow' ? true : false

 theSubmit.author = author1
 theSubmit.quoteBody = quote1
 theSubmit.ratingsAllowed = rating
 theSubmit.category = category

 console.log(theSubmit)
})


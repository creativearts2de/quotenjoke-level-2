const quotes = [
    // {
    //     author: '',
    //     quoteBody: '',
    //     category: '',
    //     quoteID: ''
    // },

    {
        author: 'Name "Undefined"',
        quoteBody: 'I saw a study that said that speaking infront of a crowd is considered the number one fear for the average person. Number two was death. This means that the average person, if you have to be at funeral, you would rather be in the casket than doing the Eulogy',
        category: 'Fun',
        quoteID: '20240420022'
    },
    {
        author: 'Graham Norton',
        quoteBody: 'A good rule to remember for life is that when it comes to plastic surgery and sushi, never be attracted to a burgain',
        category: 'Fun',
        quoteID: '20240420021'
    },
    {
        author: 'George Burns',
        quoteBody: 'You know your getting old when you stop to tie your shoelaces and wonder what else you could do while your down there',
        category: 'Fun',
        quoteID: '20240420021'
    },
    {
        author: 'Bob Hope',
        quoteBody: 'You know your getting old when the candles cost more than the cake',
        category: 'Fun',
        quoteID: '20240420020'
    },
    {
        author: 'Shirley MacLaine',
        quoteBody: 'The best way to get most husbands to do something is to suggest that perhaps they are too old to do it',
        category: 'Fun',
        quoteID: '20240420019'
    },
    {
        author: 'George Carlin',
        quoteBody: 'The other night I ate at a real nice family restaurant. Every table had an urgument going on',
        category: 'Fun',
        quoteID: '20240420018'
    },
    {
        author: 'Mae West',
        quoteBody: 'I generally avoid temptation unless I can not resist it',
        category: 'Fun',
        quoteID: '20240420017'
    },
    {
        author: 'Nora Ephron',
        quoteBody: 'When your children are teenagers, it is important to have a dog so that someone in the house is happy to see you',
        category: 'Fun',
        quoteID: '20240420016'
    },
    {
        quoteBody: 'Everybody knows how to raise kids except those who have them.',
        author: 'P.J. O\'Rourke',
        category: 'Fun',
        quoteID: '20240420015'
    },
    {
        author: 'Prince William',
        quoteBody: 'As I learnt from growing up, you do not mess with your grand mother',
        category: 'Fun',
        quoteID: '20240420014'
    },
    {
        author: 'Phyllis Diller',
        quoteBody: 'I want my children to have all the things I could not afford, then I want to move in with them',
        category: 'Fun',
        quoteID: '20240420013'
    },
    {
        author: 'Jay Leno',
        quoteBody: 'Here is something to think about: How come you never see a headline like \'Psychic wins Lottery\'',
        category: 'Fun',
        quoteID: '20240420012'
    },
    {
        author: 'Isac Asimov',
        quoteBody: 'Those people who think they know everything are a great annoyance to those of us who do',
        category: 'Fun',
        quoteID: '20240420011'
    },
    {
        quoteBody: 'I\'m not offended by Blonde jokes because I know I\'m not dumb.. and I also know that I\'m not blonde',
        author: 'Dolly Parton',
        category: 'Fun',
        quoteID: '20240420010'
    },
    {
        author: 'Joan Rivers',
        quoteBody: 'People say that money is not the key to happiness, but I always figured if you have enough money, you can have a key made',
        category: 'Fun',
        quoteID: '20240420009'
    },
    {
        author: 'Charles M. Schulz',
        quoteBody: 'All you need is love. But a little chocholate now and then doesn\'t hurt',
        category: 'Fun',
        quoteID: '20240420008'
    },
    {
        author: 'Neil Gaiman',
        quoteBody: 'So be wise, because the world needs more wisdom, and if you cannot be wise, pretend to be someone that wise, and then just behave like they would',
        category: 'Fun',
        quoteID: '20240420007'
    },
    {
        author: 'Bo Derek',
        quoteBody: 'Whoever said money can not buy happiness, simply did not know where to go shopping',
        category: 'Fun',
        quoteID: '20240420006'
    },
    {
        author: 'Ellen DeGeneres',
        quoteBody: 'Accept who you are. Unless you are a serial killer',
        category: 'Fun',
        quoteID: '20240420005'
    },
    {
        quoteBody: 'In real life, I assure you, there is no such thing as Algebra',
        author: 'Fran Lebowitz',
        category: 'Fun',
        quoteID: '20240420004'
    },
    {
        author: 'Robin Williams',
        quoteBody: 'Why do they call it Rush hour when nothing moves',
        category: 'Fun',
        quoteID: '20240420003'
    },
    {
        author: 'George Carlin',
        quoteBody: 'Have you ever noticed that anyone driving slower than you is an idiot, and anyone going faster than you is a Maniac',
        category: 'Fun',
        quoteID: '20240420002'
    },
    
    {
        author: 'WIll Ferrell',
        quoteBody: 'Before you marry some one, you should first make them use a computer with slow internet to see who they really are',
        category: 'Fun',
        quoteID: '20240420001'
    },
    {
        author: 'Seneca',
        quoteBody: 'Not how long, but how well you have lived is the main thing',
        category: 'Life',
        quoteID: '20240416005'
    },
    {
        author: 'Steve Jobs',
        quoteBody: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking',
        category: 'Life',
        quoteID: '20240416004'
    },
    {
        quoteBody: 'If you want to live a happy life, tie it to a goal, not to people or things',
        author: 'Albert Einstein',
        category: 'Life',
        quoteID: '20240416003'
    },
    {
        quoteBody: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up',
        author: 'Thomas A. Edson',
        category: 'Life',
        quoteID: '20240416002'
    },
    {
        quoteBody: 'The purpose of our lives is to be happy',
        author: 'Dalai Larma',
        category: 'Life',
        quoteID: '20240416001'
    },
]

quoteOwners = [
    // {
    //     names: '',
    //     image: '',
    //     bio: '',
    //     qouotesCount: 0,
    //     allQuotes: quotes.filter((a) => {
    //         quotes.author == this.names
    //     })
    // },
]

function quoteBody(obj){
    result = ''

    result += `<p>${obj.author}</p>`
    result += `<p>${obj.quoteBody}</p>`

    return result
}

function genRandomList(arr){
    theArr = []



    return theArr
}

function getNumNotInList(arr, checkAgnst){
    let aNum = Math.floor(Math.random()*arr.length)

    return checkAgnst.indexOf(aNum) > 0 ? getNumNotInList(arr, checkAgnst) : aNum
}

function randValue (len, arrToFill, unique = true) {
    let aValue = Math.floor(Math.random()*len)
    if (unique) arrToFill.indexOf(aValue) > -1 ? randValue(len, arrToFill) : arrToFill.push(aValue)
    // return arrToFill
}


// Math.floor(Math.random()*names.length)
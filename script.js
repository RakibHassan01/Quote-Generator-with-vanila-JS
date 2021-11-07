let apiQuotes = []

// show new quote  
function newQuote() {
    // Pick random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
}

// Get Quote From API 
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        // console.log(apiQuotes[12]);
        newQuote()
    } catch (error) {
        // Catch Error Here 

    }
}

// On Load 
getQuotes()


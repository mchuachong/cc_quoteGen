console.log("test3")

const text = document.getElementById("text");
const btn = document.getElementById("new-quote");
const quotesUrl = "https://zenquotes.io/api/random"


const getQuote = () => {
    text.textContent="Clicked!"
    const res = fetch (quotesUrl);
    const data = res.JSON();
    console.log(data);
    
}

btn.addEventListener("click",getQuote);
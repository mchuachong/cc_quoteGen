
console.log("testver1")
const author = document.getElementById("author");
const text = document.getElementById("text");
const textBox = document.getElementById("text-box");
const btn = document.getElementById("new-quote");
const body = document.getElementById("body");
const quotesUrl = "https://thesimpsonsquoteapi.glitch.me/quotes"
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd73081fa78msh47109fdeafb6015p111c25jsn6510ec03d95a',
		'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
	}
};

console.log("test")
const imageUrl = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const getQuote = async () => {
    try {
        text.textContent="Loading";
        author.textContent="-"
        const response = await fetch(quotesUrl);
        const data = await response.json();
        console.log(data);
        text.textContent = `"${data[0].quote}"`;
        author.textContent = `-${data[0].character}`;
        //textBox.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat url(${data[0].image})`;
        body.style.background = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 25% center no-repeat url(${data[0].image})`;
        body.style.backgroundSize = "contain";
      
    } catch (error) {
        console.error(error);
    }}

btn.addEventListener("click",getQuote);
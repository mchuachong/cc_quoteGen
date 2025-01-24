import { Octokit } from "octokit";

console.log("test4")

const text = document.getElementById("text");
const btn = document.getElementById("new-quote");
const quotesUrl = 
"'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2'"

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd73081fa78msh47109fdeafb6015p111c25jsn6510ec03d95a',
		'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
	}
}

console.log("test")

const getQuote = async () => {
    text.textContent="Clicked!"
    console.log("clicked")
    const res = await fetch (quotesUrl,options);
    const data = await res.json();
    text.textContent=data;
    
}

btn.addEventListener("click",getQuote);
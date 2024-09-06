var keywords = [
    {
        quote: "You only live once, but if you do it right, once is enough.", 
        author: "Mae West" 
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.", 
        author: "Oscar Wilde" 
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
        author: "Albert Einstein" 
    },
    {
        quote: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", 
        author: "Albert Einstein" 
    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.", 
        author: "J.K. Rowling, Harry Potter and the Chamber of Secrets" 
    },
    {
        quote: "All men who have turned out worth anything have had the chief hand in their own education.", 
        author: "Walter Scott" 
    },
    {
        quote: "Trust yourself. You know more than you think you do.", 
        author: "Benjamin Spock" 
    },
    {
        quote: "No one can make you feel inferior without your consent.", 
        author: "Eleanor Roosevelt, This is My Story" 
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", 
        author: "Ralph Waldo Emerson" 
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", 
        author: "H. Jackson Brown Jr., P.S. I Love You" 
    }
];

function getQuote() {
    var randomIndex = Math.floor(Math.random() * keywords.length);
    var randomQuote = keywords[randomIndex];

    document.getElementById('quotetext').innerText = randomQuote.quote;
    document.getElementById('quotesource').innerText = randomQuote.author;
}

getQuote();

/**
 * Created by Rick on 01/11/2015.
 */


var quotes = [
    {"quote": "There is more to poker than life.", "author": "Tom McEvoy"},
    {"quote": "If there weren't luck involved, I would win every time.", "author": "Phil Hellmuth"},
    {"quote": "Show me a good loser, and I'll show you a loser.", "author": "Stu Ungar"},
    {
        "quote": "Poker is generally reckoned to be America's second most popular after-dark activity.  Sex is good, they say, but poker lasts longer.",
        "author": " Alfred Alvarez"
    },
    {
        "quote": " It's not whether you won or lost, but how many bad beat stories you were able to tell.",
        "author": "Grantland Rice"
    },
    {"quote": "Never give a sucker an even break.", "author": "Anonymous"},
    {
        "quote": "I believe in poker the way I believe in the American Dream. Poker is good for you. It enriches the soul, sharpens the intellect, heals the spirit, and - when played well, nourishes the wallet.",
        "author": "Anonymous"
    },
    {"quote": "Avoid people with gold teeth who want to play cards.", "author": "George Carlin"},
    {"quote": "Trust everyone, but always cut the cards.", "author": "Benny Binion"},
    {
        "quote": "The next best thing to gambling and winning is gambling and losing.",
        "author": "Nick 'The Greek' Dandalos"
    },
    {"quote": "The single greatest key to winning is knowing thy enemy - yourself.", "author": "Andy Glazer"},
    {"quote": "I never saw a poker player's money that I did not like.", "author": "Oklahoma Johnny Hale"},
    {
        "quote": " If you can't spot the sucker in the first half hour at the table, then you are the sucker.",
        "author": "Matt Damon"
    },
    {"quote": "It's morally wrong to let a sucker keep money.", "author": "Canada Bill Jones"},
    {"quote": "To be a poker champion, you must have a strong bladder.", "author": "Jack McClelland"},
    {"quote": "Money won is twice as sweet as money earned.", "author": "Paul Newman"},
    {
        "quote": "They say poker is a zero-sum game. It must be, because every time I play my sum ends up zero.",
        "author": "Max Shapiro"
    },
    {"quote": "Gambling, the sure way of getting nothing for something.", "author": "Wilson Mizner"}
];

var numberOfQuotes = Object.keys(quotes).length;

function fitTextAreaToQuote(QuoteTextArea) {
    if (QuoteTextArea.clientHeight != QuoteTextArea.scrollHeight) {
        QuoteTextArea.style.height = QuoteTextArea.scrollHeight + "px";
    }
}

function randomQuote(QuoteTextArea) {
    QuoteTextArea.style.height = 10 + "px";
    var quoteNum = Math.floor(Math.random() * numberOfQuotes);
    var quote = quotes[quoteNum].quote;
    var author = quotes[quoteNum].author;
    document.getElementById("quoteBox").innerHTML = quote;
    document.getElementById("authorBox").innerHTML = author;
    fitTextAreaToQuote(QuoteTextArea);
}

var textAreaRef = document.getElementById('quoteBox');

window.onload = function() {
    randomQuote(textAreaRef);
};
const quotes = [
    "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    "No one can make you feel inferior without your consent.",
    "The most common way people give up their power is by thinking they don’t have any.",
    "Well-behaved women seldom make history.",
    "The question isn’t who’s going to let me; it’s who’s going to stop me.",
    "I am deliberate and afraid of nothing.",
    "A woman is like a tea bag – you never know how strong she is until she gets in hot water.",
    "I am not free while any woman is unfree, even when her shackles are very different from my own.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "I have learned over the years that when one's mind is made up, this diminishes fear."
  ];
  
let array1 = [];

function generateRandomArray(){

    let arrayIndex = [];
    for(let i = 0; i < quotes.length; i++){
        arrayIndex.push(i);
    }
    
    for (let i = arrayIndex.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayIndex[i], arrayIndex[j]] = [arrayIndex[j], arrayIndex[i]];
    }

    return arrayIndex;
}

document.getElementById('generator').addEventListener('click', function() {
    if(array1.length === 0){
        array1 = generateRandomArray();
    };
let nextQuoteId = array1.pop();
document.getElementById('quote').innerHTML = quotes[nextQuoteId];
});
    

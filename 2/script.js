document.getElementById('checkButton').addEventListener('click', function() {
    const text = document.getElementById('input').value;
    convertedText = text.toLowerCase();
    if (convertedText) {
        isPalindrom(convertedText);
    } else {
        alert("Please enter a text");
    }
});

function isPalindrom(text){
    let text2 = "";
    for(let i = text.length-1;i >= 0; i--){
        text2 += text[i];
    }

    if(text === text2){
        alert("Yes it is a palindrom");
    }else{
        alert("No it is not a palindrom");
    }
}
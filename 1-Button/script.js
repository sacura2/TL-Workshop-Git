document.getElementById('redbutton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
    document.getElementById('headline').style.color = 'white';
});

document.getElementById('greenbutton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
    document.getElementById('headline').style.color = 'white';
});

document.getElementById('bluebutton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
    document.getElementById('headline').style.color = 'white';
});

document.getElementById('randombutton').addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const oppositeColor = (parseInt(randomColor, 16) ^ 0xFFFFFF).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    document.getElementById('headline').style.color = '#' + oppositeColor;
});



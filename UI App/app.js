var index;
var score = 0;

function generateColors(){

var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);

var Color = `RGB(${r}, ${g}, ${b})`;

var rgb = document.getElementById("rgb");
rgb.textContent = Color;

var container = document.getElementById("container");
var ball = container.getElementsByClassName("ball");
// trond div to lay div be nho classname

index = Math.floor(Math.random() * 3);
ball[index].style.backgroundColor = Color;

    for (i=0; i<ball.length; i++){
        if (i != index)
        {
        var err1 = Math.floor(Math.random() * 100 + 50);
        var x = Math.random();
        if (x<0.5)
            err1 = -err1;

        var err2 = Math.floor(Math.random() * 100 + 50);
        var x = Math.random();
        if (x<0.5)
            err2= -err2;
    
        var err3 = Math.floor(Math.random() * 100 + 50);
        var x = Math.random();
        if (x<0.5)
            err3 = -err3;

        var wrongColor = `RGB(${r + err1}, ${g + err2}, ${b + err3})`;
        ball[i].style.backgroundColor = wrongColor;
        }
    }
}

function setupEvents(){

var container = document.getElementById("container");
var ball = container.getElementsByClassName("ball") ;
    for (i=0;i<ball.length;i++){
        ball[i].addEventListener("click", function(f)
        {   
            var balls = f.target;
            var ballIndex = balls.getAttribute("index");
            if ( ballIndex == index)
            {
                score++;
            }
            else
            {
                score = 0;
            }
            var newScore = document.getElementById("score");
            newScore.textContent = `SCORE: ${score}`;
            generateColors();
        })
    }
}

generateColors();
setupEvents();



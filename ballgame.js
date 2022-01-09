// js for starting the barrier animation
document.getElementById("play").onclick = function() {play()
}

document.getElementById("pause").onclick = function() {pauseAnimation()}



// js for getting the measnurement of elements to use while detecting the collapse
let ball = document.getElementById("ball")
let barrier = document.getElementById("barrier1")
var ballWidth = ball.offsetWidth
var barrierWidth = barrier.offsetWidth
var barrierHeight = barrier.offsetHeight
var ballMarginTop = 55*(document.documentElement.clientHeight/100)
var ballMarginLeft = 15*((document.documentElement.clientWidth)/100)






// js for bouncing the ball when up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key == 'ArrowUp') {
     addAnimation()


     var p = document.getElementById("barrier1");
    var style = p.currentStyle || window.getComputedStyle(p);
    var gap = style.marginLeftf
    }
  });






// js for adding the animation class to the ball
function addAnimation(){
        var element = document.getElementById("ball");
        element.classList.add("bounceit");
        setTimeout(removeAnimation, 800);
}

// js for removing the animation class from the ball
function removeAnimation(){
    var element = document.getElementById("ball");
    element.classList.remove("bounceit");
}






// js for starting the game and also to set the initial speed of barrier according to the viewport width


function play(){
    var widthOfScreen = window.innerWidth
var speed = (((widthOfScreen*9)/((2*widthOfScreen)+900))-0.8);
var speedstr = speed.toString()+"s"

var animation = (`rotate 2s linear infinite, move ${speedstr} linear infinite`)

document.getElementById("barrier1").style.animation = animation;
increaseSpeed(speed)
}




// js for pausing the game
function pauseAnimation(){
    document.getElementById("barrier1").style.animationPlayState = "paused";
}




function increaseSpeed(speed){
    setInterval(() => {

    if(document.getElementById("barrier1").style.animationPlayState == "paused"){

    }
    else{
        console.log("interval started and the sped is "+speed);
        speed -= 0.0020;
    var speedstr = speed.toString()+"s"
    
    var animation = (`rotate 2s linear infinite, move ${speedstr} linear infinite`)
    
    document.getElementById("barrier1").style.animation = animation;
    }
}, 5000);
}




// js for checking the collapse in x direction
setInterval(() => {

var p = document.getElementById("barrier1");
    var style = p.currentStyle || window.getComputedStyle(p);
    var barrierMarginLeft = parseInt(style.marginLeft);


    if (barrierMarginLeft<(ballMarginLeft+ballWidth-9)&& barrierMarginLeft>(ballMarginLeft-barrierWidth+9)){
        checkYCollapse();
    }

    }, 1);
    var score = 0;


    // checking the collapse in y deirection

    function checkYCollapse(){
        var p = document.getElementById("ball");
        var style = p.currentStyle || window.getComputedStyle(p);
        var ballMarginInitial = parseInt(style.marginTop)
        ;
        if((ballMarginTop-ballMarginInitial+11)<barrierHeight){
            pauseAnimation()
            location.reload();
            alert("GAME OVER! Play Again?")
        }

        // condition in which thw score will be updated on the screen
        else{
            score +=5;
var scoreStatus = "SCORE : " + score
            document.getElementById("showscore").innerHTML = scoreStatus;
        }

    }
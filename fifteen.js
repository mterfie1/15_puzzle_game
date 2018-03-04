var id_empty;
var countMoves;
var finishedPuzzle = false;
var timer=0;
var timerClear = '';
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var backgroundImages = ["minion.jpg", "mario.jpg", "ninja.jpg", "tom.jpg"];

var selectBg = Math.floor(Math.random() * 4);

var backgroundImage = backgroundImages[selectBg];

function changeBg(y) {
    var newBg = y.value.substr(2);
    selectBg = y.value.substr(0,1);
    backgroundImage = backgroundImages[selectBg];
    if(y.value == 0) {
        return;
    }
    else {
        for(var i=0; i<document.getElementsByClassName('cell').length; i++) {
            document.getElementsByClassName('cell')[i].style.backgroundImage = "url('" + newBg + "')";
        }
    }
}

window.addEventListener("load", startTimer, false);

/* Function to start game timer */
function startTimer()
{
    timerClear = window.setInterval("updateTime()", 1000);
} 

/* Function to update game timer */
function updateTime()
{ 
    ++timer;
    document.getElementById("time").innerHTML ="Time spent in current game: " +timer +" (seconds)";
} 

/* Function to start and shuffle cell boxes randomly */
function startPuzzle() {
    timer = 0;

    countMoves = 0;
    finishedPuzzle = false;

    for(var i=0; i < 16; i++) {
        var tmp = document.getElementById("cell-" + i);
        tmp.className = "cell ";
    }

    randomNumber = nums.sort(function () { return (Math.round(Math.random())-0.5);});
    while(!Problem.prototype.is_solvable(randomNumber)) {
        randomNumber = nums.sort(function () { return (Math.round(Math.random())-0.5);});
    }

    for(var i=0; i < 16; i++) {
        var tmp = document.getElementById("cell-" + i);
        if(randomNumber[i] == 16) {
            tmp.className = "cell empty";
            tmp.innerHTML = "";
            id_empty = i;
        }
        else
            tmp.innerHTML = randomNumber[i];
    }

    updateBackground();

}

/* Function to reset game in sequence */
function resetGame(){
    if(finishedPuzzle)
    {
        window.location.reload();
    }
    timer = 0;
    countMoves = 0;
    document.getElementById("moves").innerHTML = "Moves so far: " + countMoves;
    for(var i=0; i < 16; i++) {
        var tmp = document.getElementById("cell-" + i);
        if(i == 15) {
            tmp.className = "cell empty";
            tmp.innerHTML = "";
            id_empty = i;
        }
        else if(i == 14) {
            tmp.className = "cell";
            tmp.innerHTML = "15";
        }
        else{
            tmp.innerHTML = i+1;
            tmp.className = "cell";
        }
    }
    updateBackground();
}


/* Function for cell boxes when they're clicked */
function clickCell(x)
{
    if(finishedPuzzle)
        return;

    if(x.id.substr(5) != id_empty+'') {
        var emptyI = Math.floor(id_empty/4);
        var emptyJ = id_empty % 4;
        var id_selected = Number(x.id.substr(5));
        var selectedI = Math.floor(id_selected/4);
        var selectedJ = id_selected % 4;

        if((Math.abs(emptyI - selectedI) == 1 && emptyJ == selectedJ) ||
           (Math.abs(emptyJ - selectedJ) == 1 && emptyI == selectedI)) {

            document.getElementById("cell-" + id_empty).className = "cell";
            document.getElementById("cell-" + id_empty).innerHTML = x.innerHTML;
            
            x.className = "cell empty";
            x.innerHTML = '';
            
            id_empty = id_selected;
            countMoves++;

            document.getElementById("moves").innerHTML = "Moves so far: " + countMoves;
            
            if(isDone()){
                finishedPuzzle = true;
                document.getElementById("moves").innerHTML = "Congrats! Completed in  " + countMoves + " moves.";
                // reset timer
                clearInterval(timerClear);
                timer = 0;
            }
        }
    }

    updateBackground();
}

/* Function to check if puzzle is solved or not */
function isDone() {
    return document.getElementById('cell-0').innerHTML == '1' &&
        document.getElementById('cell-1').innerHTML == '2' &&
        document.getElementById('cell-2').innerHTML == '3' &&
        document.getElementById('cell-3').innerHTML == '4' &&
        document.getElementById('cell-4').innerHTML == '5' &&
        document.getElementById('cell-5').innerHTML == '6' &&
        document.getElementById('cell-6').innerHTML == '7' &&
        document.getElementById('cell-7').innerHTML == '8' &&
        document.getElementById('cell-8').innerHTML == '9' &&
        document.getElementById('cell-9').innerHTML == '10' &&
        document.getElementById('cell-10').innerHTML == '11' &&
        document.getElementById('cell-11').innerHTML == '12' &&
        document.getElementById('cell-12').innerHTML == '13' &&
        document.getElementById('cell-13').innerHTML == '14' &&
        document.getElementById('cell-14').innerHTML == '15';
}



/* Function to update background for boxes */
function updateBackground() {
    
    for(var reset = 0; reset < 16; reset++) {
        if(document.getElementsByClassName("cell")[reset].innerHTML == 1) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "0 0";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 2) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-100px 0";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 3) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-200px 0";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 4) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-300px 0";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 5) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "0 -100px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 6) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-100px -100px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 7) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-200px -100px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 8) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-300px -100px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 9) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "0 -200px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 10) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-100px -200px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 11) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-200px -200px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 12) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-300px -200px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 13) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "0 -300px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 14) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-100px -300px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == 15) {
            document.getElementsByClassName("cell")[reset].style.background = "url('" + backgroundImage + "')";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-200px -300px";
        }
        if(document.getElementsByClassName("cell")[reset].innerHTML == "") {
            document.getElementsByClassName("cell")[reset].style.background = "none";
            document.getElementsByClassName("cell")[reset].style.backgroundPosition = "-300px -300px";
        }
    }
}

Array.prototype.clone = function() { return this.slice(0); };
Array.prototype.swap = function(i1,i2) {
    var copy = this.clone();
    var tmp = copy[i1];
    copy[i1] = copy[i2];
    copy[i2] = tmp;
    return copy;
};

var Problem = function(start_state) {
    this.init_state = start_state;
    return this;
}

Problem.prototype.is_solvable = function(start) {
    start = start.clone();    start.splice(start.indexOf(16), 1);
    start[15] = 16;
    var count = 0;
    for(var i = 0; i < 15; i++) {
        if(start[i] != i+1) {
            count++;
            var j = start.indexOf(i+1);
            start[j] = start[i];
            start[i] = i+1;
        }
    }
    return count % 2 == 0;
}


updateBackground();
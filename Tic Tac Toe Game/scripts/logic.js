window.addEventListener('load', bindEvents);

function bindEvents() {
    var buttons = document.getElementsByTagName('button');
    console.log(buttons);
    for (var i = 0; i < buttons.length; i++) {
        var currentButton = buttons[i];
        currentButton.addEventListener('click', printXorZero); //Event Binding
    }
}

function isNotBlank(currentButton) {
    return currentButton.innerText.trim().length > 0
}

// maintain a count,to check if count goes greater than 4 then check game over condition
function isgameover() {
    var buttons = document.getElementsByTagName('button');
    var board = [
        [buttons[0].innerText, buttons[1].innerText, buttons[2].innerText],
        [buttons[3].innerText, buttons[4].innerText, buttons[5].innerText],
        [buttons[6].innerText, buttons[7].innerText, buttons[8].innerText]
    ]; //initialising the board

    // in game over condition 
    // 1. row values are same
    // 2. cpolumn values are same
    // 3. diagonal values are same
    
    //==== Check rows and columns
    for (var i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
            return true;
        }
        if (board[0][i] && board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
            return true;
        }
    }

    //=== Check diagonals
  
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }
    return false;

}

function reset() {
    clearInterval(interval);
    blocked = false;
    // single response principle
    // dont repeat the same code
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerText = "";
    }
    document.getElementById('Gameover').classList.remove('gameOver');
    document.getElementById("Gameover").innerText="";
    flag = true;
    count = 0;
}
var countDownValue = 5;
var interval;
function countDown(){
     interval = setInterval(function(){
        countDownValue--;
        document.getElementById('Gameover').innerText = `Game Over and Reset After $(countDownValue) Seconds`;
     }, 1000);
}
function resetAfter5sec() {
    setTimeout(function() {
        reset()
    }, 5000);
}

var flag = true;
var count = 0;
var blocked = false;

function printXorZero() {
    if (!blocked && this.innerText.trim().length == 0) {
        count++;

        var buttonValue = flag? "X" : "0";
        this.innerText = buttonValue;
        flag =!flag;
        if (count >= 5) {
            if (isgameover()) {
                blocked = true;
                document.getElementById('Gameover').innerText = "Game Over and Reset After 5 Seconds";
                resetAfter5sec();
            }
        }
    }
}
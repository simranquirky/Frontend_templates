alert("Created with ❤ by Abhishek Anand");
var targetFPS = 60;
var minGroundMovesPerSec = 50;
var maxGroundMovesPerSec = 217;
var ballOnGroundMovesPerSec = 200;
var ballFlyingMovesPerSec = 100;
var ballFlyingDownPerSec = 180;
var ballFlyingDownAccele = 5;
var groundHolesProbability = {
    1: 1,
    2: 0.2
};
var isDarkMode;
var canvas;
var ctx;
var level_num;
var highest_level_num;
var restartBtn;
var nowGroundMovesPerSec;
var nowBallToLeft;
var nowBallToRight;
var nowBallOnGround;
var nowBallMovesPerSec;
var nowBallDownPerSec;
var nowLevel;
var lastTickGroundMove;
var lastTickBallMove;
var grounds = [];
var ball = new Ball();
var gameLoop;
var highestLevel;
function updateEvent() {
    var now = new Date().getTime();
    var lapA = now - lastTickGroundMove;
    var mpsA = 1000 / nowGroundMovesPerSec;
    var boolA = lapA > mpsA;
    var lapB = now - lastTickBallMove;
    var mpsB = 1000 / Math.max(nowBallMovesPerSec, nowBallDownPerSec);
    var boolB = lapB > mpsB;
    if (boolA || boolB)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (boolA) {
        updateGrounds(lapA);
        lastTickGroundMove = now;
    }
    if (boolB) {
        updateBall(lapB);
        lastTickBallMove = now;
    }
    grounds.forEach(function (g) { return g.draw(); });
    ball.draw();
    level_num.innerText = nowLevel + '';
    highest_level_num.innerText = highestLevel + '';
    console.log("loop");
}
function updateGrounds(lap) {
    var upPixel = lap * nowGroundMovesPerSec / 1000;
    var target;
    grounds.forEach(function (g) { return g.y -= upPixel; });
    while ((target = grounds[0]) != undefined) {
        if (target.y + target.blockHeight < 0) {
            nowLevel++;
            highestLevel = Math.max(nowLevel, highestLevel);
            grounds.shift();
        }
        else
            break;
    }
    var lastGround = grounds[grounds.length - 1];
    var buildHeight = Math.max(canvas.height, ball.y + ball.radius);
    var maxHeight = lastGround ? lastGround.y + lastGround.blockHeight : 60; // 60 init height
    while (maxHeight < buildHeight) {
        grounds.push(target = new Ground(maxHeight));
        maxHeight += target.topMargin + target.blockHeight;
    }
    ball.y -= upPixel;
}
function updateBall(lap) {
    if (ball.y - ball.radius < 0) {
        endGame();
        return;
    }
    var DownPixel = lap * nowBallDownPerSec / 1000;
    var touchTheGround = false;
    var _loop_1 = function (i) {
        var ballUnder = ball.y + ball.radius;
        grounds.forEach(function (g) {
            if (touchTheGround)
                return;
            var gap = g.y - ballUnder;
            if (gap <= 1 && gap >= 0) {
                if (g.isXRange(ball))
                    touchTheGround = true;
            }
        });
        if (touchTheGround)
            return "break";
        ball.y++;
    };
    for (var i = 0; i <= DownPixel; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    var HorPixel = lap * nowBallMovesPerSec / 1000;
    console.log(HorPixel);
    var touchTheWall = false;
    for (var i = 0; i <= HorPixel; i++) {
        if (!touchTheGround) {
            grounds.forEach(function (g) {
                if (touchTheWall)
                    return;
                if (g.isYRange(ball) && g.isXRange(ball))
                    touchTheWall = true;
            });
        }
        if ((ball.x - ball.radius <= 1 && nowBallToLeft) ||
            (ball.x + ball.radius >= canvas.width - 1 && nowBallToRight))
            touchTheWall = true;
        if (touchTheWall)
            break;
        ball.x += (Number(nowBallToRight) - Number(nowBallToLeft));
    }
    updateBallSpeed(touchTheGround);
}
function updateBallSpeed(isTouch) {
    if (!isTouch)
        nowBallDownPerSec += ballFlyingDownAccele;
    if (nowBallOnGround != isTouch) {
        if (isTouch) {
            nowGroundMovesPerSec = Math.min(nowGroundMovesPerSec + 5, maxGroundMovesPerSec);
        }
        nowBallDownPerSec = ballFlyingDownPerSec;
    }
    nowBallOnGround = isTouch;
}
function endGame() {
    clearInterval(gameLoop);
    console.log('Game over');
    ctx.textAlign = "center";
    ctx.fillStyle = isDarkMode ? '#DDD' : "#333";
    ctx.font = '40px sans-serif';
    var textString = "GAME OVER";
    ctx.fillText(textString, canvas.width / 2, canvas.height / 2);
    restartBtn.style.display = 'block';
    document.cookie = "highest=" + highestLevel;
}
function restartGame() {
    restartBtn.style.display = '';
    startGame();
}
function startGame() {
    var now = new Date().getTime();
    lastTickGroundMove = now;
    lastTickBallMove = now;
    nowGroundMovesPerSec = minGroundMovesPerSec;
    nowBallToLeft = false;
    nowBallToRight = false;
    nowBallOnGround = false;
    nowBallMovesPerSec = ballOnGroundMovesPerSec;
    nowBallDownPerSec = ballFlyingDownPerSec;
    nowLevel = 1;
    grounds = [];
    ball = new Ball();
    gameLoop = setInterval(updateEvent, 1000 / targetFPS);
}
function tryRestartGame() {
    if (restartBtn.style.display != '')
        restartGame();
}
(function () {
    isDarkMode = document.body.classList.contains('dark');
    canvas = document.getElementById("main");
    level_num = document.querySelector('#level-num');
    highest_level_num = document.querySelector('#highest-num');
    restartBtn = document.querySelector('#middle-btn');
    highestLevel = parseInt(document.cookie.split('=')[1]) || 0;
    console.log(document.cookie);
    if (canvas == null)
        return;
    ctx = canvas.getContext("2d");
    document.body.addEventListener('keydown', function (e) {
        if (e.keyCode == 37 || e.keyCode == 65)
            nowBallToLeft = true;
        else if (e.keyCode == 39 || e.keyCode == 68)
            nowBallToRight = true;
    });
    document.body.addEventListener('keyup', function (e) {
        if (e.keyCode == 37 || e.keyCode == 65)
            nowBallToLeft = false;
        else if (e.keyCode == 39 || e.keyCode == 68)
            nowBallToRight = false;
        else if (e.keyCode == 13)
            tryRestartGame();
    });
    startGame();
})();

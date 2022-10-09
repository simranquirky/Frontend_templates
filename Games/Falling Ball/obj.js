function inRangeRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}
var Block = /** @class */ (function () {
    function Block(startX, holesLeft) {
        var blocksLeft = holesLeft; // no add 1
        var rightSideMinReq = (Block.minWidth * blocksLeft +
            Block.minRightMargin * holesLeft);
        this.x = startX;
        var maxWidth = canvas.width - rightSideMinReq - startX;
        var minWidth = Block.minWidth;
        this.width = holesLeft == 0 ? maxWidth : inRangeRandom(minWidth, maxWidth);
        //console.log(`${minWidth} ~ ${maxWidth} : ${this.width} : ${holesLeft}`);
        this.rightMargin = inRangeRandom(Block.minRightMargin, Block.maxRightMargin);
    }
    Block.minWidth = 100;
    Block.minRightMargin = 30;
    Block.maxRightMargin = 40;
    return Block;
}());
var Ground = /** @class */ (function () {
    function Ground(startY) {
        this.blockHeight = 20; // pixel
        this.topMargin = 100; // pixel
        this.blocks = [];
        this.y = this.topMargin + startY;
        var holesCount = 1;
        var minP = 1;
        var r = Math.random();
        for (var count in groundHolesProbability) {
            var targetP = groundHolesProbability[count];
            if (targetP > r && targetP < minP) {
                holesCount = Number(count);
                minP = targetP;
            }
        }
        var blocksCount = holesCount + 1;
        var holesLeft = holesCount;
        var target;
        var maxX = 0;
        for (var i = 0; i < blocksCount; i++, holesLeft--) {
            this.blocks.push(target = new Block(maxX, holesLeft));
            maxX += target.width + target.rightMargin;
        }
    }
    Ground.prototype.isYRange = function (ball) {
        return (this.y < ball.y + ball.radius && this.y + this.blockHeight > ball.y - ball.radius);
    };
    Ground.prototype.isXRange = function (ball) {
        var rtn = false;
        this.blocks.forEach(function (b) {
            if (rtn)
                return;
            //console.log(b.x + " ~ " + b.width + " : " + ball.x);
            if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + b.width)
                rtn = true;
        });
        return rtn;
    };
    Ground.prototype.draw = function () {
        var _this = this;
        ctx.fillStyle = isDarkMode ? 'blue' : 'lightblue';
        this.blocks.forEach(function (b) { return ctx.fillRect(b.x, _this.y, b.width, _this.blockHeight); });
    };
    return Ground;
}());
var Ball = /** @class */ (function () {
    function Ball() {
        this.x = 150;
        this.y = 100;
        this.radius = 10;
    }
    Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 0;
        ctx.strokeStyle = isDarkMode ? '#fff' : '#000';
        ctx.stroke();
    };
    return Ball;
}());

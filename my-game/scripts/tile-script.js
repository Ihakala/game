var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var tileWidth = 10;
var tileHeight = 10;
var tileRowCount = 55;
var tileColumnCount = 50;
var tilePadding = 0;
var tileOffsetTop = 0;
var tileOffsetLeft = 0;

var tiles = [];
for(var c=0; c<tileColumnCount; c++) {
    tiles[c] = [];
    for(var r=0; r<tileRowCount; r++) {
        tiles[c][r] = { x: 0, y: 0 };
    }
}

var selectedTile = tiles.onClick

function drawTiles() {
    for(var c=0; c<tileColumnCount; c++) {
        for(var r=0; r<tileRowCount; r++) {
            var tileX = (c*(tileWidth+tilePadding))+tileOffsetLeft;
            var tileY = (r*(tileHeight+tilePadding))+tileOffsetTop;
            tiles[c][r].x = tileX;
            tiles[c][r].y = tileY;
            ctx.beginPath();
            ctx.rect(tileX, tileY, tileWidth, tileHeight);
            ctx.strokeStyle = "rgba(0, 0, 0, 0.25";
            ctx.stroke();
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.closePath();
        }
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTiles();
}

var interval = setInterval(draw, 10);
var socket = io();

var side = 50;

weath = "winter"

function setup() {
  createCanvas(30 * side, 20 * side);
  background("#acacac");
}

socket.on("weather", function (data) {
  weath = data;
})

function nkarel(matrix) {
  
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        var obj = matrix[y][x];
        if (obj == 1) {
          
          if(weath == "summer") {
            fill("green");
        }else if (weath == "autumn") {
            fill("#333300");
        }else if (weath == "winter") {
            fill("white");
        }else if (weath == "spring") {
            fill("#4dffa6");
        }
        rect(x * side, y * side, side, side);
  
        }
            
        else if (obj == 0) {
          fill("#acacac");
          rect(x * side, y * side, side, side);
  
        }
        else if (obj == 2) {
          fill("yellow");
          rect(x * side, y * side, side, side);
  
        }
        else if (obj == 3) {
          fill("red");
          rect(x * side, y * side, side, side);
  
        }
        else if (obj == 4) {
          fill("blue");
          rect(x * side, y * side, side, side);
  
        }
        else if (obj == 5) {
          fill("orange");
          rect(x * side, y * side, side, side);
  
        }
      }
    }
  
  }
  
function kill() {
  socket.emit("kill")
}
function killdiagonal() {
  socket.emit("killdiagonal")
}
function addGrass() {
  socket.emit("add grass")
}
function addGrassEater() {
  socket.emit("add grassEater")
}
function addGishatich() {
  socket.emit("add Gishatich")
}
function addmyHeroone() {
  socket.emit("add myheroone")
}
function addmyHerotwo() {
  socket.emit("add myherotwo")
}
  setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)
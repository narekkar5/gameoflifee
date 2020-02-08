var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

matrix = [];
grassArr = [];
grassEater = [];
gishatich = [];
myfirsthero = [];
mysecondhero = [];
var eatererkrordqanak = 25;
Grass = require('./grass');
GrassEater = require('./GrassEater');
GishaticKarmir = require('./GishaticKarmir');
MyHeroOne = require('./MyHeroOne');
MyHeroTwo = require('./MyHeroTwo');
weath = "winter";


for (var i = 0; i < 20; i++) {
    matrix[i] = [];
    for (var k = 0; k < 30; k++) {
      matrix[i][k] = Math.floor(Math.random() * 5);
    }
  }

  io.sockets.emit('send matrix' , matrix)




  function createObject(matrix){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
          if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
            
          }
          else if (matrix[y][x] == 2) {
            var greater = new GrassEater(x, y, 2);
            grassEater.push(greater);
            
    
          }
          else if (matrix[y][x] == 3) {
            var gishat = new GishaticKarmir(x, y, 3);
            gishatich.push(gishat);
          }
          else if (matrix[y][x] == 4) {
            var myhero = new MyHeroOne(x, y, 4);
            myfirsthero.push(myhero);
          }
          else if (matrix[y][x] == 5) {
            var myherotw = new MyHeroTwo(x, y, 5);
            mysecondhero.push(myherotw);
          }
        }
      }
  io.sockets.emit('send matrix', matrix)
  }

  function game() {
      
    for (var i in grassArr) {
        grassArr[i].mul();
    
      }
      for (var i in grassEater) {
        grassEater[i].move();
        grassEater[i].eat();
        grassEater[i].mul();
        grassEater[i].die();
        
    
      }
      for (var i in gishatich) {
        gishatich[i].move();
        gishatich[i].eat();
        gishatich[i].mul();
        gishatich[i].die();
    
      }
      for (var i in myfirsthero) {
        myfirsthero[i].move();
        myfirsthero[i].eat();
        myfirsthero[i].eatmotik();
        myfirsthero[i].mul();
        myfirsthero[i].die();
      }
      for (var i in mysecondhero) {
    
        mysecondhero[i].move();
        mysecondhero[i].eat();
        mysecondhero[i].mul();
        mysecondhero[i].die();
      }

    if (eatererkrordqanak > 0) {
        if (grassEater.length == 0) {
          var y = Math.floor(Math.random() * 19);
          var x = Math.floor(Math.random() * 30);
          matrix[y][x] = 2;
          var greater = new GrassEater(x, y, 2);
          grassEater.push(greater);
          eatererkrordqanak--
        }
        if (grassArr.length == 0) {
          var y = Math.floor(Math.random() * 19);
          var x = Math.floor(Math.random() * 30);
    
          matrix[y][x] = 1;
          var gr = new Grass(x, y, 1);
          grassArr.push(gr);
        }
      }
    
      if (grassEater.length > 1 && gishatich.length == 0) {
        var y = Math.floor(Math.random() * 19);
        var x = Math.floor(Math.random() * 20);
        matrix[y][x] = 3;
        var gish = new GishaticKarmir(x, y, 3);
        gishatich.push(gish);
      }
      if (gishatich.length > 1 && myfirsthero.length == 0) {
        var y = Math.floor(Math.random() * 19);
        var x = Math.floor(Math.random() * 20);
        matrix[y][x] = 4;
        var herofir = new MyHeroOne(x, y, 4);
        myfirsthero.push(herofir);
      }
      if (myfirsthero.length > 0 && mysecondhero.length == 0) {
        var y = Math.floor(Math.random() * 19);
        var x = Math.floor(Math.random() * 20);
        matrix[y][x] = 5;
        var herotw = new MyHeroTwo(x, y, 5);
        mysecondhero.push(herotw);
      }
  io.sockets.emit("send matrix",matrix)
  }

  setInterval(game, 1000);
  function kill() {
    grassArr = [];
    grassEater = [];
    gishatich = [];
    myfirsthero = [];
    mysecondhero = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function killdiagonal() {
  for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if( x == y){
          matrix[y][x] = 0;
        }
      }
  }

  io.sockets.emit("send matrix", matrix);
}
function addGrass() {
  for (var i = 0; i < 7; i++) {
  var x = Math.floor(Math.random() * matrix[0].length)
  var y = Math.floor(Math.random() * matrix.length)
      if (matrix[y][x] == 0) {
          matrix[y][x] = 1
          var gr = new Grass(x, y, 1)
          grassArr.push(gr)
      }
  }
  io.sockets.emit("send matrix", matrix);
}
function addGrassEater() {
  for (var i = 0; i < 7; i++) {   
  var x = Math.floor(Math.random() * matrix[0].length)
  var y = Math.floor(Math.random() * matrix.length)
      if (matrix[y][x] == 0) {
          matrix[y][x] = 2
          grassEater.push(new GrassEater(x, y, 2))
      }
  }
  io.sockets.emit("send matrix", matrix);
}
function addGishatich() {
  for (var i = 0; i < 7; i++) {   
  var x = Math.floor(Math.random() * matrix[0].length)
  var y = Math.floor(Math.random() * matrix.length)
      if (matrix[y][x] == 0) {
          matrix[y][x] = 3
          gishatich.push(new GishaticKarmir(x, y, 3))
      }
  }
  io.sockets.emit("send matrix", matrix);
}
function addmyherofirst() {
  for (var i = 0; i < 7; i++) {   
  var x = Math.floor(Math.random() * matrix[0].length)
  var y = Math.floor(Math.random() * matrix.length)
      if (matrix[y][x] == 0) {
          matrix[y][x] = 4
          myfirsthero.push(new MyHeroOne(x, y, 4))
      }
  }
  io.sockets.emit("send matrix", matrix);
}
function addmyherosecond() {
  for (var i = 0; i < 7; i++) {   
  var x = Math.floor(Math.random() * matrix[0].length)
  var y = Math.floor(Math.random() * matrix.length)
      if (matrix[y][x] == 0) {
          matrix[y][x] = 5
          mysecondhero.push(new MyHeroTwo(x, y, 5))
      }
  }
  io.sockets.emit("send matrix", matrix);
}

function weather() {
  if (weath == "winter") {
      weath = "spring"
  }
  else if (weath == "spring") {
      weath = "summer"
  }
  else if (weath == "summer") {
      weath = "autumn"
  }
  else if (weath == "autumn") {
      weath = "winter"
  }
  io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);

  io.on('connection', function(socket){
      createObject(matrix);
      socket.on("kill", kill);
      socket.on("killdiagonal", killdiagonal);
      socket.on("add grass", addGrass);
      socket.on("add grassEater", addGrassEater);
      socket.on("add Gishatich", addGishatich);
      socket.on("add myheroone", addmyherofirst);
      socket.on("add myherotwo", addmyherosecond);
  })
  var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEater.length;
    statistics.gishatich = gishatich.length; 
    statistics.myfirsthero = myfirsthero.length; 
    statistics.mysecondhero = mysecondhero.length; 
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)

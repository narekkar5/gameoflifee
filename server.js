var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/',function (req, res){
 res.redirect('index.html')
});

server.listen(3000);
matrix = [];





for (var i = 0; i < 20; i++) {
    matrix[i] = [];
    for (var k = 0; k < 30; k++) {
      matrix[i][k] = Math.floor(Math.random() * 5);
    }
  }

  io.sockets.emit('send matrix' , matrix)

  Grass = require('./grass');
  GrassEater = require('./GrassEater');
  GishaticKarmir = require('./GishaticKarmir');
  MyHeroOne = require('./MyHeroOne');
  MyHeroTwo = require('./MyHeroTwo');
   grassArr = [];
   grassEater = [];
   gishatich = [];
   myfirsthero = [];
   mysecondhero = [];
  var eatererkrordqanak = 25;


  function createObject(matrix){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
          if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
            console.log(gr);
          }
          else if (matrix[y][x] == 2) {
            var greater = new GrassEater(x, y, 2);
            grassEater.push(greater);
            console.log(greater);
    
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

  io.on('connection', function(){
      createObject(matrix)
  })

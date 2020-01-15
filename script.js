var matrix = [
  [0, 0, 1, 0, 0],
  [1, 0, 2, 2, 0],
  [0, 2, 3, 2, 0],
  [0, 2, 2, 2, 0],
  [1, 1, 3, 2, 0],
  [1, 1, 2, 2, 0],
  [1, 1, 2, 2, 2]
];

var grassArr = [];
var grassEater = [];
var gishatich = [];
var myfirsthero = [];
var mysecondhero = [];
var eatererkrordqanak = 15;
var side = 50;


function setup() {
  frameRate(5)
  for (var i = 0; i < 20; i++) {
    matrix[i] = [];
    for (var k = 0; k < 40; k++) {
      matrix[i][k] = Math.round(random(0, 5));
    }
  }
  console.log(matrix)
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
  console.log(grassArr);
  console.log(grassEater);
  console.log(gishatich);
  console.log(myfirsthero);
  frameRate(5);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
}


function draw() {

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);

      }

      else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);

      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);

      }
      else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);

      }
      else if (matrix[y][x] == 4) {
        fill("blue");
        rect(x * side, y * side, side, side);

      }
      else if (matrix[y][x] == 5) {
        fill("orange");
        rect(x * side, y * side, side, side);

      }






    }
  }
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
      var y = Math.round(random(0, 19))
      var x = Math.round(random(0, 30));
      matrix[y][x] = 2;
      var greater = new GrassEater(x, y, 2);
      grassEater.push(greater);
      eatererkrordqanak--
    }
    if (grassArr.length == 0) {
      var y = Math.round(random(0, 19))
      var x = Math.round(random(0, 30));

      matrix[y][x] = 1;
      var gr = new Grass(x, y, 1);
      grassArr.push(gr);
    }
  }

  if (grassEater.length > 1 && gishatich.length == 0) {
    var y = Math.round(random(1, 19))
    var x = Math.round(random(1, 20));
    matrix[y][x] = 3;
    var gish = new GishaticKarmir(x, y, 3);
    gishatich.push(gish);
  }
  if (gishatich.length > 1 && myfirsthero.length == 0) {
    var y = Math.round(random(1, 19))
    var x = Math.round(random(1, 20));
    matrix[y][x] = 4;
    var herofir = new MyHeroOne(x, y, 4);
    myfirsthero.push(herofir);
  }
  if (myfirsthero.length > 0 && mysecondhero.length == 0) {
    var y = Math.round(random(1, 19))
    var x = Math.round(random(1, 20));
    matrix[y][x] = 5;
    var herotw = new MyHeroTwo(x, y, 5);
    mysecondhero.push(herotw);
  }
}

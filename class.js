class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }


}
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.multiplyy = 8;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [[this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) { found.push(this.directions[i]); }
            }
        } return found
    }
    mul() {

        this.multiplyy++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
      
        if (newCell && this.multiplyy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var newGrassEater = new GrassEater(newX, newY, this.index);
            grassEater.push(newGrassEater);
            this.multiplyy = 8;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(1)
        let grass = random(emptyCells);
        if (grass) {
            let newX = grass[0]
            let newY = grass[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0
            for (let i in grassArr) {
                if (newX === grassArr[i].x && newY === grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 1
            this.multiplyy += 1
        }
    }
    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            this.energy--
            this.multiplyy--
        }
    }
    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) { grassEater.splice(i, 1) }
            }
        }
    }
}

class GishaticKarmir {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.multiplygishatic = 8;
        this.index = index;
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [[this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) { found.push(this.directions[i]); }
            }
        } return found
    }
    mul() {

        this.multiplygishatic++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        // console.log(emptyCells);        
        if (newCell && this.multiplygishatic >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            var gishat = new GishaticKarmir(newX, newY, 3);
            gishatich.push(gishat);
            this.multiplygishatic = 8;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(2)
        let eater = random(emptyCells);
        if (eater) {
            let newX = eater[0]
            let newY = eater[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0
            for (let i in grassEater) {
                if (newX === grassEater[i].x && newY === grassEater[i].y) {
                    grassEater.splice(i, 1)

                    break
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 1

            this.multiplygishatic += 1

        }
    }
    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            this.energy--
            this.multiplygishatic--
        }
    }
    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatich) {
                if (this.x == gishatich[i].x && this.y == gishatich[i].y) { gishatich.splice(i, 1) }
            }
        }


    }
}
class MyHeroOne {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.multiplyfirsthero = 8;
        this.index = index;
        this.directions = [];
        this.directiontwo = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) { found.push(this.directions[i]); }
            }
        } return found
    }
    getNewCoordinatestwo() {
        this.directiontwo = [[this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]];
    }
    chooseCelltwo(character) {
        this.getNewCoordinatestwo();
        var found = [];
        for (var i in this.directiontwo) {
            var x = this.directiontwo[i][0];
            var y = this.directiontwo[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) { found.push(this.directiontwo[i]); }
            }
        } return found
    }
    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            this.energy--
            this.energy -= 0.5
            this.multiplyfirsthero -= 0.5
            this.multiplyfirsthero--
        }
    }
    eat() {
        let emptyCells = this.chooseCell(3)
        let firsthero = random(emptyCells);
        if (firsthero) {
            let newX = firsthero[0]
            let newY = firsthero[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0
            for (let i in gishatich) {
                if (newX === gishatich[i].x && newY === gishatich[i].y) {
                    gishatich.splice(i, 1)
                    break
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 1
            this.multiplyfirsthero += 1
            console.log(this.multiplyfirsthero)
        }
        else {
            let emptyCells = this.chooseCell(1)
            let first = random(emptyCells);
            if (first) {
                let newX = first[0]
                let newY = first[1]
                matrix[newY][newX] = this.index
                matrix[this.y][this.x] = 0
                for (let i in grassArr) {
                    if (newX === grassArr[i].x && newY === grassArr[i].y) {
                        grassArr.splice(i, 1)
                        break
                    }
                }
                this.x = newX
                this.y = newY
                this.energy++
                this.multiplyfirsthero++
                console.log(this.multiplyfirsthero);
            }
        }
    }
    eatmotik() {
        let emptyCells = this.chooseCelltwo(3)
        let firstheros = random(emptyCells);
        if (firstheros) {
            let newX = firstheros[0]
            let newY = firstheros[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0
            for (let i in gishatich) {
                if (newX === gishatich[i].x && newY === gishatich[i].y) {
                    gishatich.splice(i, 1)
                    break
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 1
            this.multiplyfirsthero += 1
            console.log(this.multiplyfirsthero)
        }
        else {
            let emptyCells = this.chooseCelltwo(1)
            let second = random(emptyCells);
            if (second) {
                let newX = second[0]
                let newY = second[1]
                matrix[newY][newX] = this.index
                matrix[this.y][this.x] = 0
                for (let i in grassArr) {
                    if (newX === grassArr[i].x && newY === grassArr[i].y) {
                        grassArr.splice(i, 1)
                        break
                    }
                }
                this.x = newX
                this.y = newY
                this.energy++
                this.multiplyfirsthero++
                console.log("motik")
            }
        }
    }
    mul() {
        this.multiplyfirsthero++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        // console.log(emptyCells);        
        if (newCell && this.multiplyfirsthero >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var herof = new MyHeroOne(newX, newY, this.index);
            myfirsthero.push(herof);
            this.multiplyfirsthero = 8;
            console.log("bazmaca")
        }
    }
    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in myfirsthero) {
                if (this.x == myfirsthero[i].x && this.y == myfirsthero[i].y) { myfirsthero.splice(i, 1) }
            }
        }
    }
}

class MyHeroTwo {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.multiplysecondhero = 8;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [[this.x - 2, this.y - 2],
        [this.x, this.y - 2],
        [this.x + 2, this.y - 2],
        [this.x - 2, this.y],
        [this.x + 2, this.y],
        [this.x - 2, this.y + 2],
        [this.x, this.y + 2],
        [this.x + 2, this.y + 2]];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) { found.push(this.directions[i]); }
            }
        } return found
    }
    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            this.energy--
            this.energy -= 0.5
            this.multiplysecondhero -= 0.5
            this.multiplysecondhero--
        }
    }
    eat() {
        let emptyCells = this.chooseCell(4)
        let secondher = random(emptyCells);
        if (secondher) {
            let newX = secondher[0]
            let newY = secondher[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0
            for (let i in myfirsthero) {
                if (newX === myfirsthero[i].x && newY === myfirsthero[i].y) {
                    myfirsthero.splice(i, 1)
                    break
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 1
            this.multiplysecondhero += 1
            console.log("kera")
        }
        else {
            let emptyCells = this.chooseCell(1)
            let second = random(emptyCells);
            if (second) {
                let newX = second[0]
                let newY = second[1]
                matrix[newY][newX] = this.index
                matrix[this.y][this.x] = 0
                for (let i in grassArr) {
                    if (newX === grassArr[i].x && newY === grassArr[i].y) {
                        grassArr.splice(i, 1)
                        break
                    }
                }
                this.x = newX
                this.y = newY
                this.energy++
                this.multiplysecondhero++
                console.log(this.multiplysecondhero)
            }
        }
    }
    mul() {

        this.multiplysecondhero++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        // console.log(emptyCells);        
        if (newCell && this.multiplysecondhero >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var herof = new MyHeroOne(newX, newY, this.index);
            myfirsthero.push(herof);
            this.multiplysecondhero = 8;
            console.log("erkvoryak")
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in mysecondhero) {
                if (this.x == mysecondhero[i].x && this.y == mysecondhero[i].y) {
                    mysecondhero.splice(i, 1)
                }
            }
        }
    }
}
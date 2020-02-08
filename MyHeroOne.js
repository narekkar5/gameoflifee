let LivingCreature = require('./LivingCreature');

module.exports =  class MyHeroOne  extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.multiplyfirsthero = 8;
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
              return super.chooseCell(character);
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
        return super.chooseCell(character);
    }
    move() {
        let emptyCells = super.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
        let emptyCells = super.chooseCell(3)
        var firsthero = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
            
        }
        else {
            let emptyCells = super.chooseCell(1)
            let first = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
        let firstheros = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
           
        }
        else {
            let emptyCells = this.chooseCelltwo(1)
            let second = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
                
            }
        }
    }
    mul() {
        this.multiplyfirsthero++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        // console.log(emptyCells);        
        if (newCell && this.multiplyfirsthero >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var herof = new MyHeroOne(newX, newY, this.index);
            myfirsthero.push(herof);
            this.multiplyfirsthero = 8;
            
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

let LivingCreature = require('./LivingCreature');
module.exports = class MyHeroTwo extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.multiplysecondhero = 8;
             
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
            return super.chooseCell(character);
    }
    move() {
        let emptyCells = super.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
        let emptyCells = super.chooseCell(4)
        let secondher = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
            let emptyCells = super.chooseCell(1)
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
                this.multiplysecondhero++
                console.log(this.multiplysecondhero)
            }
        }
    }
    mul() {

        this.multiplysecondhero++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
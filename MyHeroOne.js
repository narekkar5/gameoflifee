class MyHeroOne  extends LivingCreature {
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

let LivingCreature = require('./LivingCreature');

module.exports =  class GrassEater extends LivingCreature  {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.multiplyy = 8;

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
        return super.chooseCell(character);
    }
 
    mul() {

        this.multiplyy++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
      
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
        let emptyCells = super.chooseCell(1)
        let grass =  emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
        let emptyCells = super.chooseCell(0)
         let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
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

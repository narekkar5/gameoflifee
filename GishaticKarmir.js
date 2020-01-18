class GishaticKarmir extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 15;
        this.multiplygishatic = 8;
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
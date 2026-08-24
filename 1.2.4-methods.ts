

class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2*this.width + 2*this.height;
    }
}

const rectangle1 = new Rectangle(10, 5)
const rectangle2 = new Rectangle(4, 3)


console.log(rectangle1)
console.log("permiter of rectangle 1: ",rectangle1.getArea(), "\n")
console.log(rectangle2)
console.log("permiter of rectangle 2: ",rectangle2.getArea())
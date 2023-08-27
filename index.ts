// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
// class Rectangle {
//     width: number;
//     hight: number;

//     constructor(width: number, hight: number) {
//         this.width = width;
//         this.hight = hight;
//     }
//     area(): number {
//         return (this.width * this.hight) / 2
//     }
    
// }

//  2. Square - ריבוע
// class Square extends Rectangle {
//     lengthRib: number;

//     constructor(width: number, hight: number, lengthRib: number) {
//         super(width,hight)
//         this.lengthRib = lengthRib
//     }
//     area(): number {
//         return (this.lengthRib * this.lengthRib) /2
//     }
// }

// 3. Shape - צורה
class Shape {
    constructor() {}
    info(): string {
        return "This is a Shape"
    }
}

class Rectangle extends Shape{
    width: number;
    hight: number;

    constructor(width: number, hight: number) {
        super()
        this.width = width;
        this.hight = hight;
    }
    area(): number {
        return (this.width * this.hight) / 2
    }
    
    info(): string {
        return ("This is a Rectangle")
    }
    scale(x:number): this{
        this.width *= x 
        this.hight *= x 
        return this
    }

    static double(rectangle1: Rectangle, rectangle2: Rectangle): Rectangle {
       const newRectangle = new Rectangle (
        rectangle1.width + rectangle2.width,
        rectangle1.hight + rectangle2.width
       )
       return newRectangle
    }
}
const  rectangle11 = new Rectangle(4, 6);
const  rectangle12 = new Rectangle(5, 7);

console.log(Rectangle.double(rectangle11,rectangle12))

class ColoredRectangle extends Rectangle{
    color: string;

    constructor(width: number, hight: number, color: string) {
        super(width, hight,)
        this.color = color
    }
    info(): string {
        return (`this rectangle with the color ${this.color}`)
    }

}




// 4. Method Chaining

// 5. Shape with draw method
// class Shape {
//     draw() {
//         console.log("drawing a shape")
//     }
// }


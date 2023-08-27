// את הקוד שלכם תכתבו כאן
//  1. Rectangle - מלבן
var Rectangle = /** @class */ (function () {
    function Rectangle(width, hight) {
        this.width = width;
        this.hight = hight;
    }
    Rectangle.prototype.area = function () {
        return (this.width * this.hight) / 2;
    };
    return Rectangle;
}());
//  2. Square - ריבוע
// 3. Shape - צורה
// 4. Method Chaining
// 5. Shape with draw method

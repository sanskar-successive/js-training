class Shape{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea(){
        return "Calculate it according to shape";
    }
}

class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    getArea(){

        return this.width*this.height*0.5;
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    getArea(){
        return this.width*this.height
    }
}

const shape = new Shape(6,7);
console.log(shape.getArea());

const triangle = new Triangle(3,8);

console.log(triangle.getArea());

const rectangle = new Rectangle(4,5);

console.log(rectangle.getArea())
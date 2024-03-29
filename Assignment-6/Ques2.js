// 2. Create a class Shape with properties width and height and methods getArea(). 
//    Create two classes Rectangle and Triangle that inherit from the Shape class 
//    and implement the getArea() method for their respective shapes.
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

const triangle = new Triangle(3,8);

const rectangle = new Rectangle(4,5);

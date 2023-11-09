class Shape{
    constructor(){
        this.type = "Shape";
    }

    calculateArea(){
        return "Area calculation not implemented for this shape.";
    }

    calculatePerimeter(){
        return "Perimeter calculation not implemented for this shape.";
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.type="Circle";
        this.radius=radius;
    }
    calculateArea(){
        return Math.PI*this.radius*this.radius;
    }
    calculatePerimeter(){
        return 2*Math.PI*this.radius;
    }
}

class Rectangle extends Shape{
    constructor(width, length){
        super();
        this.type="Rectangle";
        this.width=width;
        this.length=length;
    }
    calculateArea(){
        return this.width*this.length;
    }
    calculatePerimeter(){
        return 2*(this.length+this.width);
    }
}

class Triangle extends Shape{
    constructor(base, height, side1, side2, side3){
        super();
        this.type="Triangle";
        this.base=base;
        this.height=height;
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
    }
    calculateArea(){
        return 0.5*this.base*this.height;
    }
    calculatePerimeter(){
        return this.side1+this.side2+this.side3;
    }
}
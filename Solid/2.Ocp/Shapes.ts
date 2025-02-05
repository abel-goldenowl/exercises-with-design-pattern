abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
        super();
    }
    getArea(): number {
        return this.height * this.width;
    }
}

class Triangle extends Shape {
    constructor(public length: number) {
        super();
    }
    getArea(): number {
        return 0.5 * this.length * this.length;
    }
}

class Square extends Shape {
    constructor(public side: number) {
        super();
    }
    getArea(): number {
        return this.side * this.side;
    }
}

class ShapeCalculator {
    constructor(private shapes: Shape[]) {}

    calculateTotalArea(): number {
        return this.shapes.reduce((total, shape) => total + shape.getArea(), 0);
    }
}

// Test
const shapes = [
    new Circle(5),
    new Rectangle(4, 5),
    new Triangle(3),
    new Square(4)
];

const shapeCalculator = new ShapeCalculator(shapes);
console.log(`Total Shape Area: ${shapeCalculator.calculateTotalArea()}`);

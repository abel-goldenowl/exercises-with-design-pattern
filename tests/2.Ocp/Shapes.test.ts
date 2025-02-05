import { Circle, Rectangle, Triangle, Square, ShapeCalculator } from "./../../Solid/2.Ocp/Shapes";

describe("Shape Classes", () => {
    test("Circle should return correct area", () => {
        const circle = new Circle(5);
        expect(circle.getArea()).toBeCloseTo(78.54, 2);
    });

    test("Rectangle should return correct area", () => {
        const rectangle = new Rectangle(4, 5);
        expect(rectangle.getArea()).toBe(20);
    });

    test("Triangle should return correct area", () => {
        const triangle = new Triangle(3);
        expect(triangle.getArea()).toBe(4.5);
    });

    test("Square should return correct area", () => {
        const square = new Square(4);
        expect(square.getArea()).toBe(16);
    });

    test("ShapeCalculator should return total area of all shapes", () => {
        const shapes = [
            new Circle(5),
            new Rectangle(4, 5),
            new Triangle(3),
            new Square(4)
        ];
        const shapeCalculator = new ShapeCalculator(shapes);
        expect(shapeCalculator.calculateTotalArea()).toBeCloseTo(118.04, 2);
    });
});

import { FullTimeEmployee, PartTimeEmployee, InternEmployee, Freelancer } from "./../../Solid/2.Ocp/Employees";

describe("Employee Classes", () => {
    test("FullTimeEmployee should return correct salary", () => {
        const fullTime = new FullTimeEmployee("Alice");
        expect(fullTime.calculateSalary()).toBe(5000);
    });

    test("PartTimeEmployee should return correct salary", () => {
        const partTime = new PartTimeEmployee("Bob");
        expect(partTime.calculateSalary()).toBe(3000);
    });

    test("InternEmployee should return correct salary", () => {
        const intern = new InternEmployee("Charlie");
        expect(intern.calculateSalary()).toBe(1000);
    });

    test("Freelancer should return correct salary based on hours worked", () => {
        const freelancer = new Freelancer("David", 120);
        expect(freelancer.calculateSalary()).toBe(4800);
    });
});

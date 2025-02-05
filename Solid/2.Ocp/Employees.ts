abstract class Employee {
    constructor(public name: string) {}
    abstract calculateSalary(): number;
}

class FullTimeEmployee extends Employee {
    calculateSalary(): number {
        return 5000;
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary(): number {
        return 3000;
    }
}

class InternEmployee extends Employee {
    calculateSalary(): number {
        return 1000;
    }
}

class Freelancer extends Employee {
    constructor(name: string, public hoursWorked: number) {
        super(name);
    }
    calculateSalary(): number {
        return this.hoursWorked * 40;
    }
}

// Test
const employees = [
    new FullTimeEmployee("Alice"),
    new PartTimeEmployee("Bob"),
    new InternEmployee("Charlie"),
    new Freelancer("David", 120)
];

employees.forEach(emp => {
    console.log(`${emp.name}'s salary: ${emp.calculateSalary()}`);
});

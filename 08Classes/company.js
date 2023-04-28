class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {
                averageSalary: 0,
                totalSalarySum: 0,
                employees: []
            }
        }

        this.departments[department].employees.push({ name, salary, position });
        this.departments[department].totalSalarySum += salary;
        this.departments[department].averageSalary = this.departments[department].totalSalarySum / this.departments[department].employees.length;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = Object
            .entries(this.departments)
            .sort(([dept1, prop1], [dept2, prop2]) => prop2.averageSalary - prop1.averageSalary)[0];

        bestDepartment[1].employees.sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let result = [];
        result.push(`Best Department is: ${bestDepartment[0]}`);
        result.push(`Average salary: ${bestDepartment[1].averageSalary.toFixed(2)}`);

        for(let employee of bestDepartment[1].employees){
            result.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }

        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

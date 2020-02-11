let person_prototype = {
    getName() {
        return this.name;
    },
    setName(newName) {
        this.name = newName;
    },
    getAge() {
        return this.age;
    },
    setAge(newAge) {
        this.age = newAge;
    },
    toString() {
        return `Name: ${this.name}; Age: ${this.age}`;
    },
    equals(person) {
        if (person.name && person.age) {
            return (name === person.name && age === person.age);
        }
        return false;
    }
}


let employee_prototype = {
    __proto__: person_prototype,
    getSalary() {
        return this.salary;
    },
    setSalary(newSalary) {
        this.salary = newSalary;
    },
    toString() {
        return `Name: ${this.getName()}; Age: ${this.getAge()}; Salary: ${this.salary}`;
    },
    equals(person) {
        if (person.salary) {
            return (this.salary === person.salary);
        }
        return false;
    }
}


function Person(name, age) {
    let p = Object.create(person_prototype);
    p.name = name;
    p.age = age;
    return p;
}

function Employee(name, age, salary) {
    let e = Object.create(employee_prototype);
    e.setName(name);
    e.setAge(age);
    e.setSalary(salary);
    return e;
}

let arr = [Person("Mindy", 25), Employee("Jack", 15, 25000), Person("Amy", 15), Employee("Bill", 35, 40000), Person("Dan", 53), Employee("Bill", 55, 50000)];
console.log(arr);

function advancedFilter(ar) {
    return ar
        .filter(e => Object.getPrototypeOf(e) === employee_prototype && e.getAge() > 18 && e.getName() === "Bill")
        .map(r => r.getSalary())
        .reduce((t, s) => t += s);
}

console.log(advancedFilter(arr));
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
    __proto__: person_prototype, // might get compatibility problems accross browsers
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

let p1 = Person("Josh", 43);
let e1 = Employee("Dustin", 12, 45000);


console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(e1));

console.log('\n' + p1.toString());
console.log(e1.toString());

console.log(e1)
e1.setSalary(5000);
console.log(e1)


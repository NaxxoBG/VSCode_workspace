let person_prototype = {
    getName() {
        return this.name
    },
    setName(name) {
        this.name = name
    },
    getAge() {
        return this.age
    },
    setAge(age) {
        this.age = age
    },
    toString() {
        return 'person string';
    },
    equals(p) {
        return this === p;
    }
}

let employee_prototype = Object.assign(Object.create(person_prototype), {
    getSalary() {
        return this.salary;
    },
    setSalary(s) {
        this.salary = s;
    },
    toString() {
        return `${this.getName()}, ${this.getAge()}, ${this.getSalary()}`
    },
    equals(e) {
        return JSON.stringify({a: this}) === JSON.stringify({a: e})
    }
});

function Person(name, age) {
    let p = Object.create(person_prototype);
    p.setName(name);
    p.setAge(age);
    return p;
}

function Employee(name, age, salary) {
    let e = Object.create(employee_prototype);
    e.setName(name);
    e.setAge(age);
    e.setSalary(salary)
    return e;
}

let p = Person('Tim', 52);
let e = Employee('Amy', 24, 15000);
let e2 = Employee('Tom', 25, 90000);

console.log(p);
console.log(e);

console.log(e.salary);
e.salary = 23000;
console.log(e.salary);

console.log(e2.toString())

console.log(Object.getPrototypeOf(p));
console.log(Object.getPrototypeOf(e));
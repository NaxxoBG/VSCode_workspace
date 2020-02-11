// Solution to ex 4.1 is 3_1_b

// Difference between __proto__ and prototype
// let p = new Person()
// p.__proto__ === Person.prototype

// 4_2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
}

let p = new Person("Dustin", 50);
let e = new Employee("Mike", 30, 5300)

console.log(Object.getPrototypeOf(p));
console.log(Object.getPrototypeOf(e));
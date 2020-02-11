function Person(n, a) {
    this.name = n,
    this.age = a
}

Person.prototype = {
    getName() {
        return this.name;
    },
    setName(n) {
        this.name = n;
    },
    getAge() {
        return this.age;
    },
    setAge(n) {
        this.age = n;
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

function Employee(name, age, salary) {
    if (arguments.length < 3) {
        Person.call(this, arguments[0])
        this.salary = arguments[1]
    } else {
        Person.call(this, name, age)
        this.salary = salary
    }
}

Employee.prototype = {
    getSalary() {
        return this.salary;
    },
    setSalary(s) {
        this.salary = s;
    },
    toString() {
        return `Name: ${this.name}; Age: ${this.age}; Salary: ${this.salary}`;
    },
    equals(p) {
        return JSON.stringify({
            a: this
        }) === JSON.stringify({
            a: p
        });
    }

}

//Employee.prototype = Object.create(Person.prototype); //setting prototypes
//Employee.prototype.costructor = Employee; //setting the right constructor function

Object.setPrototypeOf(Employee.prototype, Person.prototype)

let p1 = new Person("Josh", 43);
let e1 = new Employee("Dustin", 12, 45000);

console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(e1));

console.log('\n' + p1.toString());
console.log(e1.toString());

const Named = (state) => ({
    getName: () => {return state.name;},
    setName: (n) => state.name = n
})

const Aged = (state) => ({
    getAge: () => {return state.age;},
    setAge: (a) => state.age = a
})

const Salaried = (state) => ({
    getSalary: () => {return state.salary;},
    setSalary: (s) => state.salary = s
})

const Person = (name, age) => {
    let state = {
        name,
        age
    }
    return Object.assign(
        {},
        Named(state),
        Aged(state)
        )
}

const Employee = (name, age, salary) => {
    let state = {
        name,
        age,
        salary
    }
    return Object.assign(
        Person(name, age),
        Salaried(state)
        )
}

//console.log(advanvedFilter(arr));

console.log("Person test composition")
let p = Person('Jack', 24);
console.log(p.getAge());

console.log("\nEmployee test composition")
let e = Employee("Trent", 40, 13000);
console.log(e.getSalary())


let arr = [Person("Mindy", 25), Employee("Jack", 15, 25000), Person("Amy", 15), Employee("Bill", 35, 40000), Person("Dan", 53), Employee("Bill", 55, 50000)];
//console.log(arr);

function advancedFilter(ar) {
    return ar.filter(e => e.getSalary !== undefined && e.getAge() > 18 && e.getName() === "Bill")
        .map(r => r.getSalary())
        .reduce((t, s) => t += s);
}

console.log(advancedFilter(arr));

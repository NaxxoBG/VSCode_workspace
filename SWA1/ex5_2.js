let persons = [{
    name: 'foo',
    age: 12
}, {
    name: 'bar',
    age: 35
}, {
    name: 'fizz',
    age: 62
}, {
    name: 'jar',
    age: 16
}, {
    name: 'buzz',
    age: 18
}]

function names(persons) {
    let ns = []
    for (let i = 0; i < persons.length; i++) {
        ns.push(persons[i].name)
    }
    return ns
}

const fNames = persons => persons.map(p => p.name)

console.log(names(persons))
console.log(fNames(persons))

function adults(persons) {
    let as = []
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age >= 18) {
            as.push(persons[i])
        }
    }
    return as;
}

const fAdults = (persons) => persons.filter(e => e.age >= 18)

console.log(adults(persons))
console.log(fAdults(persons))

function oldest_person(persons) {
    let oldest = null
    for (let i = 0; i < persons.length; i++) {
        if (!oldest || persons[i].age > oldest.age) {
            oldest = persons[i]
        }
    }
    return oldest
}

const fOldest_person = (persons) => {
    let max = persons.map(el => el.age).reduce((max, cur) => Math.max(max, cur))
    return persons.find(s => s.age === max)
}

console.log(oldest_person(persons))
console.log(fOldest_person(persons))
//console.log(fNames(persons))

function total_salaries_of_seniors(persons) {
    let total = 0
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age >= 60) {
            total += persons[i].salary
        }
    }
    return total
}

let employees = [{
    name: 'foo',
    salary: 15000,
    age: 26
}, {
    name: 'bar',
    salary: 35000,
    age: 67
}, {
    name: 'fizz',
    salary: 20000,
    age: 70
}]

const fTotal_salaries = (employees) => employees
    .filter(t => t.age >= 60)
    .map(e => e.salary)
    .reduce((t, s) => t += s)

console.log(total_salaries_of_seniors(employees))
console.log(fTotal_salaries(employees))
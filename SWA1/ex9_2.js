// Check exercise 9.1 for instructions on how to start the server

const XMLHttpRequest = this.XMLHttpRequest || require('xmlhttprequest').XMLHttpRequest;
const fetch = this.fetch || require('node-fetch');

// making a request using fetch
async function getAllPersonsWithFetch() {
    let res = await fetch('http://localhost:9090/persons')
        .then(res => res.text())
    return res
};

// making a request using XMLHttpRequest
function getAllPersonsWithXHR() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'http://localhost:9090/persons', true);
    xhttp.onload = function () {
        console.log(xhttp.responseText)
    };
    xhttp.send()
}

getAllPersonsWithFetch().then(body => console.log(body));
getAllPersonsWithXHR()

fetch('http://localhost:9090/employees')
    .then(res => res.text()).then(t => console.log(t))


fetch('http://localhost:9090/employees/23')
    .then(res => res.text()).then(t => {
        console.log("Fetching employees with a specific id")
        console.log(t)
    })

fetch('http://localhost:9090/employees/23/subordinates')
    .then(res => res.text()).then(t => {
        console.log("Fetching subordinates of an employee with a specific id")
        console.log(t)
    })

async function postNewEmployee() {
    var data = {
        "salary": 80000,
        "manager": false
    }

    fetch('http://localhost:9090/employees', {
        method: 'post',
        body:    JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
}

postNewEmployee()


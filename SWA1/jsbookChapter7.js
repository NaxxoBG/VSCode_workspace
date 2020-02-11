const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) {
                    return p;
                }
                return { place: destination, address: p.address };
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
};

//runRobot(VillageState.random(), randomRobot)

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

function goalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}

function modifiedRobot({ place, parcels }, route) {
    let parcel = parcels[0];
    if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
    } else {
        route = findRoute(roadGraph, place, parcel.address);
    }
    return { direction: route[0], memory: route.slice(1) };
}

// console.log("-----Random-robot-----")
// randState = VillageState.random();
// runRobot(randState, randomRobot, mailRoute)
// console.log("-----A-Different-robot-----")
// runRobot(randState, routeRobot, mailRoute)
// console.log("-----Goal-oriented-robot-----")
// runRobot(randState, goalOrientedRobot, mailRoute)

function compareRobots(r1, r2, memory) {
    let randTask = VillageState.random();
    let avr1 = null;
    let avr2 = null;
    for (let i = 0; i < 100; i++) {
        avr1 += runRobot(randTask, r1, memory);
        avr2 += runRobot(randTask, r2, memory);
        randTask = VillageState.random();
    }
    console.log(`Average num of steps per task: ${avr1 / 100}`);
    console.log(`Average num of steps per task: ${avr2 / 100}`);
}

compareRobots(goalOrientedRobot, modifiedRobot, mailRoute);

class PGroup {
    constructor(vals = []) {
        this.vals = vals;
    }

    add(v) {
        return this.has(v) ? this : new PGroup(this.vals.concat([v]));
    }

    delete(v) {
        return !this.has(v) ? this : new PGroup(this.vals.filter(e => e !== v));
    }

    has(v) {
        return this.vals.includes(v);
    }
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
console.log(a);
console.log(ab);
console.log(b);
console.log(ab);
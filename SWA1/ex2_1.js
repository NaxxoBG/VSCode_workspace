function PointWithPrivate(x, y) {
    return {
        getX() {
            return x;
        },
        getY: function () {
            return y;
        },
        moveTo: function (_x, _y) {
            x = _x;
            y = _y;
        },
        toString: function () {
            return `point: [${x}; ${y}]`;
        },
        copy: function () {
            return Point(x, y);
        }
    }
}

//a
const Point = (x, y) => ({
    x,
    y,
    getX() {
        return this.x;
    },
    getY() {
        return this.y;
    },
    moveTo(x, y) {
        this.x = x;
        this.y = y;
    },
    toString() {
        return `point: [${this.x}; ${this.y}]`;
    },
    copy() {
        return Point(this.x, this.y);
    }
})

const Circle = (center, radius) => ({
    center: (center || Point(0, 0)),
    radius,
    moveTo(x, y) {
        this.center.x = x;
        this.center.y = y;
    },
    getCenter() {
        return this.center;
    },
    getRadius() {
        return this.radius;
    },
    toString() {
        return `A circle with center ${this.center.toString()} and a radius: ${this.radius}`;
    }
})

let circle1 = Circle(null, 23);
let point = Point(2, 23);
let circle2 = Circle(point, 5);

console.log(circle1.toString())
console.log(point.toString())
console.log(circle2.toString());

//b
//creating an array of circles
let circleAr = [...Array(6).keys()].map(n => Circle(null, Math.round(Math.random() * 10)));

let circleRadiusAr = circleAr.map(c => c.radius);
console.log(circleRadiusAr);

//c
function CircleOverload() {
    if (arguments.length === 2) {
        return Circle(arguments[0], arguments[1]);
    } else if (arguments.length === 3) {
        function Circle3(x, y, radius) {
            return {
                moveTo(_x, _y) {
                    x = _x;
                    y = _y;
                },
                getCenter() {
                    return Point(x, y);
                },
                getRadius() {
                    return radius;
                },
                toString() {
                    return `A circle with center ${Point(x,y).toString()} and a radius: ${radius}`;
                }
            }
        }
        return Circle3(arguments[0], arguments[1], arguments[2]);
    }
}

let a = CircleOverload(null, 2);
let b = CircleOverload(Point(7,3), 4);
let c = CircleOverload(4, 6, 15);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
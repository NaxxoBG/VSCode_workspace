
// 1. Factory signature == contructor signature
// 2. Returns object with all public elements
// 3. Private elements are in the closure (variables and parameters) info hiding

/*  + Factory functions solve the this/bind problem
    + Allows information hiding
    + requires advahnced concepts

    - No language support
    - unfamiliar
 */

 // Run separately until console.log
function createExam(name, ectsPoints) {
    function getCourseName() {return name}
    function setCourseName(_name) {name = _name}
    function getEctsPoints() {return ectsPoints}
    function toString() {return name + ectsPoints}
    return {getCourseName, setCourseName, getEctsPoints, toString}
}

createdExam = createExam("SWA", 5)
console.log(createdExam.getCourseName())

/**
 *  Constructor + prototype 
 * 
 *  + Some language support
 *  + Some familiar concept
 *  
 *  - Requires advanced concepts
 *  - No information hiding
 *  - Introduces this/bind problem
 */

// Constructor as Factory function
// Run separately until console.log
function Exam(name, ectsPoints) {
    this.getCourseName = function() {return name}
    this.getEctsPoints = function() {return ectsPoints}
    this.toString = function() {return name + ectsPoints}
}

exam = new Exam("SWA", 5)


function Exam(name, ectsPoints) {
    this.name = name
    this.ectsPoints = ectsPoints
}

Exam.prototype = {}

Exam.prototype.getCourseName = function() {return this.name}
Exam.prototype.getEctsPoints = function() {this.ectsPoints}
Exam.prototype.toString = function() {return this.name + this.ectsPoints}


// Exam.prototype is the prototype of swa
swa = new Exam("SWA", 5)
console.log(swa.getCourseName())


// Classes, behind the scenes are constructor + prototype

/**
 * + Good language support
 * + Familiar
 * + No advanced concepts
 * 
 * - no information hiding
 * - Introduces the this/bind problem
 */

 // Run separately until console.log
 class Exam {
    constructor(name, ectsPoints) {
        this.name = name
        this.ectsPoints = ectsPoints
    }

    getCourseName() {
        return this.name
    }

    getEctsPoints() {
        return this.ectsPoints
    }

    toString() {
        return this.name + this.ectsPoints
    }
 }

 swaClass = new Exam("SWA", 5)
 console.log(swaClass.getCourseName())
/* Concatenative inheritance
    + Flexible

    - Requires advanced concepts
    - No language support
    - unfamiliar
    - no single way
*/

function createExam(name, ectsPoints) {
    function getCourseName() {return name}
    function setCourseName(_name) {name = _name}
    function getEctsPoints() {return ectsPoints}
    function toString() {return name + ectsPoints}
    return {getCourseName, setCourseName, getEctsPoints, toString}
}

//Mixin (or trait)
function createGraded(grade, base) {
    function isPassed() {return grade >= 2}
    function getGrade() {return grade}
    function toString() {return base.toString() + grade}
    return (isPassed, getGrade, toString)
}

function GradedExam(name, ectsPoints, grade) {
    const exam = createExam(name, ectsPoints)
    const graded = createGraded(grade, exam)
    return Object.assign(exam, graded)
}

/**
 * Prototypal inheritance
 *  + Some language support
 *  + Requires advanced concepts
 * 
 *  - error-prone
 *  - Unfamiliar
 *  - less flexible
 * 
 */

function Exam(name, ectsPoints) {
    this.name = name
    this.ectsPoints = ectsPoints
}

Exam.prototype = {}

Exam.prototype.getCourseName = function() {return this.name}
Exam.prototype.getEctsPoints = function() {this.ectsPoints}
Exam.prototype.toString = function() {return this.name + this.ectsPoints}

function GradedExam(name, ectsPoints, grade) {
    Exam.call(this, name, ectsPoints)
    this.grade = grade
}

GradedExam.prototype = Object.create(Exam.prototype)

GradedExam.prototype.isPassed = function() {return this.grade >= 2}
GradedExam.prototype.getGrade = function() {this.grade}
GradedExam.prototype.toString = function() {return Exam.prototype.toString.call(this) + this.grade}

/**
 *  Extends
 * 
 *  + good language support
 *  + familiar
 *  + No advanced concepts
 *  + Familiar
 *  - less flexible
 */

 class GradedExam extends Exam {
     constructor(name, ectsPoints, grade) {
        super(name, ectsPoints)
        this.grade = grade
     }

     isPassed() {
        return this.grade >= 2
     }

     getGrade() {
        return this.grade
     }

     toString() {
        return super.toString() + this.grade
     }
 }

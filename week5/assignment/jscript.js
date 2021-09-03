// const Students = require("./student.js")
import Student from './student.js'
let person
// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
function newStudent () {
     person = new Student(
        document.getElementById("studentName").value,
        document.getElementById("className").value,
        arry(document.getElementById("studentScores")),
        arry(document.getElementById("possibleScores"))
    )
}
// console.log(newStudent)
function arry (obj) {
    let a = obj.value.split(",")
    // console.log(a)
    a = a.map(function (b) {
        return parseInt(b)
    })
    // console.log(a)
    return a
}
// console.log(arry)
//create a new function to print
document.getElementById("print").addEventListener('click', function(){
    newStudent()
    // call the new function
    console.log(person)
    console.log(person.scores())
    var score = person.scores()
    console.log(person.possibScores())
    var posible = person.possibScores()
    console.log(person.totalGrade(score / posible * 100))
    var total = person.totalGrade(score / posible * 100)
    
    printCertificate(total)

})
//  a new student object, and another function to print the certificate.

// Add an event listener that responds to the click of the reset button by resetting all the values
document.getElementById("reset").addEventListener('click', function() {
    document.querySelector("#studentName").value = ""
    document.querySelector("#className").value = ""
    document.querySelector("#studentScores").value = ""
    document.querySelector("#possibleScores").value = ""
    document.querySelector("#certStudentName").value = ""
    document.querySelector("#certClassName").value = ""
    document.querySelector("#certGrade").value = ""
})

function printCertificate (total) {
    document.querySelector("#certStudentName").innerHTML = person.studentName
    document.querySelector("#certClassName").innerHTML = person.className
    document.querySelector("#certGrade").innerHTML = total
}
// both in the form and in the certificate.

// Create a function that instantiates a new student object with the input from the HTML form.

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
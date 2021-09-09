import Student from './student.js'
let person
function newStudent () {
     person = new Student(
        document.getElementById("studentName").value,
        document.getElementById("className").value,
        arry(document.getElementById("studentScores")),
        arry(document.getElementById("possibleScores"))
    )
}
function arry (obj) {
    let a = obj.value.split(",")
    a = a.map(function (b) {
        return parseInt(b)
    })
    return a
}
document.getElementById("print").addEventListener('click', function(){
    newStudent()
    console.log(person)
    console.log(person.scores())
    var score = person.scores()
    console.log(person.possibScores())
    var posible = person.possibScores()
    console.log(person.totalGrade(score / posible * 100))
    var total = person.totalGrade(score / posible * 100)
    
    printCertificate(total)

})
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

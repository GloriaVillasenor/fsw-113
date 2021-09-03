export default class Student {
    constructor (studentName, className, studentScores, possibleScores) {
        this.studentName = studentName,
        this.className = className,
        this.studentScores = studentScores,
        this.possibleScores = possibleScores
    }
    // - a method that adds up all the student's scores
    scores() {
        // var totalScores = document.getElementById("studentScores")
        console.log(this.studentScores)

        let sum = this.studentScores.reduce(function(totalScores, studentScores) {
            return totalScores += studentScores
            }, 0) 
        return sum        }
        // scores()
    // }  
    totalGrade(grade, index, ary) {
        console.log(grade)
            switch (true) {
                case grade >= (90): 
                    // ary[index] = 'A'
                    return "A"
                    break
                case grade >= (80): 
                    // ary[index] = 'B'
                    return "B"
                    break
                case grade >= (70):
                    // ary[index] = 'C'
                    return "C"
                    break
                case grade >= (60): 
                    // ary[index] = 'D'
                    return "D"
                    break
                default:
                    // ary[index] = 'F'
                    return "F"
                    break
            }
    }
// - a method that adds up all the possible scores
    possibScores() {
        // var possibScores = document.getElementById("possibleScores")
        console.log(this.possibleScores)
        let sum = this.possibleScores.reduce(function(possibScores, possibleScores) {
            return possibScores += possibleScores
            }, 0) 
        return sum
        //go thru possible scores arry and use .reduce
    }
    // possibScores()
}
// The class should also contain the following methods:
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
// module.exports = Student
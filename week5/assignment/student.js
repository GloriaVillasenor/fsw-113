export default class Student {
    constructor (studentName, className, studentScores, possibleScores) {
        this.studentName = studentName,
        this.className = className,
        this.studentScores = studentScores,
        this.possibleScores = possibleScores
    }
    scores() {
        console.log(this.studentScores)

        let sum = this.studentScores.reduce(function(totalScores, studentScores) {
            return totalScores += studentScores
            }, 0) 
        return sum        }
    totalGrade(grade, index, ary) {
        console.log(grade)
            switch (true) {
                case grade >= (90): 
                    return "A"
                    break
                case grade >= (80): 
                    return "B"
                    break
                case grade >= (70):
                    return "C"
                    break
                case grade >= (60): 
                    return "D"
                    break
                default:
                    return "F"
                    break
            }
    }
    possibScores() {
        console.log(this.possibleScores)
        let sum = this.possibleScores.reduce(function(possibScores, possibleScores) {
            return possibScores += possibleScores
            }, 0) 
        return sum
    }
}

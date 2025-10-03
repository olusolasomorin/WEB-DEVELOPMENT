class Student{
    constructor(name, age, grades = []){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    calculateAverage(){
        let total = this.grades.reduce((total,  grade) => 
            total + grade, 0);
        return total / this.grades.length;
    }

    getDetails(){
        let average = this.calculateAverage();
        let passStatus = average > 50? "Passed": "Failed";
        return `Student name: ${this.name}. Age: ${this.age}. Average: ${average}. Status: ${passStatus}`
    }
}

let student1 = new Student("Adesoji", 23, [90, 89])

console.log(student1.getDetails());
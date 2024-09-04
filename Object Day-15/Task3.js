let student = [
    { "name": "John", "age": 20, "grade": "A" }, 
    { "name": "Alice", "age": 22, "grade": "B" }, 
    { "name": "Bob", "age": 21, "grade": "C" }
]

for(let x = 0; x<student.length; x++){
    console.log(student[x].name + " - " + student[x].age + " years old")
}
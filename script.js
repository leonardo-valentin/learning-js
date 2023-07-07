let weight

// console.log(typeof weight) //undefined

let name, age, stars, isSubscribed

name = "mayk"
age = 22
weight = 44.8
isSubscribed = true

// console.log(name, age, stars, isSubscribed)

let student = {}
student = {
  name: name,
  age: age,
  weight: weight,
  isSubscribed: isSubscribed,
}

const john = {
  name: "John",
  age: 53,
  weight: 65.7,
  isSubscribed: false,
}
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

let students = []
students = [student]

students[1] = john
console.log(students)

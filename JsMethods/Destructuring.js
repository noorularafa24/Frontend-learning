//Array destructuring [onFly]

let array = ["Hello", "Hi", 1 ,2,3,4]

//accessing using index

console.log("array elements:",array)
console.log("accessing with index:",array[2]);

//destructuring - without using indexs

const [a,b,c,d,e] = ["Hello", "Hi", 1 ,2,3,4]

console.log("destructuring array:", a,b,c)


//Object destructuring [onFly]

let person = {
    name: "Arafa",
    age : 21,
    City : "Chennai"
}

console.log("Object Elements", person)

//accessing object elements 
//two ways
// dot notation and bracket notation

//dot notation
console.log("Dot notation:",person.name)

//Bracket notation
console.log("Bracket notation:", person["name","age"])

//thirdway - destructuring
//Here the words should be same as name - name , age - age 

const {name,age,city} = {
    name: "Arafa",
    age : 21,
    city : "Chennai"
}

console.log("Object Destructured elements :", name , city)



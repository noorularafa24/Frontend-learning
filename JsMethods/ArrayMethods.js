//Array Methods

//Mutable Methods

/*1.Push
*2.Pop
*3.reverse
*/

let fruits = ["Apple","Banana","Orange"]
console.log("Fruits:", fruits)

//push

let fruits_push = fruits.push("Grapes")
console.log("Pushed fruit:", fruits)


//pop

let fruits_pop = fruits.pop()
console.log("Fruits pop:", fruits)

//reverse
console.log("Rev :", fruits.reverse())

//Flats

let fruit2 = ["Apple","Banana","Orange",["tomato","Watermelon"]]
console.log("flat:", fruit2.flat())

//IMMUTABLE METHODS

/*
* Map
* Reduce
* Filter
*/

//map

let array=[1,2,3,4]

let ArrayMap = array.map((item)=>{
    return item
})
console.log("ArrayMap",ArrayMap)

//Filter

let ArrayFilter = array.filter((items)=>{
    return items > 2;
    
})
console.log("FilterArray:", ArrayFilter)

//Reduce

let ReduceArray = array.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
})

console.log("ReduceArray :", ReduceArray)
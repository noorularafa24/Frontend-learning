//Spread and Rest 

let arr = [1,2,3,4]
console.log(arr);

console.log(...arr);

//unpack the elements into individual elements

let arr1 = [...arr, 5,6,7]
console.log(arr1);

//copy

let arr2 = [...arr]
console.log("copy:",arr2);

//concatenation

let arr3 = [...arr,...arr1]
console.log("concatenation:",arr3)

//objects

let person = { name : "arafa",
                age : 21,
                }

    console.log(person);

    //concatenation 

    let persondetails = {
        ...person , 
        city : "Chennai"
    };

    console.log("person details:", persondetails);

//copy the objects

let person2 = {
    ...person
}
console.log("Person2 :",person2);

//concatenate the objects

let person3 = {
    ...person, ...persondetails
}

console.log("concatenate:", person3);

//function 


function add(a,b,...Rest){
    console.log(a+b);
    console.log(Rest)
}

add(1,2);

let num = [1,2,3,4,5]

add(...num);


// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

const bigNumber = 23245654645654n

// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// stack(primitive), Heap(Non Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername="chaiaurcode"

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email="hitesh@google.com";





// singleton
// object.create

// object literals


const JsUser = {
    name: "hitesh",
    "full name": "Hitesh chaudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microf.com"

JsUser.greeting = function(){
    console.log("")
}
console.log(JsUser.greeting());








// // console.log("helllo world!")
// // alert("Alert")

// let name = "saidur"
// let age = 17
// const point = 4.83
// let result = true
// let recheck = null

// console.log(name, age, point, result)

// // not working because of windows7

// // function getresult(){
// //     console.log("Getting your result")
// //     let resultcard = 'Name:, ${name},'
// //     console.log(resultcard)
// // }

// // getresult()


// function checking(){
//     console.log ("Checking the internet connection")
// }
// checking()

// const greetuser = function(){
//     console.log("Hello User!")
// }

// console.log(greetuser)

// function kmtom(a) {
//     const b = 1000
//     const c = 3600

//     const lorem = (a*b)/3600

//     console.log(lorem)

// }

// kmtom(1)

// const mtokm = (a,b) => a + b
// console.log(mtokm(5, 5))


// let names = ["saidur", "Rahman", "kawser"]
// let ages = ["17", "19"]

// console.log(names[0], names[1], names[2])
// console.log(ages[0], ages[1], ages[2])

// ages.push(20)

// console.log(ages[2])

// console.log(names)
// console.log(ages)

// names.pop()
// ages.pop()

// console.log(names, ages)

// const ageguard = ages.filter(age => age.length > 1)

// console.log(ageguard)

// let studentcard = {
//     name : "saidur",
//     age: 17,
//     GPA : 4.83
// }

// console.log(studentcard)
// console.log(studentcard.name)
// console.log(studentcard.age)

// let userbio = {
//     name: "rohan",
//     age: 27,
//     blood: true
// }

// let useradress = {
//     city: "ctg",
//     port: "mongla",
//     country: "bd"
// }

// let profile = {...userbio, ...useradress}

// console.log(profile)

// let ab = (a, b) => console.log(a+b)

// console.log(ab(5, 10))

// let abc = (a,b, forc) => forc(ab/c)

// console.log(abc(2))

// let namegreet = greet(usename) => (usename)
// console.log(namegreet(saidur), "bro")



// Pure Testing





// let age = 12

// if (age >= 18){
//     console.log("adult")
// }

// else if (age >=12){
//     console.log("teenager")
//     alert("Your IP will be blocked for our safty")
// }

// else{
//     console.log("kid")
//     alert("Your IP will be blocked for your safty")
// }

// function bribe(age) {
//     if (age>=12 && age<=18) {
//         newage = age == 12 ? (age + 6) : (age + 8)
//         newage = age == 13 ? (age + 5) : (age + 8)
//         return newage
//     } 
    
//     else if (age <12 ) {
//         console.log("Go away Kid!")
        
//     }
    
//     else {
//         console.log("Listen, Bro I am a good person I dont do these!")
        
//     }
    
// }









// Loop in Javascript

// let a = ["saidur", "kawser", "rahman"]

// console.log(a.length)

// for (let i = 0; i < a.length; i++) {
//     const element = a[i]; 
//     console.log(element)
// }

// for (const char of "saidur") {
//     console.log(char)
// }


// let random = Math.random()
// console.log(random)
// let a = prompt("Enter first number")
// let c = prompt("Enter operation")
// let b = prompt("Enter second number")

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }



// if (random > 0.1) {
//     Perform correct calculation
//     console.log(`The result is ${a} ${c} ${b}`)
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
// }

// else {
//     Perform wrong calculation
//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

// }

let arr = [1,5,10,15,20]

// function greaterthanten(arr) {
//     if (arr > 10) {
//         return true
//     } 
//     return false
// }

// console.log(arr.filter(greaterthanten))


// const morethanten = (arr)=> {
//     if(arr>10){
//         return true
//     }
//     return false
// }

// console.log(arr.filter(greaterthanten))


// console.log(arr.filter((arr)=>{ 
//     if(arr>10){
//                 return true
//             }
//             return false
        
// }))


// let rand = Math.random()
// let first, second, third;
// // 0 0.33 0.66 1


// // Lets generate the first word
// if(rand<0.33){
//     first = "Crazy"
// }
// else if(rand<0.66 && rand>=0.33){
//     first = "Amazing"
// }
// else{
//     first = "Fire"
// }

// // Lets generate the second word
// rand = Math.random()
// if(rand<0.33){
//     second = "Engine"
// }
// else if(rand<0.66 && rand>=0.33){
//     second = "Foods"
// }
// else{
//     second = "Garments"
// }

// // Lets generate the third word
// rand = Math.random()
// if(rand<0.33){
//     third = "Bros"
// }
// else if(rand<0.66 && rand>=0.33){
//     third = "Limited"
// }
// else{
//     third = "Hub"
// }

// console.log(`${first} ${second} ${third}`)


// let div = document.createElement('div')
// div.innerHTML = "<h1> Hello how are you?</h1>"


// document.body.append(div)


const a = 5;
const b = 2;
let myName = "Jacob"
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName)

myName = "하종현"
console.log("your korean name is " + myName)
// --------------------------------
const amIFat = null;
let something;
console.log(amIFat);
console.log(something)
// --------------------------------
const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun"];
console.log(daysOfWeek)
//get item from array
console.log(daysOfWeek[4])
//add one more day to the array
daysOfWeek.push("sunn")
console.log(daysOfWeek)
//object
const player = {
    name : "Jacob",
    points: 100,
    fat: false
}
console.log(player);
player.lastname= 'potato'
player.points = player.points + 100
player.name = 'gkwhdgus'
console.log(player)
//function_name
function sayHello(nameOfPerson,age) {
    console.log("Hello my name is" +nameOfPerson+"and my age is "+ age)
}
sayHello("nico",1)
sayHello("dal",2)
sayHello("lynn",3)
//function
function plus(a,b) {
    console.log(a + b)
}
plus(60,8)
function divide(a,b) {
    console.log(a/b)
}
divide(98,20)
//player function
const player1 = {
    name: "nico",
    sayHello: function(otherPersonName) {
        console.log("Hello! "+ otherPersonName + "! Nice to meet you!")
    }
}
console.log(player1.name)
player1.sayHello("lynn")

//calculator
// const calculator = {
//     plus: function (a,b) {
//         alert(a+b)
//     },
//     minus: function (a,b) {
//         alert(a-b)
//     },
//     times: function (a,b) {
//         alert(a*b)
//     },
//     divide: function (a,b) {
//         alert(a/b)
//     },
//     power: function (a,b) {
//         alert(a**b)
//     }
// }
// console.log(calculator.plus(2,3))
// console.log(calculator.minus(2,3))
// console.log(calculator.times(2,3))
// console.log(calculator.divide(2,3))
// console.log(calculator.power(2,3))


const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);

// calculator
const calculator = {
    plus: function (a,b) {
        return a+b
    },
    minus: function (a,b) {
        return a-b
    },
    times: function (a,b) {
        return a*b
    },
    divide: function (a,b) {
        return a/b
    },
    power: function (a,b) {
        return a**b
    }
}
const plusResult = calculator.plus(2,3)
const minusResult = calculator.minus(plusResult,3)
const timesResult = calculator.times(2,minusResult)
const divideResult = calculator.divide(2,3)
const powerResult = calculator.power(2,3)

//05.03
let hello= "안녕하세요!";
console.log(hello);

const days = [1,2,3,'mon']
console.log(days[2])

const character={
    name : "gkwhdgus",
    age : 21
}
character.age=19
console.log(character)


const calculator={
    plus: function(a,b) {
        console.log(a+b)
    },
    minus: function(a,b) {
        return a-b;
    }
}

calculator.plus(10,20)

const minusresult = calculator.minus(20,10)
console.log(minusresult)

//나이 계산기
const age = parseInt( prompt("How old are you?") )

if(isNaN(age) || age<0) 
{
    console.log("Please write a real positive number");
}
else if(age<18) 
{
    console.log("Your age is too young.")
}
else if(age>=18 && age<=50) 
{
    console.log("You can drink.")
}
else if(age>50 && age<=80)
{
    console.log("You should exercise.")
}
else if(age>80)
{
    console.log("You can do whatever you want.")
}
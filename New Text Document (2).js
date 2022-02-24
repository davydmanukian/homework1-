//Homework 1
//exercise 1

// case 1
let a = 14
let b = 5
alert(a + b)
alert(a - b)
alert(a * b)
alert(a / b)
alert(a % b) 

// case 2
a = 99
b = 11 
alert(a + b)
alert(a - b)
alert(a * b)
alert(a / b)
alert(a % b)

// case 3
a = 81
b = 16 
alert(a + b)
alert(a - b)
alert(a * b)
alert(a / b)
alert(a % b)

//exercise 2

let myName = "Davyd"
let myAge = 24

//case 1
let text = "My " + "name " + "is " + myName + "," + "I " + "am " + myAge
alert( text )

//case 2
let text2 = `My name is ${myName}, I am ${myAge}` 
alert( text )

//exercise 3

//case 1
let number1 = 78756 
let answer1 = number1 % 10
alert (answer1)

//case 2
let number2 = -122 
let answer2 = number2 % 10
alert (answer2)

//case 3
let number3 = 8
let answer3 = number3 % 10
alert (answer3)

//case 4 
let number4 = 0
let answer4 = number4 % 10
alert (answer4)


//exercise 4

//case 1 if
let number1 = 0 
if (number1 < 0){
  alert ("yes")
} else {
  alert("no")
}

//case 2 if
let number2 = -71 
if (number2 < 0){
  alert ("yes")
} else {
  alert("no")
}

//case 3 if
let number3 = 89 
if (number3 < 0){
  alert ("yes")
} else {
  alert("no")
}

//case 4 switch
let number4 = 0 
switch (number4 < 0) {
  case true:
    alert( 'yes' );
    break;
  default:
    alert( "no" );
}

//case 5 switch
let number5 = -71 
switch (number5 < 0) {
  case true:
    alert( 'yes' );
    break;
  default:
    alert( "no" );
}

//case 6 switch
let number6 = 89 
switch (number6 < 0) {
  case true:
    alert( 'yes' );
    break;
  default:
    alert( "no" );
} 

//case 7 ternary
let number7 = 0 
number7 < 0 ? alert("yes") : alert("no") 

//case 8 ternary
let number8 = -71 
number8 < 0 ? alert("yes") : alert("no") 

//case 9 ternary
let number9 = 89 
number9 < 0 ? alert("yes") : alert("no") 


//exercise 5


//case1
let num1 = 3 
let num2 = 14

if(num1 % num2 == 0 || num2 % num1 == 0){
    alert(1)
} else {
    alert(0)
}

//case2
let num3 = 18 
let num4 = 2

if(num3 % num4 == 0 || num4 % num3 == 0){
    alert(1)
} else {
    alert(0)
}

//case3
let num5 = 7 
let num6 = 21

if(num5 % num6 == 0 || num6 % num5 == 0){
    alert(1)
} else {
    alert(0)
}



//exercis 6
//case 1
let month = +prompt("say number between 1 to 12")
switch (month) {
    case 1:
    alert( 'January' );
    break;
    case 2:
    alert( 'February' );
    break;
    case 3:
    alert( 'March' );
    break;
    case 4:
    alert( 'April' );
    break;
    case 5:
    alert( 'May' );
    break;
    case 6:
    alert( 'June' );
    break;
    case 7:
    alert( 'July' );
    break;
    case 8:
    alert( 'August' );
    break;
    case 9:
    alert( 'September' );
    break;
    case 10:
    alert( 'October' );
    break;
    case 11:
    alert( 'November' );
    break;
    case 12:
    alert( 'December' );
    break;
    default: 
    alert("try again")    
}

//case 2
let month = +prompt("say number between 1 to 12")

if( month == 1 ){
  alert("January")
} else if (month == 2){
  alert("February")
} else if(month == 3){
  alert ("Match")
} else if (month == 4){
  alert("April")
} else if(month == 5){
  alert("May")
}else if(month == 6){
  alert("June")  
} else if(month == 7){
  alert("July")
} else if(month == 8){
  alert("August")
} else if(month == 9){
  alert("September")
} else if(month == 10){
  alert("October")
} else if(month == 11){
  alert("November")
} else if(month == 12){
  alert("December")
} else {
  alert("Try again")
}

//exercise 7 

//case 1
let a1 = -4
let b1 = 6
let c1 = 0

if(a1 > b1 && a1 > c1){
  alert(a1)
} else if (a1 > b1){
  alert(c1)
} else {
  alert (b1)
}

//case 2
let a2 = 1020
let b2 = 500
let c2 = -450

if(a2 > b2 && a2 > c2){
  alert(a2)
} else if (a2 > b2){
  alert(c2)
} else {
  alert (b2)
}

//case 3 
let a3 = 14
let b3 = 8
let c3 = 14

if(a3 > b3 && a3 > c3){
  alert(a3)
} else if (a3 > b3){
  alert(c3)
} else {
  alert (b3)
}


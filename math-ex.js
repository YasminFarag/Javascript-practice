// 1. Random Number
// Create a function to return a random integer

function mathRound(integer){
        return Math.random(integer)
}

console.log(mathRound());


// 2. Lowest Number
// Create a function that takes an array as an argument and returns the number with the lowest value.

function mathMin(){
    myArray = [1,67,-98,30];
    let lowestNum;
    let lowestNum2;
    let combine;
    for(let i=0; i<myArray.length; i++){
        combine = myArray[i];

        for(let j = 0; j<myArray.length; j++){
            lowestNum2 = myArray[j];
            combine = Math.min(combine,myArray[j]);
        }
        return combine;
    }
}
console.log(mathMin());

function mathMin1(arg){
    return Math.min(...arg);
}
console.log(mathMin1([67,1,98,30]));


// 3. The Power Of
// Create a function that takes two numbers as arguments. Return the value of the first number to the power of the second number.

function mathPower(num1, num2){
    return Math.pow(num1, num2);
}
console.log(mathPower(5,3));

// 4. Highest Number
// Create a function that takes an array as an argument and returns the highest number in that array.

function mathMax(){
    newArray = [9,34,78,55];
    let biggest;
    let biggest2;
    let result;
    for (let i =0; i<newArray.length; i++){
        // biggest= newArray[i];

        for(let x = 0; x<newArray.length; x++){
            biggest2= newArray[x];
            result= Math.max(newArray[i], newArray[x]);
        }

     return result;
    }
}

console.log(mathMax());

// 5. Pi
// Create a function that given a number n, returns PI to n decimal places.
// Examples:
// * myPi(5) ➞ 3.14159 //5 decimal places
// * myPi(4) ➞ 3.1416 //4 decimal places
// * myPi(15) ➞ 3.141592653589793 // 15 decimal places

// function mathPi(num){
//     return Math.PI(arg);
// }
// console.log(mathPi());



 let classMembers = ['john', 'mario', 'deo', 'maja'];
 
    let mates = classMembers[Math.floor(Math.random() * classMembers.length)]
console.log(mates);



///////////////////// Date Object ///////////////////////

// 1. What day is it? 
// Create a function to to display the current date and time in the following format: Today is Wednesday. The current time is 1PM : 34 : 59. 

let myDate = new Date();
console.log(myDate);


let days = ["Sunday","monday", "tuesday", "wednesday", 'thursday', 'friday',"saturday"];
let getDayName = days[myDate.getDay()];
// console.log(getDayName);

var time = myDate.getHours() +"pm" + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

// console.log(time);
console.log(`Today is ${getDayName}, The current time is ${time}`);


// let getTime = myDate.getTime();

// console.log(getTime);
console.log('---------------- ex 2--------------------');

 // 2

 let d =["Sunday", "monday", "tuesday", "wednesday", 'thursday', 'friday','saturday']
 let getD = d[myDate.getDay()];
 console.log(getD);
 

let months = ["jan", "feb", "mar", "apr", "May", 'June', 'July', 'August', 'September', 'November', 'December'];
let getMonthName = months[myDate.getMonth()];
console.log(getMonthName);

let year = myDate.getFullYear();
console.log(year);

console.log(`${getD} ${getMonthName} ${year}`);


console.log('-------------- ex 3 -------------');

// 3. Is New Year's day a Sunday?
// Create a function to check whether the 1st of January is a Sunday between the years of 2014 and 2050.


let sum;

for( let i = 2014; i<= 2050; i++) {
    let year = new Date(i,0,1);
    if(year.getDay() == 0){
        sum += 1;   
    }
    console.log(`the 1st of January is ${year}`);
    
} 


console.log('------------------------ exe 4 ---------------------------');

// 4. How many days till Christmas?
// Create a function to calculate the days till Christmas.

let today = new Date();
let christmas =new Date(today.getFullYear() ,11,25);
if (today.getMonth() == 11 && today.getDay()> 25){
    christmas = setFullYear(christmas.getFullYear() +1);
}

let day = 1000* 60* 60* 24;
let total= Math.ceil((christmas.getTime()- today.getTime())/ (day));

console.log(`${total} days left until christmas`);


console.log('------------------------ exe 5 ---------------------------');


// 5- create a function to calculate the number of days in a specified month. 
// Examples and Expected Output: 
// * getDaysInMonth(1, 2012); --> 31
// * getDaysInMonth(2, 2012); --> 29
// * getDaysInMonth(9, 2012); --> 30
// * getDaysInMonth(12, 2012); --> 31

function getDaysInMonth(month, year){
    return new Date(year,month,0).getDate(); // 0 is the last day in the previous month
}

console.log(getDaysInMonth(2,2019));


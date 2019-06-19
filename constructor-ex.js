// # Constructor & Prototype 
console.log('___________________1_______________-');
// #### 1. Hero
// * Create a constructor function called `Hero` That will accept a variable name as an argument.
// * Use the Hero constructor to create an object myHero with the name 'Link'.

class Hero {
   constructor(value){
       this.name= value;

   }

}

const myHero = new Hero('link');
console.log(myHero);
console.log('___________________2_______________-');
// 2. Playlist
// Create a constructor function called `Song`. `Song` should take in two arguments, title and artist, which should both be added as properties when the `Song` constructor function is used. The `Song` function should also have a method called play on its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.

class Song{
    constructor(title,artist){
        this.title = title;
        this.artist= artist;
    }
}
Song.prototype.play = function() {
    return(`playing: ${this.title}, by ${this.artist}`);
    
}

const song1 = new Song('Time','PinkFloyd')
console.log(song1.play());
console.log('___________________3_______________-');

// 3. Person
// * Create a constructor function called `Person` That will accept the arguments name and occupation.
// * Use Person.prototype to add a method whoAreYou that will return: My name is [the person's name] and I am a [the person's occupation].
// * Use the person constructor to create an object person1 with the name Michael angello and occupation Ninja.
// * Use the whoAreYou method to log to the console person1's name and occupation.


class Person{
    constructor(name,occupation){
        this.name= name;
        this.occupation= occupation;
    }
    
}
Person.prototype.whoAreYou = function () {
    return `my name is ${this.name} and I am a ${this.occupation}`
}

const person1= new Person('Michael angello', 'ninja');
console.log(person1.whoAreYou());


console.log('___________________4_______________-');


// 4. 
// Create a constructor function called arrayString that will take an array as an argument. This constructor will join the array to a single string, and store the string in a variable called str. For example, the following code:
// ```javascript
// let joined = new arrayString(['c','a','t']);
// console.log(joined);
// // will log to the console:
// { str: 'cat' }

class arrayString{
    constructor(str){
       this.str = str;
    //    let word= this.str.split(' ');

    //   return word
    }

}


const joined = new arrayString(['c','a','t'].join(''));
console.log(joined);


console.log('___________________5_______________-');

class Day{
    constructor(year, month, day){
        this.year= year;
        this.month= month;
        this.day= day;
    }
    }
    function getDaysInMonth(year,month){
        let arr= [];
        let daysInMonth= new Date(year,month,0).getDate(); 
        // 0 is the last day in the previous month

        for (let i = 1; i<=daysInMonth; i++){
            arr.push(new Day(year,month,i))
        }
        console.log(arr);
    }
    getDaysInMonth(2016,3);



let today = new Date();
let days = ["Sunday","monday", "tuesday", "wednesday", 'thursday', 'friday',"saturday"];
let dayName = days[today.getDay()];


console.log(`today is ${dayName}. and the current time is ${today.getHours()} pm : ${today.getMinutes()} : ${today.getSeconds()}`);


let fullDay= days[today.getDay()];
let monthName= ['jan','feb','march','april','may','june','july','august','september','october','nov', 'dec']
let newMonth = monthName[today.getMonth()];
console.log(`${fullDay}-${newMonth}-${today.getFullYear()}`);



















let date = new Date();
console.log(date);


let weekDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
let printDay= weekDays[date.getDay()];
console.log(printDay);


let monthNme = ['jan','feb','march','april','may','june','july','august','september','october','nov', 'dec']
let printMonth = monthNme[today.getMonth()];
console.log(printMonth);
 


for(let year = 2014; year<2050; year++){
    let jahre= new Date(year,0,1);
        if(jahre.getDay() == 0)
    console.log(`on ${jahre} New Year's day is Sunday`);
    
}

let cms = new Date();
let christmas = new Date(cms.getFullYear(),11,25)
if(cms.getMonth() == 11 && cms.getDay() >=25){
    christmas.setFullYear(christmas.getFullYear() +1)
}

let calc = 1000*60*60*24;
let totalDays = Math.ceil((christmas.getTime()-cms.getTime())/( calc))

console.log(`${totalDays} days till christmas`);

function getDaysInMonth2(year,month){
    let yer = new Date(year,month,0).getDate();
    console.log(yer);
    

}
getDaysInMonth2(2012,0)


function dayss(month, year) {
	let date = new Date(month,year,0).getDate();
    console.log(date);
    
}

dayss(2,2018)



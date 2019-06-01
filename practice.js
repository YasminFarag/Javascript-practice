
// 1- reverse a number

function myFunc(myNumber){
    let reversedNum = myNumber.toString().split('').reverse().join('');
    console.log(reversedNum);
    
}

myFunc('1234');


// 2- Create a function to sort a string into alphabetical order

function sortWord(myWord){
    let sortedWord = myWord.toString().split('').sort().join('')
    console.log(sortedWord);
    
}

sortWord(['welcome']);
sortWord('hello')

// 2- Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument.

function greatestNumber(great, nur){
    let arr =[];
    for(i=0; i<great.length; i++){
        if(great[i] > nur){
            arr.push(great[i]);
        }
    }

console.log(arr);

}

greatestNumber([4, 2,90], 8);


// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years

function dogAge(age) {
    let yourDog = age * 7;
    console.log(yourDog);
    
}
dogAge(4);



// 5 Create a function to calculate how much you'll need for a lifetime supply of your favorite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 

// Examples: 
// * calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80. 
// * calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps  (3 a day) to last you till the age of 80. 


function favSnacks(age, amount){
    let estimatedAge = 80;
    let restAge = estimatedAge -age;
    let snackAmount = restAge *amount * 365; 

    console.log(snackAmount);
    }

favSnacks(40,3);


// Create a function to find the longest word in string. 
// Examples: 
// * longestWord("this is a web development course") ->  expected output: "development"



function longestWord(str){
    let splited = str.split(' ');
    let longest= 0;
    let document;
    for(i=0; i<splited.length; i++){
        if(splited[i].length > longest){
            longest= splited[i].length;
            document= splited[i];
        }
    }
    console.log(document);
    
}
longestWord('welcome to class')
longestWord('the quick brown fox')


// Create a function that takes a string in its parameters and counts the number of vowels in the string. 
// Examples: 
// * findVowels("this is a string") -> expected output: 4 vowels foundCreate a function that takes a string in its parameters and counts the number of vowels in the string. 

function countVowel(vowel){
    let found = vowel;
    let counter = 0;
    for(let i =0; i<found.length; i++){
        if(found.charAt(i) === 'a' || found.charAt(i) ==='e' || found.charAt(i) === 'i' || found.charAt(i) === 'o' || found.charAt(i) === 'u'){
            counter += 1;
        }

    } 
    console.log(counter);
    
}
countVowel('this is string');

// 9- Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 

// Examples: 
// * countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3 

function countOccurrences(myStr, letter){
    let calc =0;
    for (let i = 0; i<myStr.length; i++){
        if(myStr[i] == letter){
            calc += 1; 
        }
    }
    console.log(calc);
    
}
countOccurrences("this is a string", "i")

// 10- Create a function that counts the number of occurrences of each letter in a string. 

// Examples: 
// * countLetters("tree") -> expected output: t: 1, r: 1, e: 2

function countLetters(lett){
    let calculate =0;
    for(let i =0; i<lett.length; i++){
        if(lett[i] == lett[i]){
            calculate += 1
        }
    }
    console.log(calculate);
    
}
countLetters('tree');


//  Pie 
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Example of defining the function: equalSlices(total slices, no. recipients, slices each)

// Examples:
// * equalSlices(11, 5, 3) ➞ false
// 5 people x 3 slices each = 15 slices > 11 slices


function equalSlices(totalSlices, recipient, each){
    requiredSlices = recipient * each;
    if((totalSlices % requiredSlices)&&(totalSlices >= requiredSlices)){
        return console.log(true);
        
    } else {
        return console.log(false);
        
    }
}
equalSlices(11, 5, 3); // false
equalSlices(8, 3, 2); // true


// 3. Cubed
// Create a function that takes in an array of numbers and returns the sum of its cubes.
// Examples: 
// * sumOfCubes([1, 5, 9]) ➞ 855
// * // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([3, 4, 5]) ➞ 216

function sumOfCubes(cube){
    let result = 0;
    for(let i =0; i<cube.length; i++){
        result += cube[i] ** 3
    }
    console.log(result);
    
}
sumOfCubes([1, 5, 9]); // 855
sumOfCubes([3, 4, 5])  // 216
sumOfCubes([])         // 0

// 4. Amplify the Multiples of 4
// Create a function that takes an integer and returns an array from 1 to the given number, where:

// * If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
// * If the number cannot be divided evenly by 4, simply return the number.

// Examples
// *  amplify(4) ➞ [1, 2, 3, 40]
// * amplify(3) ➞ [1, 2, 3]
// * amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

function amplify(num){
    let multiply = [];
    for(let i =0; i<num; i++){
        if(i % 4 === 0) {
            multiply.push(i*10);
        } else{
            multiply.push(i);
        }
    }
    console.log(multiply);
    
    
    
}
amplify(13); // [ 0, 1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120]

// 5. Months
// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
// * monthName(3) ➞ "March"
// * monthName(12) ➞ "December"
// * monthName(6) ➞ "June"

function monthNumber(month){
    monthName = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let mon = monthName[month -1];
    console.log(mon);
    
}
monthNumber(8);


// 6. Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples:
// * evenNums(8) ➞ [2, 4, 6, 8]

function evenNums(even){
    let evenOdd = [];
    for (let i =1; i<=even; i++){
        if(i % 2 === 0){
            evenOdd.push(i)
        }
    }
    console.log(evenOdd);
    
}
evenNums(0); // []
evenNums(8); // [2, 4, 6, 8]

// 7. Dictionary
// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.

// Examples
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

// **Notes**
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

 function dictionary(charachter,dictWord){
   let filtered =[];
   
   for(let i=0; i<dictWord.length; i++){
       if(charachter === dictWord[i].substring(0,charachter.length)){
           filtered.push(dictWord[i]);
        
       }
   }
    console.log(filtered);
    
}
dictionary("bu",["button", "breakfast", "border",'but']);
dictionary("beau", ["pastry", "delicious", "name", "boring"])


// function dictionary(names, index, charachter){
//     let filtered = names.filter(function(word) {
//         return word.charAt(index) === charachter
//     });
//     return filtered;
    
// };
// dictionary("bu", ["button", "breakfast", "border"])
/* 
var animals = ["cat","dog","fish"];
var threeLetterAnimals = animals.filter(function(animal) {
  return animal.length === 3;
});
console.log(threeLetterAnimals); */

// 8. is a four letter word. 
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

// Examples: 
// * isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
// * isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// * isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]


function isFourLetters(letterNumber){
    let arr3= [];
    for(let i =0; i<letterNumber.length; i++){
        if(letterNumber[i].length === 4){
            arr3.push(letterNumber[i]);
        }
    }
    console.log(arr3);
    
}
isFourLetters(["Tomato", "Corn", "Lettuce"])

// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

// Examples:
// * isSymmetrical(7227) ➞ true
// * isSymmetrical(12567) ➞ false

function isSymmetrical(symmetric){
    let reversed = symmetric.toString().split('').reverse().join('');
    if(reversed == symmetric ){
        console.log(true);
        
    } else {
        console.log(false);
        
    }
}
isSymmetrical(7227)
isSymmetrical(12567)

// 10. c4n y0u r34d th15? 
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples:
// * hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// * hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// * hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

// **Notes**
// For your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

/* function hackerSpeak(replaced){
    for(let i=0; i<replaced.length; i++){
        if(replaced[i] === 'e'){
            replaced[i].replace('e', 4)
        }

    }
    console.log(replaced);
    
}
hackerSpeak('length') */


console.log('----------------------- d3-func---------------');
// 1. Add up
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples of output:
// * addUp(4) ➞ 10
// * addUp(13) ➞ 91
// * addUp(600) ➞ 180300

function addUp(nu){
    let add =0;
    for(let i =1; i<=nu; i++){
        add += i;
    }
    return add;
}
console.log(addUp(4)); // 10

console.log('------------------- exe 2 -----------------');
// 2. Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// Examples:
// * lessThanOrEqualToZero(3) ➞ false
// * lessThanOrEqualToZero(0) ➞ true
// * lessThanOrEqualToZero(-4) ➞ true
// * lessThanOrEqualToZero(10) ➞ false


function lessThanOrEqualToZero(check){
    if(check <= 0){
        return true;
    }else{
        return false
    }
    }
    console.log(lessThanOrEqualToZero(3)); // false
    console.log(lessThanOrEqualToZero(-3)) // true
    
    console.log('------------------- exe 3 -----------------');
    // 3. Missing Number 
    // Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
    // Examples: 
    // * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
    // * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
    // * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

    function missingNums(missed){
        let init;
        for(let i = 2; i<=10; i++){
            if (!missed.includes(i)){
                return i
            }
        }
    }
    console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10])); // 5
    console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8])); // 10

    console.log('------------------- exe 4 -----------------');
    // 4. isPrime?
    // Create a function that returns true if a number is prime and false if it's not. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
    // Examples:
    // * isPrime(7) ➞ true
    // * isPrime(9) ➞ false
    // * isPrime(10) ➞ false 

    function isPrime(primNum){
        for(let i =2; i<primNum; i++)
            if(primNum % i == 0)
                return false
                return primNum > 1
            
    }
   console.log(isPrime(7)); // true
   console.log('------------------- exe 5 -----------------');
//    5. snake_case -> camelCase
// Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase. 
// Examples:
// * toCamelCase("hello_world") ➞ "helloWorld"
// * toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"

   console.log('------------------- exe 6 -----------------');
//    6. One is not like the others...
//    Create a function that takes an array of numbers and return the number that's unique.
//    Examples:
//    * unique([3, 3, 3, 7, 3, 3]) ➞ 7
//    * unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//    * unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

function unique(myArrr){
    
    for(let i =0; i<myArrr.length; i++){
       let number =0;
        for(let j = 0; j<myArrr.length; j++){
            if(myArrr[i] == myArrr[j]){
               number ++
            }
            
        }
        if(number === 1)
                {return myArrr[i]}
    }
}
console.log(unique([3, 3, 3, 7, 3, 3,5,5]));

console.log('------------------- exe 7 -----------------');
// 7. Where's Waldo? 
// Create a function that takes a string and returns true if Waldo is found and false if he's not.
// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true
function isWaldoHere(newWord){
    let myWord = 'Waldo';
    for(let i =0; i<newWord.length; i++){
        if(newWord.includes(myWord)|| newWord.includes(myWord.toLowerCase())){
            return true
        }
        else{
            return false
        }
    }
}
console.log(isWaldoHere("is there wal here ?")); // false
console.log(isWaldoHere("I found you Waldo!")); // true

console.log('------------------- exe 8 -----------------');

// 8. Validate
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// **Notes**
// * The string must contain an @ character.
// * The string must contain a . character.
// * The @ must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The . and the @ must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

function validate(newMail){
    if(newMail.includes('@') && newMail.indexOf('@') > 0 && newMail.indexOf('.') > newMail.indexOf('@')){
        return ('valid Mail')
    }else
    {
        return ('not valid')
    }
}
console.log(validate('john.smith@com')); // not valid
console.log(validate('yasminfarag@hotmail.com')); // valid mail

console.log('------------------- exe 9 -----------------');

// 9. Pig Latin Translation 
// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin". 

// **Rules**
// * Move the first letter of each word to the end of the word.
// * Add "ay" to the end of the word.
// * Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

 function pigLatin(dict){
    let pushToArray = [];
    let wor;
    let toArray = dict.split(' ');
    for(let i =0;i<toArray.length; i++){
        for(let j =0; j<toArray.length; j++){
            if(toArray[i].indexOf('a')>0 || toArray[i].indexOf('e')> 0 || toArray[i].indexOf('i')> 0 || toArray[i].indexOf('o') > 0 || toArray[i].indexOf('u') > 0)
            {
                wor = toArray[i].substring(1) +toArray[i].substring(0,1) + 'ay'
            } else{
                wor = toArray[i] + 'way';
            }
        }
       pushToArray.push(wor)
    }
console.log(pushToArray.join(' '))
}
pigLatin("Cats are great pets") // atsCay reaay reatgay etspay

 
console.log('------------------- exe 10 -----------------');

// 10. X To The Power of X
// Create a function that takes a base number and an exponent number and returns the calculation.

// Examples
// * calculateExponent(5, 5) ➞ 3125
// * calculateExponent(10, 10) ➞ 10000000000
// * calculateExponent(3, 3) ➞ 27

function calculateExponent(numberr, base){
    console.log(Math.pow(numberr,base));
    
}
calculateExponent(5,5) // 3125


console.log('----------advanced array methods-------------');

//1. Increment by 1
// Given an array of numbers, e.g. ```javascript let arrayOfNumbers = [3, 45, 6, 56, 7, 9]; ``` , create a function that increments each element by 1. Return the a new array of modified elements. 


let arrayOfNumbers =[3, 45, 6, 56, 7, 9];
let modifiedArray = arrayOfNumbers.map(value => value +1);
console.log(modifiedArray); // [ 4, 46, 7, 57, 8, 10 ]
console.log('----------------------- 2----------------');


// 2. Sum Up
// Write a function called sum that uses the reduce to sum up an array of numbers. Do NOT use a typical loop; just use the reduce method.

// * Examples:
// * sum([1,2,3,4,5]); //returns 15
// * sum([6,7,7]); //returns 20

let sumUp = [1,2,3,4,5];
const addedUp=(accumulator, currentValue) => accumulator + currentValue;
let result = sumUp.reduce(addedUp);

console.log(result); // 15


console.log('----------------------- 3 ----------------');

// 3. instanceOf
// ##### Reduce
// Sum up the instances of each of these:
// ```javascript
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogo stick'];
// ```
// * Expected Output: 
// ```javascript
// object = {
//   bike: 2
//   car: 5
//   pogo stick: 1
//   truck: 3
//   van: 2
//   walk: 2
// }


let data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogo stick'];

let count = data.reduce(function(elements,value){
    if(value in elements){
        elements[value] ++;
    } else {
        elements[value] = 1
    }
    return elements;
},{})

console.log(count);
// { car: 5, truck: 3, bike: 2, walk: 2, van: 2, 'pogo stick': 1 }

console.log('----------------------- 4 ----------------');
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];


// ##### Map
// * Give an array of inventors' first and last names. 
let mapping= inventors.map(outPut =>{
    let pushObj = {};
    pushObj[outPut.first] =  outPut.last
    return pushObj
})
console.log(mapping);


// ##### Reduce
// * How many years did all of the inventors live? 


let countYears = inventors.reduce((obj,person) =>{
    obj[person.first]= person.passed - person.year;
    return obj

},{})
console.log(countYears);


console.log('----------------------- 5 ----------------');

// 5. Square Root
// Given an array of numbers, find the square root of those numbers using map. 

let sqrt = [36,16];
let all = sqrt.map(Math.sqrt);
console.log(all);    //[ 6, 4 ]


console.log('----------------------- 6 ----------------');
// 6. Instances of Letters
// Create a function that takes a string as an argument and counts the number of each letter in that string. 

// let details = ['mobile', 'car','tv','equipment'].map(value => value.length)


// console.log(details);


let word= 'javascript';
let splitted = word.split('');

let str = splitted.reduce(function(total,letter){
    if(letter in total){
        total[letter]++;
    }else{
        total[letter] = 1;

    }
    return total;

},{})
console.log(str);
// { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

console.log('----------------------- 7 ----------------');

// 7. List of Movies
// Given the code below, complete the task
// * Create a function that returns an array of your friends favourite films!

let friends = [{
    name: 'Maria',
    films: ['Avengers: Infinity War', 'Avatar' ],
    age: 22
  }, {
    name: 'John',
    films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
    age: 29
  }, {
    name: 'Jean',
    films: ['Deadpool', 'Incredibles 2'],
    age: 20
  }];

  let favMovies = friends.reduce((acc,curr)=>{
      return [...acc,...curr.films]
  },[]);

  console.log(favMovies);
  

  console.log('----------------------- 8 ----------------');

//   8. Filter Evens
// Write a function called filterEvens that uses the filter method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, and should not use a loop.

// * Examples:

// * filterEvens([1,2,3,11,12,13]); //returns [2,12]

let even = [1,2,3,11,12,13];
let filtered = even.filter(val =>{
      return  val % 2=== 0
});

console.log(filtered);


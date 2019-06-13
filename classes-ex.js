// # Classes

// #### 1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".

class Person{
constructor(name,age){
this.name= name
this.age= age
}

describe () {
   
    return(`${this.name}, ${this.age} years old`)
}
}

 let personDetails= new Person('mario', 25)
 console.log(personDetails);


//  2. Volume
//  Write a JavaScript program to get the volume of a cylinder with four decimal places using object classes. 
//  * Note: Volume of a cylinder : V = πr2h - r is the radius and h is the height of the cylinder.
class Cylinder{
    constructor(radius,height){
        this.radius= radius;
        this.height= height;
    }

    get volume (){
    return (Math.PI * Math.pow(this.radius,2)* this.height).toFixed(2);
    }
}

const cly = new Cylinder(3,5);
console.log(cly.volume); // 141.37


console.log('___________________ 2____________________');
// tik tok


  class Clock {
    constructor(template){
    this.template=template;
    let timer;
  
    this.render= function() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(this.timer);
    };
  
    this.start = function() {
      this.render();
      this.timer = setInterval(this.render, 1000);
    };

}
  }
  
  let clock = new Clock('h:m:s');
  clock.start();
  // clock.stop();

  console.log('___________________ 4____________________');

//   4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

  class Tv{
    constructor(brand){
      this.brand= brand;
      this.channel= 1;
      this.volume= 50;
    }

    increase(add){
      if(add == '+'){
        this.volume++
        if(volume >=100){
          console.log(`${this.volume} is too high`);
          
        }
      }

      
  }
    decrease(add){
      if(add == '-'){
        this.volume--
        if(volume<=0){
          console.log(`${this.volume} is too low`);
        }
      }
    }

    setChannel(id){
      if(id <=50){
      this.channel = id
      console.log(`${this.channel}`);
      

    } else {
      this.channel= 1;
      
      console.log(`${this.channel}`);
    }
  }

  reset(brand){
    this.brand= brand;
      this.channel= 1;
      this.volume= 50;
  }

  status(){
    console.log(`${this.brand} at channel ${this.channel} at volume ${this.volume}`);
    
  }

  }

  let newBrand = new Tv('panasonic')
  console.log(newBrand);
  newBrand.setChannel(40);

  console.log(newBrand);
  

  
console.log('___________________ 5____________________');

// 5. Circle
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).


class Circle{
constructor(radius){
    this.radius= radius;
    this.getArea= function () {
    
        return Math.PI * this.radius * this.radius;
    }

    this.getPerimeter = function() {
        
        return 2*Math.PI *this.radius;
    }
}
}

let circ = new Circle(11);
console.log(circ.getArea());  // 380.1327110843649


let circ2 = new Circle(4.44);
console.log(circ2.getPerimeter());  // 27.897342763877365
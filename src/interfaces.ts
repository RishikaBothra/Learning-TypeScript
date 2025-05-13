// 1. How can you assign types to objects?

function greet(user:{
    name: string;
    age: number;
}) {
    console.log('Hello ' + user.name + '!');
}
let user = {
    name: 'fin',
    age: 20
}
greet(user);

// 2. adding a object inide a object

function greet1(user1: {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    }
}) {
    console.log('Hello ' + user.name + '!');
}

let user1 = {
    name: 'fin',
    age: 20,
    address: {
        city: 'Ahmedabad',
        state: 'Gujarat'
    }
}
greet1(user1);

// 3. here we are again and again writing the same type of object so we can create a interface and use it in the function

interface UserType{ //custom type foyour project
    fistname: string;
    lastname: string;
    age: number;
}

function greetuser(user:UserType){
    console.log('Hello ' + user.fistname + " " + user.lastname+'!');
}

let user2: UserType = {
    fistname: 'fin',
    lastname: 'jhoseph',
    age: 20
}

greetuser(user2);

// In the above code, when we create an interface, every property defined in the interface must be present in user2; otherwise, it will give an error

// 4. if we want to make a property optional than we can use ? in the interface

interface userType1{
    firstname:string;
    lastname:string;
    age?:number;
}

function hello(user:userType1){
    console.log('Hello ' + user.firstname + " " + user.lastname+'!');
}

let user3:userType1 = {
    firstname:'fin',
    lastname:'joseph'
}// here we are not giving age so it will not give an error

hello(user3);

// one more way is using the or operator and undefined

interface userType2{
    firstname:string;
    lastname:string;
    age: undefined |number; // here we are using or operator
}

function hello1(user:userType2){
    console.log('Hello ' + user.firstname + " " + user.lastname+'!');
}
let user4:userType2 = {
    firstname:'fin',
    lastname:'joseph',
    age:undefined // here we are using undefined
}
hello1(user4);


// 5. another example

interface User{
    name:string,
    age:number,
    address?:{
        city?:string,
        country?:string,
        pincode?:string,
    }//here we have use ?in the every property of address so it will not give an error if we dont give the value of city and country.If we give ? only to the address then it will give an error if we dont give the value of city and country.
}

function userinfo(user:User){
    console.log('hello'+' '+user.name+' '+'welcome');
    console.log('your age is'+' '+user.age);
    if(user.address){
        console.log('your city is'+' '+user.address.city);
        console.log('your country is'+' '+user.address.country);
        console.log('your pincode is'+' '+user.address.pincode);
    }

}
let user5:User={
    name:'Raj',
    age:20,
    address:{
        city:'ahmedabad',
        country:'india',
        pincode:'380006'
    }
}

let user6:User = {
    name:'Rish',
    age:18,
    address:{
        pincode:'380001'
    }
    // here we are not giving city and country so it will not give an error and the default value will be undefined.

}

userinfo(user5);
userinfo(user6);

// 6. one interface can use another interface

interface Address{
    city:string;
    country:string,
    pincode:string;
    houseNo:string;
};

interface userinformation{
    name:string;
    age:number;
    address:Address;
}

interface office{
    address:Address;
}

function userinfo1(user:userinformation){
    console.log('hello'+' '+user.name+' '+'welcome');
    console.log('your age is'+' '+user.age);
    console.log('your city is'+' '+user.address.city);
    console.log('your country is'+' '+user.address.country);
    console.log('your pincode is'+' '+user.address.pincode);
    console.log('your houseNo is'+' '+user.address.houseNo);
}
let user7:userinformation={
    name:'Raj',
    age:20,
    address:{
        city:'ahmedabad',
        country:'india',
        pincode:'380006',
        houseNo:'123'
    }
}

userinfo1(user7);
// here we are using the address interface in the userinformation interface and we are using the address interface in the office interface as well. so we can use the same interface in multiple places.


// 7. Interfaces have another special property.You can implement interfaces as class.

interface People{
    name:string,
    age:number,
    greet(name:string):string,// can also be written like this greet:() => string
}//greet is a function not a premative.

let person:People = {
    name:'rish',
    age:18,
    greet:() => {
        return "hi" + " " +  person.name;
    }
}

console.log(person.greet(person.name));

// 8. making a class from above interface
class manager implements People{
    name:string;
    age:number;
    //we can add more properties in the class which are not in the interface,but its compulsory to add the properties which are in the interface.
    constructor(name:string,age:number){
        this.name = name;// here we are using this keyword to access the name and age property of the class
        this.age = age;

    }
    greet(name:string):string{
        return "hi" + " " +  this.name;
    }

}

let manager1 = new manager('fin',20);
//The new keyword is used to create an instance of a class.In typescript when u use constructor u have to use new kwyword.
console.log(manager1.greet(manager1.name));


// 9. using extend fun

class shape{
    area(){
        console.log("hi i am area");
    }
}

class Rectangle extends shape{
    width:number;
    height:number;

    constructor(){
        super();// here we are using super keyword to access the constructor of the parent class
        this.width = 10;
        this.height = 20;
    }
}

 const r = new Rectangle();
r.area();

// 10. one more example of interface and class

interface User1{
    name:string;
    age:number;
    isLegal():boolean;
}

class Manager implements User1{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    isLegal(): boolean {
        return this.age >= 18;
    }
}
const manager2 = new Manager('fin',20);
console.log(manager2.isLegal());


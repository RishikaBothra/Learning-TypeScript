// create tow types call user and admin
//create a function that takes either a user or a admin as input .and returns a string saying welcom,[name].

type user ={
    name:string;
    age:number;
}

type admin = {
    name:string;
    permission:string;
}
type UserorAdmin = user | admin; // here we are using the union types,here we are using the | operator to combine the two types into one type.

function greetUserOrAdmin(user:UserorAdmin):string{
    return 'welcome' + " " + user.name;
}

let u:user = {
    name:'fin',
    age:20
}
let a:admin = {
    name:'fin',
    permission:'admin'
}
console.log(greetUserOrAdmin(u));
console.log(greetUserOrAdmin(a));

// create a function that takes an array of numbers and returns the sum of the numbers in the array
function sum(array:number[]):number{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
let array:number[] = [1,2,3,4,5,6,7,8,9];
console.log(sum(arr));

// crearte a interface anmed user and return sum of the ages.
interface Userageadd {
    name: string;
    age: number;
}
function sumage(userOne:Userageadd, userTwo:Userageadd):number{
    return userOne.age + userTwo.age;
}
let userOne:Userageadd = {
    name: 'fin',
    age: 20
}

let userTwo:Userageadd = {
    name: 'fin',
    age: 20
}

console.log(sumage(userOne, userTwo));
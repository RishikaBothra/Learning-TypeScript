// write a function that greets a user by name

function usergreet( firstname: string){
   console.log('Hello ' + firstname + '!');
}
usergreet('fin')

// Write a function that calculates the sum of two functions

function Sum(a:number,b:number){
    return a+b;
}
console.log(Sum(5,10))

// Return true or false based on if a user is 18+

function isLegal(age: number){
    if(age>=18){
        console.log('true')}
    else{
        console.log('false');
    }

}
isLegal(20)
isLegal(17)

//Create a function that takes another function as input, and runs it after 1 second.


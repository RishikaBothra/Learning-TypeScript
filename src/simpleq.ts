//-->>interfaces and types
//-->>simple codes..

// 1.even number checker

function isEven(num:number):boolean{ // here we are giving the return type of the function thats why we are giving boolean

    if(num%2==0){
        return true;
    }
    else{
        return false;
    }

}

console.log(isEven(10));
console.log(isEven(11));

// 2. greet user

function greetu(name:string):string{
    return 'hello'+ " " + name;
}

console.log(greetu('riya'));






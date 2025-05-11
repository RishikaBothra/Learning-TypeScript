//How can you assign types to objects?

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

//adding a object inide a object

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

//here we are again and again writing the same type of object so we can create a interface and use it in the function

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

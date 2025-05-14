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

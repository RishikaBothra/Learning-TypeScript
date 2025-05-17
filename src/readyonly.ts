// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

//💡 This is compile time checking, not runtime (unlike const)

type userpo = {
    readonly name:string;// instead of name:string we use readonly name:string
    readonly age:number;
}

const userp: Readonly<userpo>= {//you can write like this also
    name: 'fin',
    age: 20

}

user.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.


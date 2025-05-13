abstract class userin{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract greet(): string;
    hello(){
        console.log('hello' + ' ' + this.name);
    }
}//abstract classes have some default implementations.

class employee extends userin{
    name:string;
    constructor(name:string){
        super(name)
        this.name = name;

    }
    greet(){
        return 'hi' + ' ' + this.name;
    }
}


//Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

interface Userpick{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};

/*interface UpdatedProps {
    name?:string;
    age?:number;
    password?:string;
};

function updateUser(updatedProps:UpdatedProps){
    //hit the datbase to update the user
}*/

// here we can use this ? but similarly as pick if we change the name of the property in the Userpick interface then we have to change the same property in the UpdatedProps interface.
// so to avoid this we use the Partial method.

type Updated = Pick<Userpick, 'name' | 'age' | 'password'>;
type Updatedoptional = Partial<Updated>;
// here we are using the Partial method to create a new type called Updatedoptional which has only the properties name, age and password from the Userpick interface.

function updateuser(updatedProps:Updatedoptional){
    console.log(updatedProps);
}

const updateduser:Updatedoptional = {
    name: 'fin',
    age: 20,
    password: 'fin'
}

//eg

interface User9 {
    id: string;
    name: string;
    age: number
    email: string;
    password: string;
};

type UpdateProps = Pick<User9, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser1(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser1({})

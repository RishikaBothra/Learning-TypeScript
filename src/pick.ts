// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).

interface Userpick{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};

/*interface UpdatedProps {
    name:string;
    age:number;
    password:string;
};*/ 
// if we make two interfaces than if we change one property in one interface then we have to change the same property in the other interface.
// so to avoid this we use the pick method.

type UpdatedProps = Pick<Userpick, 'name' | 'age' | 'password'>;

// here we are using the pick method to create a new type called UpdatedProps which has only the properties name, age and password from the Userpick interface.
// so if we change the name of the property in the Userpick interface then we have to change the same property in the UpdatedProps interface.

function updateUser(updatedProps:UpdatedProps){
    //hit the datbase to update the user
}

//eg

interface userpick{
    id:number;
    name:string;
    email:string;
    createdAt:Date;

};

type Userprofile = Pick<userpick,'name'|'email'>;

const diaplayuserprofile = (user:Userprofile) => {
      console.log(`Name: ${user.name}, Email: ${user.email}`)
}
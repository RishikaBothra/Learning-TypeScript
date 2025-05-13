// difference between type and interface
//interface does not support union types, but type supports union types
//union can have either or all properties,while intersection must have all properties


//1. intersecting types

type Employee = {
    name:string;
    startdate :string;

}

type MAnager = {
    name:string;
    department:string;
}

type teamlead = Employee & MAnager; // here we are using the intersecting types,here we are using the & operator to combine the two types into one type.

let e:Employee = {
    name:'fin',
    startdate:'2023-10-01'
}

let m:MAnager = {
    name:'fin',
    department:'IT'
}

let tl:teamlead = {
    name:'fin',
    startdate:'2023-10-01',
    department:'IT'
}// here we are using the intersecting types, so we have to give all the properties of both the types, so we have to give name, startdate and department. If we dont give any one of them then it will give an error.

//2. union types

type Employee1 = {
    name:string;
    startdate :string;

}

type MAnager1 = {
    name:string;
    department:string;
}

type teamlead1 = Employee1 | MAnager1; // here we are using the union types,here we are using the | operator to combine the two types into one type.

let e1:Employee1 = {
    name:'fin',
    startdate:'2023-10-01'
}   

let m1:MAnager1 = {
    name:'fin',
    department:'IT'
}
let tl1:teamlead1 = {
    name:'fin',
    startdate:'2023-10-01',
    department:'IT'
} // here its not compulsoury to give department and startdate because we are using union types, so we can give any one of them or both of them or none of them.
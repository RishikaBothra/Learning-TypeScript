// Record let’s you give a cleaner type to objects

type USER =  {
    id:string;
    name:string;
};
type Users = {
    [key:string]: USER;
}

const userss :Users = {
    '1': {
        id: '1',
        name: 'fin'
    },
    '2': {
        id: '2',
        name: 'john'
    },
    '3': {
        id: '3',
        name: 'doe'
    }
}
// this is the simple way to create an object with the key as string and value as Userl.
//instead of using the above method we can use the Record method.

interface User {
  id: string;
  name: string;
}

type Userf = Record<string, User>;//can also be written as: Record<string, { id: string; name: string; }>

const userer: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(userer['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

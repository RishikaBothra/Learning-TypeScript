//Given an array of positive integers as input, return the maximum value in the array

function max(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return max;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(max(arr));

//Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface Usero {
    firstName: string;
    lastName: string;
    age: number;
    name: string; // Added the 'name' property
}

function filterLegalUsers(users: User[]): User[] {
    let ans: User[] = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}
let users: Usero[] = [
    { firstName: 'John', lastName: 'Doe', age: 20, name: 'John Doe' },
    { firstName: 'Jane', lastName: 'Smith', age: 17, name: 'Jane Smith' },
    { firstName: 'Bob', lastName: 'Johnson', age: 25, name: 'Bob Johnson' }
];

const legalUsers = filterLegalUsers(users);
console.log(legalUsers);


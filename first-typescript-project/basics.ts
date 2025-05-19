

type Address = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address: Address
}


let person1: Person = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
        street: "14th Avenue",
        city: "Carlifonia",
        country: "USA"
    }
}

let person2: Person = {
    name: "Janet",
    age: 65,
    isStudent: false,
    address: {
        street: "15th Avenue",
        city: "NYC",
        country: "USA"
    }
}

let people: Person[] = [person1, person2]

//Another sytax:

let peoples: Array<Person> = [person1, person2]
let age: number[] = [100, 200, 300]//Tells typescript that the array should only contain numbers. When it's a primitive data type, the (number[] is optional)


let myName: "Bob" = "Bob";

const myName2 = "Bob Ziroll" // This is a literal type (not just any generic string) but a 'Bob Ziroll' type string
//In other ways its unchangeable (like in JS).

//Unions + Literals

type User = {
    id: number
    username: string,
    role: UserRole
}

type UpdatedUser = Partial<User>

type UserRole = "guest" | "member" | "admin";

let nextUserId = 1;


const users: User[] = [
    { id: nextUserId++, username: "lemis_kutswa", role: "admin"}, 
    { id: nextUserId ++, username: "thomas_chamberlain", role: "guest"},
    { id: nextUserId++, username: "jon_jones", role: "member"}
]

function updateUser( id: number, updates: UpdatedUser) {
    const foundUser = users.find(users => users.id === id);

    if (!foundUser){
        console.error("User was not found!")
        return;
    }

    Object.assign(foundUser, updates)
}


function addNewUser(newUser: Omit<User, "id">): User { //type Partial<User> can't work because you return a complete user object here
    const user: User = {
            id: nextUserId++,
        ...newUser}
    users.push(user);
    return user;
}


// function fetchUserDetails(username: string): User {
//     const user = users.find(user => user.username === username);
//     if(!user) {
//         throw new Error(`User with ${username} was not found`)
//     }
    
//     return user;
// }
//Return types - Adding the User type after the parameter tells typescript which data should be returned here.




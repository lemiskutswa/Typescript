

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


let myName = "Bob";

const myName2 = "Bob Ziroll" // This is a literal type (not just any generic string) but a 'Bob Ziroll' type string
//In other ways its unchangeable (like in JS).
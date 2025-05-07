
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
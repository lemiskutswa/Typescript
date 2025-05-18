
type Pizza = {
    id: number,
    name: string,
    price: number
}


type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let nextPizzaId = 1;
const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Pepperoni", price : 2.99},
    {id: nextPizzaId++, name: "Hawaiian", price : 3.99},
    {id: nextPizzaId++, name: "Meat Lovers", price : 4.99},
    {id: nextPizzaId++, name: "Veggie", price : 3.49},
    {id: nextPizzaId++, name: "BBQ Chicken", price : 4.49}
]

let cashInRegister = 1000.00
let nextOrderId = 1;
const orderHistory: Order[] = []

function addNewPizza (pizzaObject: Pizza): void {
    pizzaObject.id = nextPizzaId++;
    menu.push(pizzaObject)
}

function placeOrder (pizzaName: string): Order | undefined {
     const selectedPizza = menu.find(pizzaObject => pizzaObject.name === pizzaName)

     if (!selectedPizza) {
        console.error(`${pizzaName} is not in the menu`)
        return;
     }
     cashInRegister += selectedPizza.price
     const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
     orderHistory.push(newOrder)
     return newOrder;
}

function completeOrder (orderId: number): Order | undefined {
    const order = orderHistory.find(order => order.id === orderId)

    if (!order) {
        console.error(`${orderId} was not found in the order queue.`);
        return;
    }
    order.status = "completed"
    return order;
}

//Utility function

function getPizzaDetails (identifier: string | number): Pizza | undefined {//Type narrowing
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError ("Parameter `identifier` must either be a string or a number")
    }
    
}

// console.log(getPizzaDetails(1));
addNewPizza({ name: "Chiken Tikka", price: 13})
addNewPizza({ name: "Haawaiian", price: 3.99})

console.log(menu)

// placeOrder("Chicken Tikka");

// completeOrder(1);

// console.log("Cash In Register: ", cashInRegister);
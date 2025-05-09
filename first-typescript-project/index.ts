
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

const menu: Pizza[] = [
    {id: 1, name: "Pepperoni", price : 2.99},
    {id: 2, name: "Hawaiian", price : 3.99},
    {id: 3, name: "Meat Lovers", price : 4.99},
    {id: 4, name: "Veggie", price : 3.49},
    {id: 5, name: "BBQ Chicken", price : 4.49}
]

let cashInRegister = 1000.00
let nextOrderId = 1;
const orderHistory: Order[] = []

function addNewPizza (pizzaObject: Pizza) {
    menu.push(pizzaObject)
}

function placeOrder (pizzaName: string) {
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

function completeOrder (orderId: number) {
    const order = orderHistory.find(order => order.id === orderId)

    if (!order) {
        console.error(`${orderId} was not found in the order queue.`);
        return;
    }
    order.status = "completed"
    return order;
}

//Utility function

function getPizzaDetails (identifier: string | number) {//Type narrowing
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() ===identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    }

    throw new TypeError ("Parameter `identifier` must either be a string or a number")
}

console.log(getPizzaDetails(1));
// addNewPizza({id: 5, name: "Chiken Tikka", price: 13})
// addNewPizza({id:2, name: "Haawaiian", price: 3.99})

// placeOrder("Chicken Tikka");

// completeOrder(1);

console.log("Cash In Register: ", cashInRegister);
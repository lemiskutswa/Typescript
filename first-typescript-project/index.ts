
type Pizza = {
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: string
}

const menu = [
    {name: "Pepperoni", price : 2.99},
    {name: "Hawaiian", price : 3.99},
    {name: "Meat Lovers", price : 4.99},
    {name: "Veggie", price : 3.49},
    {name: "BBQ Chicken", price : 4.49}
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
     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
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

addNewPizza({name: "Chiken Tikka", price: 13})
addNewPizza({name: "Haawaiian", price: 3.99})

placeOrder("Chicken Tikka");

completeOrder(1);

console.log("Cash In Register: ", cashInRegister);
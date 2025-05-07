
type Pizza = {
    name: string,
    price: number
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
const orderQueue = []

function addNewPizza (pizzaObject: Pizza) {
    menu.push(pizzaObject)
}

function placeOrder (pizzaName: string) {
     const selectedPizza = menu.find(pizzaObject => pizzaObject.name === pizzaName)

     if (!selectedPizza) {
        console.log(`${pizzaName} is not in the menu`)
        return;
     }
     cashInRegister += selectedPizza.price
     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
     orderQueue.push(newOrder)
     return newOrder;
}

function completeOrder (orderId: number) {
    const order = orderQueue.find(order => order.Id === orderId)
    order.status = "completed"
    return order;
}

addNewPizza({name: "Chiken Tikka", price: 13})

placeOrder("Chicken Tikka");

completeOrder(1);

console.log("Cash In Register: ", cashInRegister);
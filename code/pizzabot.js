const pizzaPrice = 80;
alert(`Hey! Happy to serve your pizza. On our menu we have 
    Vegetarian Pizza, Hawaiian Pizza, Pepperoni Pizza.`);

const userPizzaOrder = prompt(`Enter the name of the pizza you want to order today.`);
const orderQuantity = prompt(`How many of ${userPizzaOrder} do you want?`);
const pizzas = ['Vegetarian Pizza', 'Hawaiian Pizza', 'Pepperoni Pizza'];

const totalCost = (quantity) => { return quantity * pizzaPrice };

function validatePizza(userPizzaOrder, orderQuantity) {
    if (pizzas.includes(userPizzaOrder)) {
        const quantity = parseInt(orderQuantity, 10);  // Konvertera orderQuantity till heltal
        if (isNaN(quantity) || quantity <= 0) {
            alert(`Please enter a valid quantity.`);
        } else {
            const totalOrder = totalCost(quantity);  // Beräkna totalkostnaden
            alert(`Great, I'll get started on your ${userPizzaOrder} right away, it will cost ${totalOrder} kr. 
                `);
        }
    } else {
        alert(`We don't have that pizza`);
    }
}

validatePizza(userPizzaOrder, orderQuantity);





//const namn = () =>{}
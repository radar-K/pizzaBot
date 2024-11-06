const pizzaPrice = 80;
alert(`Hey! Happy to serve your pizza. On our menu we have 
    Vegetarian Pizza, Hawaiian Pizza, Pepperoni Pizza.`);

let userPizzaOrder = prompt(`Enter the name of the pizza you want to order today.`).toLowerCase();
const pizzas = ['vegetarian pizza', 'hawaiian pizza', 'pepperoni pizza'];

const checkOrderName = (userPizzaOrder) => {
    while(!pizzas.includes(userPizzaOrder)){
        alert(`We don't have that pizza on the menu`);
        userPizzaOrder = prompt(`Enter the name of the pizza you want to order today.`).toLowerCase();
    }
    return userPizzaOrder;
};

userPizzaOrder = checkOrderName(userPizzaOrder);


const getOrderQuantity = () => {
    let orderQuantity;
    do {
        orderQuantity = parseInt(prompt(`How many of ${userPizzaOrder} do you want?`), 10);
        if (isNaN(orderQuantity) || orderQuantity <= 0) {
            alert("Please enter a valid quantity.");
        }
    } while (isNaN(orderQuantity) || orderQuantity <= 0); 
    return orderQuantity;
};

// Hämta antal pizzor
const orderQuantity = getOrderQuantity();

const totalCost = (orderQuantity) => orderQuantity * pizzaPrice; 

// Beräkna kostnaden för beställningen
const cost = totalCost(orderQuantity);

const cookingTime = (orderQuantity) => {
    if (orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15;
    } else {
        return 20;
    }
};

const completeOrder = () => {
    const time = cookingTime(orderQuantity);
    const cost = totalCost(orderQuantity);
    
    alert(`Great, I'll get started on your ${userPizzaOrder}. It will cost ${cost} kr and will take approximately ${time} minutes.`);
};

// Anropa completeOrder när alla uppgifter är ifyllda
completeOrder();



//const namn = () =>{}

    // function validatePizza(userPizzaOrder, orderQuantity) {
    //     if (pizzas.includes(userPizzaOrder)) {
    //         const quantity = parseInt(orderQuantity, 10);  // Konvertera orderQuantity till heltal
    //         if (isNaN(quantity) || quantity <= 0) {
    //             alert(`Please enter a valid quantity.`);
    //         } else {
    //             const totalOrder = totalCost(quantity);  // Beräkna totalkostnaden
    //             alert(`Great, I'll get started on your ${userPizzaOrder} right away, it will cost ${totalOrder} kr.`);
    //         }
    //     } else {
    //         alert(`We don't have that pizza`);
    //     }
    // }
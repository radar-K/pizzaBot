const pizzaPrice = 80;
const pizzas = ['vegetarian pizza', 'hawaiian pizza', 'pepperoni pizza'];

const checkOrderName = (userPizzaOrder) => {
    return pizzas.includes(userPizzaOrder);
};


// Kontrollera att kvantiteten är ett positivt tal
const getOrderQuantity = (quantity) => {
    return quantity > 0 ? quantity : 0;
};

const totalCost = (orderQuantity) => orderQuantity * pizzaPrice; 

const cookingTime = (orderQuantity) => {
    if (orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15;
    } else {
        return 20;
    }
};

// Hantera formulärinlämning
document.getElementById('pizzaInput').addEventListener('submit', (event) => {
    event.preventDefault(); // Förhindra att formuläret skickas och sidan laddas om

    // Hämta användarens input
    let userPizzaOrder = document.getElementById('pizzaName').value.toLowerCase();
    let orderQuantity = parseInt(document.getElementById('quantity').value, 10);

    // Kontrollera om pizzan finns på menyn
    if (!checkOrderName(userPizzaOrder)) {
        document.getElementById('orderResult').innerHTML = `Sorry, we don't have that pizza on the menu. Please choose from: Vegetarian Pizza, Hawaiian Pizza, or Pepperoni Pizza.`;
        return; // Avsluta om pizza inte finns
    }

    // Kontrollera om kvantiteten är giltig
    orderQuantity = getOrderQuantity(orderQuantity);
    if (orderQuantity === 0) {
        document.getElementById('orderResult').innerHTML = "Please enter a valid quantity greater than 0.";
        return; // Avsluta om kvantiteten inte är giltig
    }

    // Beräkna kostnad och tillagningstid
    const cost = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);

    // Visa resultatet på sidan
    document.getElementById('orderResult').innerHTML = `Great, I'll get started on your ${userPizzaOrder}. It will cost ${cost} kr and will take approximately ${time} minutes.`;
});





/* bilder karusellen*/
const items = document.querySelectorAll('.item');
let currentIndex = 0;
let userPizzaOrder = ''; // Variabel för att hålla reda på användarens pizzaorder

// Visa aktuell bild baserat på index
function showSlide(index){
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

// Nästa bild
function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

// Föregående bild
function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}




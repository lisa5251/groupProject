const cars = [
    {
        id: 1,
        make: 'Tesla',
        model: 'Model S',
        price: 79999,
        image: 'https://via.placeholder.com/250x150?text=Tesla+Model+S'
    },
    {
        id: 2,
        make: 'Ford',
        model: 'Mustang',
        price: 55999,
        image: 'https://via.placeholder.com/250x150?text=Ford+Mustang'
    },
    {
        id: 3,
        make: 'BMW',
        model: 'M3',
        price: 69999,
        image: 'https://via.placeholder.com/250x150?text=BMW+M3'
    },
    {
        id: 4,
        make: 'Audi',
        model: 'A4',
        price: 42999,
        image: 'https://via.placeholder.com/250x150?text=Audi+A4'
    }
];

let cart = [];

// Function to display cars
function displayCars() {
    const carList = document.querySelector('.car-list');
    carList.innerHTML = ''; // Clear the existing car list

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car');

        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}">
            <h3>${car.make} ${car.model}</h3>
            <p>$${car.price}</p>
            <button onclick="addToCart(${car.id})">Add to Cart</button>
        `;
        carList.appendChild(carCard);
    });
}

// Function to add car to cart
function addToCart(carId) {
    const car = cars.find(c => c.id === carId);
    cart.push(car);
    updateCart();
}

// Function to update the cart count and total price
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    cartCount.textContent = cart.length;

    const totalPrice = cart.reduce((total, car) => total + car.price, 0);
    cartTotal.textContent = totalPrice.toFixed(2);
}

// Initialize the app by displaying cars
displayCars();

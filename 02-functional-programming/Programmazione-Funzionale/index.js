// ESERCIZIO 1

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const calculate = (x, y, operation) => operation(x, y);
console.log(calculate(3, 6, divide));

// ESERCIZIO 2

let prodotti = [
    { name: "libro", brand: "warhammer", price: 12, quantity: 3 },
    { name: "penna", brand: "bic", price: 1, quantity: 30 },
    { name: "tazza", brand: "sartori", price: 6, quantity: 9 },
    { name: "cuffie", brand: "hyperx", price: 56, quantity: 2 },
    { name: "orologio", brand: "amazon", price: 18, quantity: 15 },
];

const totalPrice = (array) => {
    return array.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
};

const totalPriceByBrand = (array, brand) => {
    return array
        .filter((product) => product.brand === brand)
        .reduce((acc, { price, quantity }) => acc + price * quantity, 0);
};

const quantityByBrand = (array) => {
    return array.reduce((acc, { brand, quantity }) => {
        acc[brand] = (acc[brand] || 0) + quantity;
        return acc;
    }, {});
};

const filterByPrice = (array, minPrice) => {
    return array.filter(({ price }) => price > minPrice);
};

const manipulate = (array, callback) => {
    return callback(array);
};

console.log("Prezzo totale dei prodotti:", manipulate(prodotti, totalPrice));
console.log("Prezzo totale prodotti brand 'bic':", manipulate(prodotti, (array) => totalPriceByBrand(array, "bic")));
console.log("Quantità di prodotti per brand:", manipulate(prodotti, quantityByBrand));
console.log("Prodotti con prezzo maggiore di 10:", manipulate(prodotti, (array) => filterByPrice(array, 10)));

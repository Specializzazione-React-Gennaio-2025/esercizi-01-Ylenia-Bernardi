const databaseCars = [
    { brand: "BMW", model: "x-123" },
    { brand: "Fiat", model: "500" }
];

function displayCars() {
    setTimeout(() => {
        console.log("Modelli presenti nello store:");
        databaseCars.forEach(car => {
            console.log(`${car.brand} - ${car.model}`);
        });
    }, 1000);
}

function addCar(newCar) {
    return new Promise(resolve => {
        setTimeout(() => {
            databaseCars.push(newCar);
            console.log(`Nuovo modello aggiunto: ${newCar.brand} - ${newCar.model}`);
            resolve();
        }, 2000);
    });
}

async function main() {
    await addCar({ brand: "Tesla", model: "Model S" });
    displayCars(); 
}

main();

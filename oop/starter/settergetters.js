const account = {
    owner: 'Sachet',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 550;
console.log(account.movements)

class Car {
    constructor(carName, carNumber) {
        this.carName = carName;
        this.carNumber = carNumber;
    }

    consoleCar() {
        console.log(this)
    }

    set carmodel(carModel) {
        this.carModel = carModel;
    }

    get carmodel() {
        return this.carModel;
    }
}

const car = new Car("BMW", "BLR3324");
car.consoleCar();
car.carmodel = "BMW";
console.log(car.carmodel)
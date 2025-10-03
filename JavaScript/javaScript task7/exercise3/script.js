class Vehicle{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        return `This car is a ${this.brand}. It's model is ${this.model} and it was made in ${this.year}`
    }
    isOld(){
        let check = (2025 - this.year) > 10;
        return check;
    }
}

class Car extends Vehicle{
    constructor(brand, model, year, fuelType){
        super(brand, model, year);
        this.fuelType = fuelType;
    }

    getInfo(){
         return `This car is a ${this.brand}. It's model is ${this.model} and it was made in ${this.year} and has a fuel type of ${this.fuelType}`;
    }
}

let car1 = new Car("Toyota", "Camry", 2002, "Diesel");
console.log(car1.getInfo());
console.log(car1.isOld());
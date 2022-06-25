class Vehicle{
    constructor(make, model, year, mileage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
    }
    youDrive(){
        console.log(`That's awesome! I didn't see you as a ${this.year} ${this.make} ${this.model} kind've person!`)
    }
    appeal(){
        console.log(`This ${this.make} ${this.model} is a classic with only ${this.mileage} miles on it!`)
    }
}

const firstCar = new Vehicle('Honda', 'Accord', '1992', '30,000 miles', 'red')

firstCar.youDrive()
firstCar.appeal()
//importing vehicle class
import {Vehicle} from "./vehicleBaseClass.js"

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }
    loadPassenger(num){
        this.passenger = num;
        var availableRoom = false; 
        if (this.passenger < this.maximumPassengers)
        {
            return `can fit ${this.passenger} people! Availabe room = ${availableRoom = true}`;
        }
        else{
            availableRoom == false;
            return `can NOT fit ${this.passenger} people! Available room = ${availableRoom = false}`;
        }
    }
    //start function is already made in VehicleBaseClass.js

    scheduleCarService(mileage){
        if (mileage > 30000){
            return `current mileage is ${mileage}. Maintenance required = ${this.scheduleService = true}`;
        }
        else{
            return `current mileage is ${mileage}. Maintenance required = ${this.scheduleService = false}`;
        }
    }
    
}

//this includes the vehicle class as a module
//const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new Vehicle("Mecury", "Sedan", '1965', "Yellow", '150,000');
// console.log(v.make)

//showing output for only 2 passengers
let fourRunner = new Car("Toyota", "4Runner", '2022', "Army Green", '4000')
console.log(`${fourRunner.model} ${fourRunner.make} ${fourRunner.loadPassenger(2)}`);

//showing output for 14 passengers
let tsx = new Car("Acura", "TSX", '2009', "White", '190000')
console.log(`${tsx.model} ${tsx.make} ${tsx.loadPassenger(14)}`);

//envoking the startfunction
console.log(`Can ${fourRunner.model} start? ${fourRunner.start()}`);
//output will be true because in the car class the fuel is set to 100


//envokingthe scheduleCarServiceFunction
console.log(`${tsx.model} ${tsx.make} ${tsx.scheduleCarService(tsx.mileage)}`);
console.log(`${fourRunner.model} ${fourRunner.make} ${fourRunner.scheduleCarService(fourRunner.mileage)}`);
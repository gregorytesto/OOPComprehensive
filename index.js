//                          Vehicle

//      Truck,              Car,                    Boat            RV

// Utility,Light,Heavy      Electic, Hybrid, Autonomous, Sports         Sail, Motor,Jetskis,Dingies,ATV

// Firetruck/Garbage

// class Vehicle {
// 	constructor(make, model, color) {
// 		this.make = make;
// 		this.model = model;
// 		this.color = color;
// 	}
// 	printDetails() {
// 		console.log("Make: " + this.make + ", Model: " + this.model + ", Color: " + this.color);
// 	}
// }

// class Truck extends Vehicle {
// 	constructor(make, model, color, engine) {
// 		super(make, model, color);
// 		this.engine = engine;
// 	}
// }

// class Utility extends Truck {
// 	constructor(make, model, color, engine, isFederallyOwned) {
// 		super(make, model, color, engine);
// 		this.isFederallyOwned = isFederallyOwned;
// 	}
// 	printDetails() {
// 		super.printDetails();
// 		console.log("Engine Size: " + this.engine + ", Is Federally Owned: " + this.isFederallyOwned);
// 	}
// }

// class FireTruck extends Utility {
// 	constructor(make, model, isFederallyOwned, hasDog, waterCapacity) {
// 		super(make, model, "Red & White", "8 Cylinder", isFederallyOwned);
// 		this.hasDog = hasDog;
// 		this.waterCapacity = waterCapacity;
// 	}
// }

// 4 Pillar of OOP
// Encapsulation
// Polymorphism
// Inheritance
// Abstraction

class User {
	#id;
	#isAdmin;
	constructor(id, name, username, password) {
		this.#id = id;
		this.name = name;
		this.username = username;
		this.password = password;
	}
	authenicate() {
		if (true /*username and paasword match*/) {
			this.#isAdmin = true;
		}
	}

	getId() {
		if (this.isAdmin) {
			return this.#id;
		}
	}
	setId(id) {
		if (this.isAdmin) {
			this.#id = id;
		}
	}

	getName() {
		return this.name;
	}
	setName(name) {
		this.name = name;
	}
}

let me = new User(1, "Greg", "gtesto", "234ohj2%$%");

console.log(me.name);

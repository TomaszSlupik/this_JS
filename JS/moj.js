// THIS i WINDOW
console.log(this);
console.log(window);

// THIS w zwykłej funkcji
const personOne = {
	first_name: "Jan",
	last_name: "Kowalski",
	more_info: {
		city: "Warszawa",
		"post-code": "02-344",
		showCity: function () {
			console.log(this.city);
			console.log(this);
		},
	},
};

personOne.more_info.showCity();

// THIS w konstruktorze

function training(first_training, second_training, third_training) {
	this.first_training = first_training;
	this.second_training = second_training;
	this.third_training = third_training;
}

userOne = new training("bieganie", "judo", "siłownia");
userTwo = new training("pływanie", "rower", "bieganie");

console.log(userOne);
console.log(userTwo);

// THIS - w zwykłej funkcji,  w funkcji strzałkowej, funkcja strzałkowea wewnątrz funkcji

const dogOne = {
	name: "Reks",
	age: 2,
	showName() {
		console.log(this.name);
	},
	showTwoName: () => {
		console.log(this.name);
	},
	showThreeName() {
		const test = () => {
			console.log(this.name);
		};
		test();
	},
};

dogOne.showName();
dogOne.showTwoName();
dogOne.showThreeName();

// THIS + BIND

function testFood() {
	console.log(this);
	console.log(this.nameFood);
}

const foodOne = {
	nameFood: "spaghetti 🍝",
};
const foodTwo = {
	nameFood: "bagietki🥖",
};
const foodThree = {
	nameFood: "lody🍨 🍦",
};

testFood.bind(foodOne)();
testFood.bind(foodTwo)();
testFood.bind(foodThree)();

// THIS, CALL, APPY

const movie = {
	name_movie: "Spiderman",
};

function showMowie(price, duration) {
	console.log(
		`Film ${this.name_movie} kosztuje ${price} i trwa ${duration} minut`
	);
}
showMowie(20, 120);
showMowie.call(movie, 20, 120);
console.log(``);
showData = [20, 120];
showMowie.apply(movie, showData);

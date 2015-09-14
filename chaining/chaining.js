// METHOD CHAINING

var Settings = {
	make : "",
	model : "",
	colour : "",
	year : "",
	price : "",
	notes : ""
};

function Car(settings){
	this.make = settings.make;
	this.model = settings.model;
	this.colour = settings.colour;
	this.year = settings.year;
	this.price = settings.price;
	this.condition = settings.condition; 
	this.notes = settings.notes; 
};

Car.prototype.setMake = function(make){
	this.make = make;
	return this;
};

Car.prototype.setModel = function(model){
	this.model = model;
	return this;
};

Car.prototype.setColour = function(colour){
	this.colour = colour;
	return this;
};

Car.prototype.setYear = function(year){
	this.year = year;
	return this;
};

Car.prototype.setPrice = function(price){
	this.price = price;
	return this;
};

Car.prototype.setCondition = function(condition){
	this.condition = condition;
	return this;
};

Car.prototype.setNotes = function(notes){
	this.notes = notes;
	return this;
};

Car.prototype.save = function(){
	console.log("Saving : "+this.make+", "+this.model+", "+this.colour+", "+this.year+", "+this.price+", "+this.condition+", "+this.notes+".");
	return this;
};

new Car(Settings)
	.setMake("Ford")
	.setModel("Cougar")
	.setColour("Yellow/Black")
	.setYear("1976")
	.setPrice("£19,500")
	.setCondition("Excellent")
	.setNotes("Recently restored")
	.save();


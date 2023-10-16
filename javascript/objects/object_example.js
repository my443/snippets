function Car(name, make) {
    this.name = name;
    this.make = make;

    this.go = function (place) {
        console.log(name + " went to "+place);
    }
}

c = new Car('tercel', 'toyota');
c.go('home')
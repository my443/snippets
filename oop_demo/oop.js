class Car{
    type = 'Ford';
    driver = null;

    drive(){
        console.log('Car is driving forward.');
    }
}

class Car{

    type = 'Ford';
    driver = null;

    drive(){
        if (this.driver == null){
            console.log('There is no driver in the car.');
        }
        else {
        console.log('Car is driving forward.');
        }
    }

    constructor(type, driver) {
        this.type = type;
    }

}

// #0 
class Person{
    name = '';
    age = 0;
    has_drivers_license = false;

}

// #1
class Person{
    name = '';
    age = 0;
    has_drivers_license = false;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// #2
class Car{
    manufacturer = null;
    driver = null;

    drive(){
        console.log('Car is driving forward.');
    }
}

// #3
class Car{
    manufacturer = null;
    driver = null;

    drive(){
        console.log('Car is driving forward.');
    }

    constructor(manufacturer) {
        this.manufacturer = type;
    }

}
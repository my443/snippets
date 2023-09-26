class Car{
    type = 'Ford';
    driver = null;

    drive(){
        console.log('Car is driving forward.');
    }
}

class Car{

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
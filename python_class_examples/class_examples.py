class Person():
    name = ''

    def name_person(self, name):
        self.name = name
        

class Car():
    name = ''
    driver = None

    def get_into_drivers_seat(self, Person):
        self.driver = Person

    def drive(self):
        returnValue = ''
        
        if self.driver == None:
            returnValue = 'There is no one to drive the car.'
        else:
            returnValue = 'vroom - away you go.'

        return returnValue
    
    def name_car(self, name):
        self.name = name
        
##someone = Person()
##someone.name_person('John')
##
##my_car = Car()
##my_car.drive()
##my_car.get_into_drivers_seat(someone)
##my_car.drive()
##
##my_car.name_car('Lambourghini')
##print(my_car.name)



    

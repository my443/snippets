import unittest
from class_examples import *



class TestCar(unittest.TestCase):
    def setUp(self):
        self.car = Car()        
    
    def test_car_exists(self):
        """Is the a new car object an instance of Car()?"""        
        self.assertIsInstance(self.car, Car)

    def test_car_name(self):
        """Is the name of the car blank when instantiated?"""
        self.assertEqual(self.car.name, '')

    def test_added_car_name(self):
        """If you add a car name, you can call it again."""
        self.car.name_car('Lamborghini')
        self.assertEqual(self.car.name, 'Lamborghini')

    def test_cant_drive_without_driver(self):
        """You can't drive without a driver."""
        self.assertEqual(self.car.drive(), 'There is no one to drive the car.')

    def test_can_drive_car_with_driver(self):
        """If there is a driver you can drive the car"""
        person = Person()
        self.car.get_into_drivers_seat(person)
        
        self.assertEqual(self.car.drive(), 'vroom - away you go.')
    

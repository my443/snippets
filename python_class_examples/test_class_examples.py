import unittest
from class_examples import *


class TestCar(unittest.TestCase):
    
    def test_car_exists(self):
        """Is the a new car object an instance of Car()?"""
        car = Car()
        self.assertIsInstance(car, Car)

    def test_car_name(self):
        """Is the name of the car blank when instantiated?"""
        car = Car()
        self.assertEqual(car.name, '')

    def test_added_car_name(self):
        """If you add a car name, you can call it again."""
        car = Car()
        car.name_car('Lamborghini')
        self.assertEqual(car.name, 'Lamborghini')

    def test_cant_drive_without_driver(self):
        """You can't drive without a driver."""
        car = Car()
        self.assertEqual(car.drive(), 'There is no one to drive the car.')

    def test_can_drive_car_with_driver(self):
        """If there is a driver you can drive the car"""
        car = Car()
        person = Person()
        car.get_into_drivers_seat(person)
        
        self.assertEqual(car.drive(), 'vroom - away you go.')
    

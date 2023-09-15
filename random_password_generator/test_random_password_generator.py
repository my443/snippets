import unittest
import random_password_generator

class TestRandomPasswords(unittest.TestCase):
    def test_length_of_password(self):
        p = random_password_generator.random_password(5)
        self.assertEqual(len(p), 5)

    def test_no_length_of_password(self):
        p = random_password_generator.random_password(0)
        self.assertEqual(len(p), 0)
                
    def test_long_length_of_password(self):
        p = random_password_generator.random_password(1000)
        self.assertEqual(len(p), 1000)
                        

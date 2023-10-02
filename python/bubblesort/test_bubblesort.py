import unittest
import bubblesort

class TestStringMethods(unittest.TestCase):

    def test_sort1(self):
        self.assertEqual(bubblesort.bubblesort([1, 7, 3, 2, 8, 5]), [1, 2, 3, 5, 7, 8])

    def test_sort2(self):
        self.assertEqual(bubblesort.bubblesort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1, 1,  2, 2, 4,  8, 32,43, 43, 55, 63, 92, 123, 123, 234, 345, 5643])
        

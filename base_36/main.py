import sys

def convert_to_base36(base_36_number):
    """To be used to convert the Alayacare base 36 number used in the URL
        to the integer used as the person's id."""
    return int(base_36_number, 36)


## to run: py .\main.py 1a6 ## The last number is the base 36 number.
if __name__ == '__main__':
    print(convert_to_base36(sys.argv[1]))

# See PyCharm help at https://www.jetbrains.com/help/pycharm/

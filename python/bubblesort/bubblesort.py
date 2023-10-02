

array = [5, 3, 7, 1, 4]
array = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]

def bubblesort(array):
    for index, item in enumerate(array):
        #print('Round: ',index, ' -- ', array)

        for index, value in enumerate(array[:-index]):
            if array[index] > array[index + 1]:
                first = array[index]
                second = array[index+1]
                array[index] = second
                array[index +1] = first
                swapped = True


              #print('              ', l, swapped)
    return array


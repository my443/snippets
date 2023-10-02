

l = [5, 3, 7, 1, 4]

for level_one_index, round_one_item in enumerate(l):
    print('Round: ',level_one_index, ' -- ', l)
    swapped = False
    
    for index, value in enumerate(l[level_one_index:]):

        
        if index < len(l)-1:
            if l[index] > l[index + 1]:
                first = l[index]
                second = l[index+1]
                l[index] = second
                l[index +1] = first
                swapped = True
                
            print('              ', l, swapped)


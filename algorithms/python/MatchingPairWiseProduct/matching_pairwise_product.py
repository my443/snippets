#python3
#n = int(input())
#a = [int(x) for x in input().split()]
#assert(len(a) == n)

import random

def get_random_list(length_of_list, top_random_value):
    returnList = [random.randrange(0, top_random_value) for i in range(length_of_list)]
    return returnList        
    
def slow_matching_pairwise(n, a):
    result = 0

    for i in range(0, n):
        for j in range(i+1, n):
            if a[i]*a[j] > result:
                result = a[i]*a[j]

    print(result)
    return result

def fast_matching_pairwise(n, a):
    result = 0

    largest = a[0]
    second_largest = 0
        
    for item in a[1:]:
        if item > largest:
            second_largest = largest
            largest = item
        elif item > second_largest:
            second_largest = item

    result = largest * second_largest

    print(result)
    return result

def other_matching_pairwise(n, a):
    result = 0
    s = sorted(a)
    result = s[-1] * s[-2]
    print (result)
    return result

end = 0
while end == 0:
    a = get_random_list(5, 10)
    n = len(a)
    print (a)
    slow = slow_matching_pairwise(n, a)
    fast = fast_matching_pairwise(n, a)
    other = other_matching_pairwise(n, a)

    if slow != fast != other:
        end = 1
    

#python3
n = int(input())
a = [int(x) for x in input().split()]
assert(len(a) == n)

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

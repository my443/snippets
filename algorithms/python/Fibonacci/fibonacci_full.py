#python3
def calc_fib(n):
    returnValue = 0

    if n != 0:
        f = [0, 1]
        for i in range(n-1):
            f.append(f[i] + f[i+1])

        returnValue = f[-1]

    return returnValue

n = int(input())
print(calc_fib(n))

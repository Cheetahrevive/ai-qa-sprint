# Loops — repeating work with for and while.
# Run: python basics/loops.py

def total(numbers):
    result = 0
    for n in numbers:      # for = do this once per item
        result += n
    return result

def countdown(start):
    values = []
    while start > 0:       # while = keep going until the condition is False
        values.append(start)
        start -= 1
    return values

def even_numbers(limit):
    return [n for n in range(limit + 1) if n % 2 == 0]  # list comprehension

if __name__ == "__main__":
    print(total([1, 2, 3, 4]))   # 10
    print(countdown(3))          # [3, 2, 1]
    print(even_numbers(10))      # [0, 2, 4, 6, 8, 10]

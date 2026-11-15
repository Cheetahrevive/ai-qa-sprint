# Problem-solving practice — classic interview-style problems.
# Run: python problem_solving/solutions.py

def fizzbuzz(n):
    if n % 15 == 0:
        return "FizzBuzz"
    if n % 3 == 0:
        return "Fizz"
    if n % 5 == 0:
        return "Buzz"
    return str(n)

def is_palindrome(text):
    cleaned = "".join(ch.lower() for ch in text if ch.isalnum())
    return cleaned == cleaned[::-1]

def reverse_string(text):
    return text[::-1]

def fibonacci(n):
    # Returns the first n Fibonacci numbers as a list.
    seq = []
    a, b = 0, 1
    for _ in range(n):
        seq.append(a)
        a, b = b, a + b
    return seq

def count_vowels(text):
    return sum(1 for ch in text.lower() if ch in "aeiou")

def are_anagrams(a, b):
    return sorted(a.lower()) == sorted(b.lower())

def find_duplicates(items):
    seen, dupes = set(), set()
    for item in items:
        if item in seen:
            dupes.add(item)
        seen.add(item)
    return sorted(dupes)

if __name__ == "__main__":
    print([fizzbuzz(n) for n in range(1, 16)])
    print(is_palindrome("Racecar"))        # True
    print(fibonacci(8))                    # [0, 1, 1, 2, 3, 5, 8, 13]
    print(find_duplicates([1, 2, 2, 3, 3, 3]))  # [2, 3]

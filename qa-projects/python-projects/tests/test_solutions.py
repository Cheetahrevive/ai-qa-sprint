import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from problem_solving.solutions import (fizzbuzz, is_palindrome, reverse_string,
                                       fibonacci, count_vowels, are_anagrams, find_duplicates)

def test_fizzbuzz():
    assert fizzbuzz(3) == "Fizz"
    assert fizzbuzz(5) == "Buzz"
    assert fizzbuzz(15) == "FizzBuzz"
    assert fizzbuzz(7) == "7"

def test_palindrome():
    assert is_palindrome("Racecar") is True
    assert is_palindrome("A man, a plan, a canal: Panama") is True
    assert is_palindrome("hello") is False

def test_reverse():
    assert reverse_string("QA") == "AQ"

def test_fibonacci():
    assert fibonacci(8) == [0, 1, 1, 2, 3, 5, 8, 13]
    assert fibonacci(0) == []

def test_count_vowels():
    assert count_vowels("Automation") == 6

def test_anagrams():
    assert are_anagrams("Listen", "Silent") is True
    assert are_anagrams("hello", "world") is False

def test_find_duplicates():
    assert find_duplicates([1, 2, 2, 3, 3, 3]) == [2, 3]
    assert find_duplicates([1, 2, 3]) == []

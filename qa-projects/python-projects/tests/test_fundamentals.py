import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from basics.conditionals import grade, suite_status
from basics.loops import total, countdown, even_numbers
from basics.variables_and_types import describe
from functions.functions_demo import greet, add, build_user
from file_handling.file_demo import read_lines, count_words
import pytest
from oop.bank_account import BankAccount

def test_grade():
    assert grade(95) == "A" and grade(85) == "B" and grade(50) == "F"

def test_test_result():
    assert suite_status(10, 0) == "PASS"
    assert suite_status(9, 1) == "FAIL"
    assert suite_status(0, 0) == "NO TESTS RUN"

def test_loops():
    assert total([1, 2, 3, 4]) == 10
    assert countdown(3) == [3, 2, 1]
    assert even_numbers(10) == [0, 2, 4, 6, 8, 10]

def test_describe():
    assert describe("Ravi", 13, 67.5, True).startswith("Ravi: 13 years")

def test_functions():
    assert greet("Ravi") == "Hello, Ravi!"
    assert add(2, 3) == 5
    assert build_user("Ravi", "SDET")["role"] == "SDET"

def test_file_handling():
    assert len(read_lines()) == 3
    assert count_words() > 10

def test_bank_account():
    acct = BankAccount("Ravi", 100)
    assert acct.deposit(50) == 150
    assert acct.withdraw(30) == 120
    with pytest.raises(ValueError):
        acct.withdraw(1000)
    with pytest.raises(ValueError):
        acct.deposit(-5)

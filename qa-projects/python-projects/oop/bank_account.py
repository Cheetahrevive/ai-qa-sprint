# Classes and objects — a small BankAccount example.
# A class is a blueprint; an object is one real thing built from it.
# Run: python oop/bank_account.py

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        return self.balance

if __name__ == "__main__":
    account = BankAccount("Ravi", 100)
    account.deposit(50)
    account.withdraw(30)
    print(account.owner, account.balance)   # Ravi 120

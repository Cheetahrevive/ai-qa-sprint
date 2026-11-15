# Functions — named, reusable blocks of code.
# Run: python functions/functions_demo.py

def greet(name, greeting="Hello"):
    # greeting has a default value, so it is optional.
    return f"{greeting}, {name}!"

def add(a, b):
    return a + b

def build_user(name, role, active=True):
    # Return a dictionary — a common way to group related data.
    return {"name": name, "role": role, "active": active}

if __name__ == "__main__":
    print(greet("Ravi"))                 # Hello, Ravi!
    print(greet("Ravi", "Welcome"))      # Welcome, Ravi!
    print(add(2, 3))                     # 5
    print(build_user("Ravi", "SDET"))    # {'name': 'Ravi', 'role': 'SDET', 'active': True}

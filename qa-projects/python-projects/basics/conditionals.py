# Conditionals — making decisions with if / elif / else.
# Run: python basics/conditionals.py

def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

def suite_status(passed, failed):
    # A test run is only green when nothing failed.
    if failed > 0:
        return "FAIL"
    if passed > 0:
        return "PASS"
    return "NO TESTS RUN"

if __name__ == "__main__":
    print(grade(85))            # B
    print(suite_status(10, 0))   # PASS
    print(suite_status(9, 1))    # FAIL

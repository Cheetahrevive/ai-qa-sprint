# Variables and data types — the building blocks.
# Run: python basics/variables_and_types.py

name = "Ravi"            # str  — text
years_experience = 13    # int  — whole number
hourly_rate = 67.50      # float — decimal number
is_automation = True     # bool — True / False

def describe(name, years, rate, automation):
    # An f-string builds text with values inside { }
    return f"{name}: {years} years experience, ${rate}/hr, automation={automation}"

if __name__ == "__main__":
    print(describe(name, years_experience, hourly_rate, is_automation))
    # type() tells you what kind of value something is
    print(type(name), type(years_experience), type(hourly_rate), type(is_automation))

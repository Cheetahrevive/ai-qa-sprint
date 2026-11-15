# File handling — reading and writing text files.
# Run: python file_handling/file_demo.py
import os

DATA_FILE = os.path.join(os.path.dirname(__file__), "..", "data", "sample.txt")

def read_lines(path=DATA_FILE):
    with open(path, "r", encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip()]

def count_words(path=DATA_FILE):
    return sum(len(line.split()) for line in read_lines(path))

if __name__ == "__main__":
    lines = read_lines()
    print(f"{len(lines)} lines, {count_words()} words")
    for line in lines:
        print("-", line)

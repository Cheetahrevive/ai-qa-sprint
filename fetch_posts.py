import requests

resp = requests.get("https://jsonplaceholder.typicode.com/posts")
resp.raise_for_status()
posts = resp.json()
print(f"Fetched {len(posts)} posts")

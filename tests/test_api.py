import requests


def test_get_first_post():
    resp = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    assert resp.status_code == 200
    data = resp.json()
    assert data["id"] == 1

import requests

BASE = "https://jsonplaceholder.typicode.com"


def test_unknown_user_returns_empty_list():
    resp = requests.get(f"{BASE}/posts", params={"userId": 999})
    assert resp.status_code == 200
    assert resp.json() == []


def test_completed_todos_filtered_by_user():
    resp = requests.get(f"{BASE}/todos", params={"userId": 1, "completed": "true"})
    assert resp.status_code == 200
    todos = resp.json()
    assert len(todos) > 0
    assert all(t["userId"] == 1 for t in todos)
    assert all(t["completed"] is True for t in todos)


def test_photos_belong_to_album():
    resp = requests.get(f"{BASE}/albums/1/photos")
    assert resp.status_code == 200
    photos = resp.json()
    assert len(photos) == 50
    assert all(p["albumId"] == 1 for p in photos)
    assert all(p["url"].startswith("https://") for p in photos)

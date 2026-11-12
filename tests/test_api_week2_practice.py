import pytest
import requests

BASE = "https://jsonplaceholder.typicode.com"

@pytest.mark.parametrize("user_id", [1, 2, 3])
def test_posts_filtered_by_user(user_id):
    resp = requests.get(f"{BASE}/posts", params={"userId": user_id})
    assert resp.status_code == 200
    posts = resp.json()
    assert len(posts) == 10
    assert all(p["userId"] == user_id for p in posts)

def test_comments_belong_to_post():
    resp = requests.get(f"{BASE}/posts/1/comments")
    assert resp.status_code == 200
    comments = resp.json()
    assert len(comments) == 5
    assert all(c["postId"] == 1 for c in comments)

def test_users_list_and_single_user():
    resp = requests.get(f"{BASE}/users/1")
    assert resp.status_code == 200
    assert resp.json()["name"] == "Leanne Graham"
    assert "@" in resp.json()["email"]

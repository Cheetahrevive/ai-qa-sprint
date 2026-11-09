import pytest
import requests

BASE = "https://jsonplaceholder.typicode.com"


def test_post_status_headers_and_body():
    resp = requests.get(f"{BASE}/posts/1")
    assert resp.status_code == 200
    assert "application/json" in resp.headers["Content-Type"]
    data = resp.json()
    assert data["id"] == 1
    assert data["userId"] == 1
    assert data["title"]
    assert data["body"]


@pytest.mark.parametrize("post_id", [1, 2, 3])
def test_posts_return_matching_id(post_id):
    resp = requests.get(f"{BASE}/posts/{post_id}")
    assert resp.status_code == 200
    assert resp.json()["id"] == post_id


def test_unknown_post_returns_404():
    resp = requests.get(f"{BASE}/posts/999999")
    assert resp.status_code == 404

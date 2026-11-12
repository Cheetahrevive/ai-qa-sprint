import requests

BASE = "https://jsonplaceholder.typicode.com"


def _get_page(page, limit=10):
    resp = requests.get(f"{BASE}/posts", params={"_page": page, "_limit": limit})
    assert resp.status_code == 200
    return resp


def test_first_page_size_and_total_count():
    resp = _get_page(1)
    assert len(resp.json()) == 10
    assert resp.headers["X-Total-Count"] == "100"


def test_pages_do_not_overlap():
    page1 = [p["id"] for p in _get_page(1).json()]
    page2 = [p["id"] for p in _get_page(2).json()]
    assert not set(page1) & set(page2)
    assert page1 == list(range(1, 11))
    assert page2 == list(range(11, 21))


def test_last_page_has_remaining_posts():
    resp = _get_page(10)
    assert len(resp.json()) == 10


def test_page_past_the_end_is_empty_not_error():
    resp = _get_page(11)
    assert resp.json() == []

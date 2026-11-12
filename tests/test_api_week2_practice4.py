import requests

BASE = "https://httpbin.org"


def _status(code):
    return requests.get(f"{BASE}/status/{code}").status_code


def test_200_ok():
    assert _status(200) == 200


def test_201_created():
    assert _status(201) == 201


def test_client_error_codes():
    assert _status(400) == 400  # Bad Request — malformed input
    assert _status(404) == 404  # Not Found — resource doesn't exist


def test_auth_error_codes():
    assert _status(401) == 401  # Unauthorized — not authenticated (no/invalid token)
    assert _status(403) == 403  # Forbidden — authenticated, but not allowed


def test_server_error_codes():
    assert _status(500) == 500  # Internal Server Error — the service itself failed
    assert _status(502) == 502  # Bad Gateway — service behind the gateway is down
    assert _status(503) == 503  # Service Unavailable — gateway can't reach the service

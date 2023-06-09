from fastapi.testclient import TestClient
from string import printable
from random import randint


def get_random_string():
    return "".join([printable[randint(0, len(printable) - 1)] for _ in range(50)])


def test_summation_endpoint(client: TestClient):
    for i in range(100):  # run a hundred times
        str1 = get_random_string()
        str2 = get_random_string()

        response = client.post(
            "strings/concat",
            json={
                "str1": str1,
                "str2": str2,
            },
        )
        data = response.json()

        assert data["result"] == (str1 + str2)

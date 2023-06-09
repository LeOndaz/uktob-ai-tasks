import pytest
from random import random
from fastapi.testclient import TestClient
from math import isclose

LIST_OF_POSITIVE_NUMS = [i for i in range(500)]
LIST_OF_NEGATIVE_NUMS = [-i for i in range(500)]
LIST_OF_RANDOM_NUMS = [random() for i in range(500)]

# (list of numbers, their sum, checking for equality is safe)
test_cases = (
    (LIST_OF_POSITIVE_NUMS, sum(LIST_OF_POSITIVE_NUMS), True),
    (LIST_OF_NEGATIVE_NUMS, sum(LIST_OF_NEGATIVE_NUMS), True),
    (LIST_OF_RANDOM_NUMS, sum(LIST_OF_RANDOM_NUMS), False),
)


@pytest.mark.parametrize("case", test_cases)
def test_summation_endpoint(client: TestClient, case):
    numbers, result, is_safe = case

    response = client.post(
        "/maths/sum",
        json={
            "numbers": numbers,
        },
    )

    data = response.json()

    if is_safe:
        assert data["result"] == result
        return

    assert isclose(data["result"], result)

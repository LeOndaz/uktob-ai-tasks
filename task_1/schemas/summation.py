from typing import List
from pydantic import BaseModel
from decimal import Decimal


class SummationData(BaseModel):
    numbers: List[Decimal]


class SummationResult(BaseModel):
    result: Decimal

from typing import List

from fastapi import APIRouter, Body
from controllers import maths_controllers
from schemas.summation import SummationResult
from decimal import Decimal


router = APIRouter(prefix="/maths", tags=["maths"])


@router.post("/sum")
def summation(numbers: List[Decimal] = Body(embed=True)) -> SummationResult:
    return maths_controllers.summation(numbers)

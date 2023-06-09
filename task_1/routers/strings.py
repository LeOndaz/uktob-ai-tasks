from fastapi import APIRouter, Body
from controllers import string_controllers
from schemas.strings import StringConcatResult

router = APIRouter(prefix="/strings", tags=["utils"])


@router.post("/concat")
def concat(
    str1: str = Body(embed=True), str2: str = Body(embed=True)
) -> StringConcatResult:
    # note that pydantic coerces the parameters to strings, technically, str1 and str2 can be provided
    # as numbers through the API and pydantic will coerce them to strings
    # because it's mainly a parsing library, not a validation one

    return string_controllers.concat(str1, str2)

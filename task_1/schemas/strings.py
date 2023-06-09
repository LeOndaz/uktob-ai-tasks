from pydantic import BaseModel


class StringConcatResult(BaseModel):
    result: str

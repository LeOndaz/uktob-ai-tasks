from schemas.summation import SummationResult


def summation(nums):
    result = sum(nums)
    return SummationResult(result=result)

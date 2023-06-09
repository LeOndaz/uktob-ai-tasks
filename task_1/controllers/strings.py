from schemas.strings import StringConcatResult


def concat(str1, str2):
    return StringConcatResult(result="{}{}".format(str1, str2))

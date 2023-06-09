import hashlib


def hash_password(password):
    return hashlib.sha256(password.encode("utf8")).hexdigest()


def compare_password(password, hashed_pwd):
    return hash_password(password) == hashed_pwd

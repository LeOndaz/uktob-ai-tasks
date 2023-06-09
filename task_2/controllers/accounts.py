import uuid
from utils import hash_password, compare_password

from fastapi import HTTPException, status


def signup(db, username, password):
    hashed_pwd = hash_password(password)

    for db_username, user in db.get("accounts", {}).items():
        if db_username == username:
            raise HTTPException(
                status.HTTP_403_FORBIDDEN, "username={} is taken".format(username)
            )

    uid = str(uuid.uuid4())

    # index by username
    db["accounts"][username] = {
        "id": uid,
        "username": username,
        "password": hashed_pwd,
    }

    return {
        "id": uid,
        "username": username,
    }


def login(db, username, password):
    accounts = db["accounts"]

    for db_username, user in accounts.items():
        if db_username == username and compare_password(
            password, user["password"]
        ):
            response = user.copy()
            response.pop("password")
            return response

    raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid credentials provided")

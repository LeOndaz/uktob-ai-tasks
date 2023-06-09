from fastapi import APIRouter, Depends

from db import get_db
from schemas.accounts import UserRegistrationData, UserLoginData
from controllers import account_controllers

router = APIRouter(prefix="/accounts")


@router.post("/signup")
def signup(data: UserRegistrationData, db=Depends(get_db)):
    return account_controllers.signup(db, data.username, data.password)


@router.post("/login")
def login(data: UserLoginData, db=Depends(get_db)):
    return account_controllers.login(db, data.username, data.password)

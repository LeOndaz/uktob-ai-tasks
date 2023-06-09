from pydantic import BaseModel, constr


class UserRegistrationData(BaseModel):
    username: constr(min_length=1)
    password: constr(min_length=8)


class UserLoginData(BaseModel):
    username: constr(min_length=1)
    password: constr(min_length=8)

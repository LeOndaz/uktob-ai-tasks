from fastapi import FastAPI
from routers import maths_router, strings_router

app = FastAPI()

for router in [maths_router, strings_router]:
    app.include_router(router)

from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from typing import List

from .database import BaseModel, SessionLocal
from . import models, schemas

# This is a little extreme, but just for testing:
BaseModel.metadata.drop_all()
BaseModel.metadata.create_all()

app = FastAPI()


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


@app.get("/")
def root():
    return {"message": "Hello, World!"}


@app.get("/read", response_model=List[schemas.Step])
def read(db: Session = Depends(get_db)):
    return db.query(models.Step).all()

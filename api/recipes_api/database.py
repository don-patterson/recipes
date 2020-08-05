from sqlalchemy import create_engine, Column, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


_engine = create_engine("postgres://dev:dev@db/dev", echo=True)
SessionLocal = sessionmaker(bind=_engine)
BaseModel = declarative_base(bind=_engine)

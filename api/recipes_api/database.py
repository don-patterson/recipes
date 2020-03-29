from sqlalchemy import create_engine, Column, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


_engine = create_engine("postgres://dev:dev@db/dev", echo=True)
SessionLocal = sessionmaker(bind=_engine)
BaseModel = declarative_base(bind=_engine)


class Model(BaseModel):
    __abstract__ = True

    PAGE_SIZE = 50

    id = Column(Integer, primary_key=True)

    @classmethod
    def next_page(cls, after=None):
        query = cls.query
        if after is not None:
            query = query.filter(cls.id > after)
        return query.order_by(cls.id).limit(cls.PAGE_SIZE).all()

    @classmethod
    def last_page(cls, before=None):
        query = cls.query
        if before is not None:
            query = query.filter(cls.id < before)
        page = query.order_by(cls.id.desc()).limit(cls.PAGE_SIZE).all()
        page.reverse()
        return page
